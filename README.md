# ZEAKUS Institution public website

This folder contains the existing Vite multi-page project with its public website and the existing Admin, Manager, Trainer, and Student demo entry points. The existing project structure and portal source folders are preserved. The Vercel production build includes only the public website; the browser-only demo portals are excluded. The public website uses the existing hash-based navigation.

## Run locally

1. Install Node.js (version 18 or later).
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL shown in the terminal.

## Deploy to Vercel

1. Create or open a Vercel project and import this project folder/repository. Set the Vercel **Root Directory** to `zeakus-demo` if importing the parent folder.
2. Vercel reads `vercel.json`; its build command is `npm run build` and its output folder is `dist`.
3. Deploy. The public website is at `/`. Existing demo portal source files remain in the project but are not included in the Vercel production output.

You can also deploy with the Vercel CLI from this folder: run `npm install`, then `npx vercel`, and follow the prompts. For a production deployment, run `npx vercel --prod` after linking the project.

## Before publishing

- Check the contact email, telephone numbers, address and Instagram profile in the site settings seed within `index.html`; update or confirm them with ZEAKUS before launch. The seed currently contains `info@zeakus.example`, which is a placeholder.
- Course durations, batches, syllabi, delivery modes and certification details include items marked to be confirmed. Confirm those details before presenting them as final.
- Course fees are not shown publicly. Prospective learners are directed to enquire.
- The Instagram area shows selected preview cards and links to the Instagram profile; it is not a live feed integration. The supplied testimonial MP4 is included at `public/media/student-testimonial.mp4`. It is repeated as the visible content in scrolling Home feed cards and opens in a player when selected. The Instagram previews and hiring-partner ticker scroll automatically; partner names are dummy placeholders. Demo trainer and testimonial cards are sample content; replace them with approved profiles and feedback before publishing. The placement page has editable placeholders for verified student-placement and experience counts rather than invented figures.
- Enquiry forms keep a local browser copy and open WhatsApp with a prefilled message addressed to ZEAKUS. The visitor must tap Send in WhatsApp; the site does not send messages automatically. The demo class popup requires a course selection. Connect a backend/form service if you need a shared lead inbox.
- Privacy, terms and refund policy text in the project is explicitly marked as draft. Replace it with institution-approved wording before accepting live enquiries/payments.
- The existing Admin/Manager/Trainer/Student source pages are browser-only demo portals with demo logins and no server-side authentication. They are excluded from this production build. Do not publish them as secure portals or place real personal data in them. The future admin system remains a separate phase.

## Project commands

- `npm run dev` — local development server
- `npm run build` — production build into `dist/`
- `npm run preview` — preview the production build locally
