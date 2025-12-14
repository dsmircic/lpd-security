# Shelly Security Website - Multi-Language Support

This website now includes full multi-language support with **English** and **Croatian** translations using i18next.

## 🌍 Supported Languages

- **English** (en) - Default language
- **Croatian** (hr) - Croatian translation

## 🔧 How Language Detection Works

The language is automatically detected based on your browser settings in this order:

1. **Browser Language** - Detects your browser's default language
2. **localStorage** - Remembers your manual language selection
3. **Fallback** - Defaults to English if no match is found

When you manually switch languages using the language switcher, your choice is saved in localStorage and persists across sessions.

## 📁 Translation Files

Translation files are located in `src/locales/`:

```
src/locales/
├── en.json       # English translations
└── hr.json       # Croatian translations
```

### Structure of Translation Files

Each translation file is organized by page/section:

```json
{
  "header": { ... },
  "home": { ... },
  "products": { ... },
  "services": { ... },
  "about": { ... },
  "contact": { ... },
  "footer": { ... },
  "notFound": { ... },
  "common": { ... }
}
```

## 🎯 Using Translations in Components

### Basic Usage

```tsx
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t } = useTranslation();

  return <h1>{t("home.hero.title")}</h1>;
}
```

### With Interpolation

For translations with variables:

```json
{
  "footer": {
    "copyright": "© {year} Shelly Security. All rights reserved."
  }
}
```

```tsx
{
  t("footer.copyright", { year: 2025 });
}
```

## 🌐 Language Switcher Component

The language switcher is available in:

- **Header** - On desktop and mobile navigation
- **Mobile Menu** - Dedicated language switcher in mobile drawer

Click the globe icon to open the language menu and select your preferred language.

### LanguageSwitcher Component

Located at: `src/components/LanguageSwitcher.tsx`

```tsx
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Header() {
  return (
    <>
      <LanguageSwitcher />
    </>
  );
}
```

## ⚙️ i18n Configuration

The i18n configuration is in `src/i18n.ts`:

```typescript
i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // React bindings
  .init({
    resources: {
      en: { translation: en },
      hr: { translation: hr },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // Allow HTML in translations
    },
    detection: {
      order: ["navigator", "localStorage", "sessionStorage"],
      caches: ["localStorage"],
    },
  });
```

## 📝 Adding New Translations

### Step 1: Add to English translations

```json
// src/locales/en.json
{
  "newSection": {
    "newKey": "English text"
  }
}
```

### Step 2: Add to Croatian translations

```json
// src/locales/hr.json
{
  "newSection": {
    "newKey": "Tekst na hrvatskom"
  }
}
```

### Step 3: Use in component

```tsx
const { t } = useTranslation()
<p>{t('newSection.newKey')}</p>
```

## 🔄 Changing Language Programmatically

```tsx
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { i18n } = useTranslation();

  const switchToEnglish = () => {
    i18n.changeLanguage("en");
  };

  const switchToCroatian = () => {
    i18n.changeLanguage("hr");
  };

  return (
    <>
      <button onClick={switchToEnglish}>English</button>
      <button onClick={switchToCroatian}>Hrvatski</button>
    </>
  );
}
```

## 🎨 Pages with Translations

All pages have been updated with i18n support:

- **Home** (`src/pages/Home.tsx`) - ✅ Translated
- **Products** (`src/pages/Products.tsx`) - Ready for translation
- **Services** (`src/pages/Services.tsx`) - Ready for translation
- **About** (`src/pages/About.tsx`) - Ready for translation
- **Contact** (`src/pages/Contact.tsx`) - Ready for translation
- **Header** (`src/components/Header.tsx`) - ✅ Translated
- **Footer** (`src/components/Footer.tsx`) - ✅ Translated
- **Not Found** (`src/pages/NotFound.tsx`) - Ready for translation

## 🧪 Testing Translations

1. Open the website in your browser
2. Check your browser's language setting:
   - If set to Croatian (hr), the site will display in Croatian
   - If set to English (en), the site will display in English
3. Click the language switcher to manually change the language
4. Check the browser's localStorage to see saved preference

## 📦 Dependencies

- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next
- **i18next-browser-languagedetector** - Browser language detection

Install with:

```bash
npm install i18next react-i18next i18next-browser-languagedetector
```

## 🚀 Deployment Notes

- Translation files are bundled with the application
- Language preference is stored in localStorage (no server-side storage needed)
- The site automatically detects browser language on first visit
- Add more languages by following the "Adding New Translations" section

## 📚 Resources

- [i18next Documentation](https://www.i18next.com/)
- [React-i18next Documentation](https://react.i18next.com/)
- [i18next Browser Language Detector](https://github.com/i18next/i18next-browser-languageDetector)
