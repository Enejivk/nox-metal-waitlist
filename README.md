# Nox Metals Waitlist App

A modern, responsive waitlist landing page for Nox Metals, built with React, TypeScript, and Vite. This project features a beautiful glassmorphism UI, animated backgrounds, and form validation for collecting early access signups.

## Features

- **Modern UI**: Glassmorphism card, animated diagonal lines, and gradient backgrounds.
- **Responsive Design**: Mobile-friendly and visually appealing on all devices.
- **Form Validation**: Real-time validation for full name and email fields, with clear error messages.
- **Loading State**: Animated spinner and disabled button during submission.
- **Success Feedback**: Confirmation message with icon after successful submission.
- **Branding**: Company logo and Y Combinator badge included.

## Tech Stack

- [React](https://react.dev/) (with hooks)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development
- [Lucide React](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Project Structure

```
├── public/
│   └── favicon.png
├── src/
│   ├── App.tsx         # Main app component (waitlist form)
│   ├── App.css         # Custom styles
│   ├── index.css       # Tailwind base styles
│   ├── main.tsx        # App entry point
│   └── assets/
│       ├── 10001.png   # Company logo
│       └── react.svg
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## How It Works

- **Landing Page**: Shows company branding, a short description, and a waitlist form.
- **Form**: Collects full name and email. Validates input on change and on submit.
- **Validation**: Ensures both fields are filled and email is valid. Errors are shown inline.
- **Submission**: Simulates an API call (with a loading spinner). On success, shows a confirmation message.

## Setup & Running Locally

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd nox-metal-waitlist
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
4. **Open in browser**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization

- **Logo**: Replace `src/assets/10001.png` with your own logo.
- **Branding**: Edit text in `App.tsx` for your company name, description, and badge.
- **API Integration**: Replace the simulated API call in `handleSubmit` with your backend endpoint.

## Deployment

You can deploy this app to Vercel, Netlify, or any static hosting provider. Build with:
```bash
npm run build
```
The output will be in the `dist/` folder.

## License

This project is for demonstration and hiring purposes. Please contact the author for production use.
---
