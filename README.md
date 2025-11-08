# Forescribe AI Frontend

This is a Next.js project I built for my internship assignment. It's a frontend application that implements a design from Figma with a welcome modal, card grid, and contact page.

## Getting Started

First, make sure you have Node.js installed (version 18 or higher). Then install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

- `app/` - Next.js app directory with pages
- `components/` - React components for cards, modal, etc.
- `public/images/` - Image assets
- `components/data/cards.ts` - Card data and configuration

## Features

- Home page with welcome modal and authentication buttons
- Card grid showing integrations and user profiles
- Contact page with a form
- Responsive design that works on mobile, tablet, and desktop
- Animations using Framer Motion
- TypeScript for type safety

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Next.js Image component for optimized images

## Deployment

The project can be deployed to Vercel. Just push your code to GitHub and import it in Vercel - it will automatically detect Next.js and set everything up.

To build for production:
```bash
npm run build
npm start
```

## Notes

- The authentication buttons (Google/Microsoft) are placeholders - they don't actually connect to OAuth yet
- The contact form is frontend-only - you'll need a backend API to handle form submissions
- Card data is stored in `components/data/cards.ts` - in a real app this would come from an API
- The welcome modal shows by default on the home page

## Assumptions

I made a few assumptions while building this:

1. The Figma design dimensions (1920x1049 for first section, 1901.95x2194 for cards section) should be maintained with responsive scaling
2. Cards should scale proportionally based on container width
3. The gradient overlay should match the exact Figma specification
4. All images are stored locally in the public folder
5. The modal should be centered and visible on page load

## What I Learned

Building this project helped me learn:
- Next.js App Router and file-based routing
- Framer Motion for animations
- Responsive design with Tailwind CSS
- TypeScript interfaces and type safety
- Component composition and reusability
