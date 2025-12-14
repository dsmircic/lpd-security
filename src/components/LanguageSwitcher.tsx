import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "🇬🇧 English" },
    { code: "hr", name: "🇭🇷 Hrvatski" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        leftIcon={<Globe size={20} />}
        fontSize="sm"
        fontWeight="500"
        _hover={{ bg: "rgba(37, 99, 235, 0.1)" }}
      >
        {currentLanguage?.name || "English"}
      </MenuButton>
      <MenuList>
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            fontWeight={i18n.language === lang.code ? "600" : "400"}
            bg={i18n.language === lang.code ? "brand.50" : "transparent"}
          >
            {lang.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
