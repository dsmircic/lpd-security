import {
  Box,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "@tanstack/react-router";
import { Lock, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg="rgba(255, 255, 255, 0.8)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(37, 99, 235, 0.1)"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.05)"
    >
      <Container maxW="7xl" py={4}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <RouterLink to="/">
            <Flex
              align="center"
              gap={2}
              cursor="pointer"
              _hover={{ transform: "scale(1.05)" }}
              transition="transform 0.3s"
            >
              <Box
                p={2}
                bg="linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
                borderRadius="lg"
              >
                <Lock size={24} color="white" />
              </Box>
              <Box
                fontWeight="bold"
                fontSize="lg"
                bgGradient="linear(to-r, #2563eb, #1d4ed8)"
                bgClip="text"
              >
                Shelly Security
              </Box>
            </Flex>
          </RouterLink>

          {/* Desktop Navigation */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <RouterLink key={link.path} to={link.path}>
                <ChakraLink
                  fontSize="sm"
                  fontWeight={isActive(link.path) ? "600" : "500"}
                  color={isActive(link.path) ? "brand.600" : "gray.700"}
                  borderBottom={isActive(link.path) ? "2px solid" : "none"}
                  borderColor="brand.600"
                  pb={1}
                  transition="all 0.3s"
                  _hover={{
                    color: "brand.600",
                    borderBottomWidth: "2px",
                  }}
                >
                  {link.label}
                </ChakraLink>
              </RouterLink>
            ))}
          </HStack>

          {/* CTA Button */}
          <Button
            display={{ base: "none", md: "flex" }}
            bgGradient="linear(to-r, #2563eb, #1d4ed8)"
            color="white"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
            }}
          >
            Get Started
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </Button>
        </Flex>

        {/* Mobile Navigation */}
        {isOpen && (
          <Box mt={4} display={{ md: "none" }} pb={4}>
            {navLinks.map((link) => (
              <RouterLink key={link.path} to={link.path}>
                <ChakraLink
                  display="block"
                  py={2}
                  fontSize="sm"
                  fontWeight={isActive(link.path) ? "600" : "500"}
                  color={isActive(link.path) ? "brand.600" : "gray.700"}
                  _hover={{ color: "brand.600" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </ChakraLink>
              </RouterLink>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
