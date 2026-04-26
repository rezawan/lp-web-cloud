# CMS Static Content Files

This folder stores page-level static JSON content so you can render each page from data and later swap to a real CMS API.

## Files

- `home.json`
- `about.json`
- `products.json`
- `domains.json`
- `contact.json`
- `login.json`
- `register.json`

## Shared Structure

Each file follows the same top-level keys:

- `page`: page identifier
- `route`: route path
- `meta`: SEO title and description
- `header`: brand, navigation, and top CTA actions
- `sections`: ordered page sections (render in this order)
- `footer`: footer brand, link groups, and bottom links

## Rendering Tip

Use `sections[].type` as your component resolver key, for example:

- `hero` -> Hero component
- `pricing-plans` -> PricingPlans component
- `faq` -> FAQ component

This lets you keep one renderer pattern across all pages while preserving page-specific content blocks.