# United Energy Professionals

The United Energy Professionals LLC website is built with React, TypeScript,
and Vite.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

Vite writes the production site to `dist`, ready to deploy to Cloudflare Pages.
Use `npm run preview` to check the production build locally.

## Optional website settings

Set these variables in the Cloudflare Pages build environment to enable the
contact email draft and Kyle O’ Watts introduction video:

- `VITE_CONTACT_EMAIL`: UEP’s public inquiry email address. The contact form
  opens a prefilled draft in the visitor’s email app; it does not send the
  message automatically.
- `VITE_KYLE_VIDEO_AVAILABLE=true`: enables the local video player after the
  30-second introduction file has been uploaded to
  `public/videos/kyle-effigy-intro.mp4`. The player does not autoplay.
