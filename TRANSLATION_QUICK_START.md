# Translation Template for Remaining Pages

This guide helps you quickly add translations to the remaining pages.

## Quick Start - Translation Steps

### 1. Products Page Translation

**File**: `src/pages/Products.tsx`

Add this import:

```tsx
import { useTranslation } from "react-i18next";
```

Add in component:

```tsx
const { t } = useTranslation();
```

Then update content with `t()` calls. Example:

```tsx
// Before
<Heading as="h1" size="2xl">Our Product Catalog</Heading>

// After
<Heading as="h1" size="2xl">{t('products.title')}</Heading>
```

### 2. Services Page Translation

**File**: `src/pages/Services.tsx`

Same pattern as above. Key translation paths already in `en.json` and `hr.json`:

- `services.title`
- `services.description`
- `services.installation`
- `services.monitoring`
- etc.

### 3. About Page Translation

**File**: `src/pages/About.tsx`

Uses:

- `about.title`
- `about.description`
- `about.story`
- `about.why`
- `about.whyFeatures`

### 4. Contact Page Translation

**File**: `src/pages/Contact.tsx`

Uses:

- `contact.title`
- `contact.form.*`
- `contact.phone*`
- `contact.email*`
- `contact.address*`
- `contact.hours*`

### 5. Not Found Page Translation

**File**: `src/pages/NotFound.tsx`

Uses:

- `notFound.title`
- `notFound.heading`
- `notFound.description`
- `notFound.goHome`
- `notFound.goBack`

## Translation Strings Already Available

All translation strings for all pages are already in:

- `src/locales/en.json` ✅
- `src/locales/hr.json` ✅

You just need to **use them in the components**.

## Common Patterns

### Pattern 1: Simple Text

```tsx
<Heading>{t("products.title")}</Heading>
```

### Pattern 2: Array Mapping

```tsx
{
  services.map((service) => (
    <Heading key={service.id}>{t(`services.${service.id}.title`)}</Heading>
  ));
}
```

### Pattern 3: With Interpolation

```tsx
<Text>{t("footer.copyright", { year: 2025 })}</Text>
```

### Pattern 4: Nested Objects

```tsx
// en.json
{
  "form": {
    "label": "Full Name",
    "placeholder": "Your name"
  }
}

// Component
<FormLabel>{t('form.label')}</FormLabel>
<Input placeholder={t('form.placeholder')} />
```

## Batch Find & Replace in VS Code

### Find all hardcoded strings in Products page:

1. Open `src/pages/Products.tsx`
2. Use Find & Replace (Ctrl+H)
3. Find: `"Our Product Catalog"`
4. Replace: `{t('products.title')}`

## Testing Each Page

After updating a page:

1. Start dev server: `npm run dev`
2. Go to the page: `http://localhost:5174/products`
3. Change language with the switcher
4. Verify content updates instantly

## Translation Keys Reference

### All Available Keys:

```
header.*
home.*
products.*
services.*
about.*
contact.*
footer.*
notFound.*
common.*
```

See full list in:

- `src/locales/en.json` - English keys and values
- `src/locales/hr.json` - Croatian translations

## Checklist for Complete Translation

- [ ] Products page - Add `useTranslation()` and update strings
- [ ] Services page - Add `useTranslation()` and update strings
- [ ] About page - Add `useTranslation()` and update strings
- [ ] Contact page - Add `useTranslation()` and update strings
- [ ] Not Found page - Add `useTranslation()` and update strings
- [ ] Test each page in English and Croatian
- [ ] Test language switcher on each page
- [ ] Test navigation between pages maintains language

## Estimated Effort

- Products page: 5-10 min
- Services page: 5-10 min
- About page: 5-10 min
- Contact page: 5-10 min
- Not Found page: 2-3 min
- Testing: 10-15 min

**Total**: ~45-60 minutes for complete translation

## Helpful Tips

1. **Keep IDs consistent** - Use same feature/product names in keys
2. **Use nested objects** - Organize by component/section
3. **Test both languages** - Don't just translate, verify display
4. **Check for truncation** - Some text might be longer in Croatian
5. **Preserve HTML** - Don't translate inside `<b>`, `<i>` tags

## Getting Help

If you need to add a translation key that doesn't exist:

1. Add to both `en.json` and `hr.json` files
2. Use in component with `t('newKey')`
3. Restart dev server if needed

## Example: Adding Missing Key

If a page needs `"My Custom Text"`:

1. **en.json**:

```json
{
  "pages": {
    "mypage": {
      "customText": "My Custom Text"
    }
  }
}
```

2. **hr.json**:

```json
{
  "pages": {
    "mypage": {
      "customText": "Moj Prilagođeni Tekst"
    }
  }
}
```

3. **Component**:

```tsx
<p>{t("pages.mypage.customText")}</p>
```

---

**Happy translating!** 🌍

Questions? Check `I18N_GUIDE.md` for detailed documentation.
