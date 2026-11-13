# MD Voyage 2.0 — Mille Destinations Voyage

Frontend demo in **React 19, TypeScript and Vite**, French-language, responsive.

## Features
- Home page, travel offers, Omra, Hajj, circuits
- Destination/category/price filters
- Trip details and sample itineraries
- Favorites, simulated booking form, browser-local booking history
- Public dashboard demo, contact form simulation

**Important:** Prices, dates, availability and travel packages are fictional. Bookings are stored only in localStorage. There is no backend, login, email sending, real payment or actual travel agency booking. Do not enter real personal data.

## Run
`npm install` then `npm run dev`.

## Publish on GitHub Pages
Upload the contents of this folder (not the folder itself) to the `main` branch of `morjani123/mdvoyage`, including `.github/workflows/deploy.yml`.

In GitHub **Settings → Pages → Build and deployment**, select **GitHub Actions**. The workflow installs dependencies, typechecks, builds and deploys the site. `HashRouter` supports GitHub Pages routing.

Expected URL after a successful deployment: https://morjani123.github.io/mdvoyage/
