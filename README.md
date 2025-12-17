# LPD Security - Multi-Language Website

A modern, responsive website for Shelly home security devices with full English and Croatian language support.

## 🌍 Languages Supported

- **English** (en) - Default language
- **Croatian** (hr) - Full Croatian translation

Language automatically detects from your browser settings and can be manually switched using the language switcher in the header.

## ✨ Features

### 🎨 Modern Design

- Beautiful gradient backgrounds with glassmorphism effects
- Smooth animations and transitions using Framer Motion
- Fully responsive design (mobile, tablet, desktop)
- Blue theme inspired by Shelly branding

### 🌐 Multi-Language Support

- Automatic browser language detection
- Manual language switcher with flag emojis
- Persistent language preference (localStorage)
- 2 languages: English & Croatian (easily extensible)

### 📱 Responsive Layout

- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Adaptive images and components

### 🗺️ TanStack Router

- Type-safe routing with React Router
- Clean route configuration
- Dynamic imports ready

### 🎯 Chakra UI Components

- Pre-built accessible components
- Consistent spacing and typography
- Custom theme with Shelly blue colors
- Dark mode ready

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation with language switcher
│   ├── Footer.tsx           # Footer with translations
│   └── LanguageSwitcher.tsx # Language selection component
├── pages/
│   ├── RootLayout.tsx       # Main layout wrapper
│   ├── Home.tsx             # Home page with hero section
│   ├── Products.tsx         # Product catalog
│   ├── Services.tsx         # Service offerings
│   ├── About.tsx            # Company information
│   ├── Contact.tsx          # Contact form
│   └── NotFound.tsx         # 404 error page
├── locales/
│   ├── en.json              # English translations
│   └── hr.json              # Croatian translations
├── i18n.ts                  # i18n configuration
├── router.tsx               # Route configuration
├── theme.ts                 # Chakra UI theme
└── main.tsx                 # App entry point
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The app runs on `http://localhost:5174` by default.

```bash
# Start with polling (for file systems that don't support file watching)
CHOKIDAR_USEPOLLING=true npm run dev
```

## 🌐 Translation System

### How It Works

1. **Automatic Detection** - Browser language is detected on page load
2. **Manual Selection** - Users can switch languages with the language switcher
3. **Persistence** - Selected language is saved to localStorage
4. **Fallback** - English is used if translation is missing

### Using Translations

```tsx
import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t("home.hero.title")}</h1>;
}
```

### Available Pages

| Page     | URL         | Translation Status                               |
| -------- | ----------- | ------------------------------------------------ |
| Home     | `/`         | ✅ Complete                                      |
| Products | `/products` | 📝 Strings available, ready for page translation |
| Services | `/services` | 📝 Strings available, ready for page translation |
| About    | `/about`    | 📝 Strings available, ready for page translation |
| Contact  | `/contact`  | 📝 Strings available, ready for page translation |
| 404      | `/*`        | 📝 Strings available, ready for page translation |

## 📚 Documentation

- **`I18N_GUIDE.md`** - Complete i18n documentation and reference
- **`TRANSLATION_IMPLEMENTATION.md`** - Implementation summary and status
- **`TRANSLATION_QUICK_START.md`** - Quick guide for adding translations to remaining pages

## 🔧 Technology Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TanStack Router** - Routing
- **Chakra UI** - Component library
- **Framer Motion** - Animations
- **i18next** - Internationalization

### i18n Stack

- **i18next** - Core i18n framework
- **react-i18next** - React integration
- **i18next-browser-languagedetector** - Auto language detection

### Styling

- **Emotion** - CSS-in-JS (via Chakra UI)
- **Lucide React** - Icons

## 📦 Dependencies

```bash
npm install
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The production build is in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🐛 Troubleshooting

### Language Not Detecting

1. Check browser language settings
2. Clear localStorage: `localStorage.clear()`
3. Reload page

### Build Errors

1. Check Node version: `node --version` (require 16+)
2. Clear node_modules: `rm -rf node_modules && npm install`

## 📞 Support

For issues and questions:

- Email: info@shellysecurity.com
- Phone: +1 (555) 123-4567

---

**Version**: 1.0.0  
**Language Support**: English 🇬🇧 | Croatian 🇭🇷  
**Last Updated**: December 2025
