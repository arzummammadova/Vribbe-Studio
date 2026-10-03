# VRIBBE Studio

Next.js App Router implementation of the existing studio design. Original HTML and assets are retained as migration references; the running site uses `app/`, `components/` and `public/assets/`.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. Routes: `/`, `/work`, `/contact`. Original `.html` URLs redirect to the matching routes.

```sh
npm run build
npm start
```

Forms open the visitor's email client with the entered details. They do not send email through a backend. External icon fonts require internet access.

Page content lives in `app/page.jsx`, `app/work/page.jsx`, and `app/contact/page.jsx`. Shared navigation is in `components/SiteHeader.jsx`; interactive behaviour with lifecycle cleanup is in `components/SiteInteractions.jsx`. Original visual styles are preserved in `public/assets/css/`, with branding overrides in `studio.css`.
