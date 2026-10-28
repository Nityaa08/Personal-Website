# Nityashree S — portfolio

Live site: https://personal-website-rgag.vercel.app

My personal portfolio: who I am (AI Engineer on the AI Team at Yuno), my experience, skills, education and projects.

## Built with

- React 19 (Create React App, `react-scripts` 5)
- CSS Modules for styling, Framer Motion for animations
- Deployed on Vercel: every push to `main` redeploys the site

## Run it locally

```bash
npm install
npm start          # http://localhost:3000
CI=true npm run build   # production build in build/
```

## Where to change things

| To change | Edit |
|---|---|
| About text | `src/components/About/About.js` |
| Experience and involvement cards | `src/components/Services/Services.js` |
| Skills | `src/components/Skills/Skills.js` |
| Education | `src/components/Education/Education.js` |
| Projects | `src/components/Projects/Projects.js` |
| Contact links | `src/components/Contact/Contact.js` |
| Colours and fonts | `src/styles/variables.css`, `src/styles/global.css` |
