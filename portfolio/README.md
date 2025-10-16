# Brendan Lieu - Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Contact Integration**: Direct links to email, LinkedIn, and GitHub

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Education background and contact information
- **Experience**: Detailed work history with achievements
- **Projects**: Featured projects with technology stacks and links
- **Skills**: Technical skills organized by category
- **Contact**: Multiple ways to get in touch

## Adding Project Links

To add links to your projects, update the project cards in `src/App.tsx`. Each project has placeholder links that you can replace:

### For each project card, find these lines:
```tsx
<div className="mt-4 flex gap-2">
  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Live Demo</a>
  <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-semibold">GitHub</a>
</div>
```

### Replace the `href="#"` with your actual URLs:
```tsx
<div className="mt-4 flex gap-2">
  <a href="https://your-project-demo.com" className="text-blue-600 hover:text-blue-800 text-sm font-semibold">Live Demo</a>
  <a href="https://github.com/yourusername/project-name" className="text-gray-600 hover:text-gray-800 text-sm font-semibold">GitHub</a>
</div>
```

### Project Locations in Code:
- **RateMyClub**: Lines ~205-208
- **Fabflix**: Lines ~226-229  
- **Academic Search Engine**: Lines ~247-250

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## Customization

### Colors
The website uses a blue and purple gradient theme. To change colors, update the Tailwind classes:
- Primary gradient: `from-blue-600 to-purple-700`
- Accent color: `text-blue-600`
- Background: `bg-gray-50`

### Content
All content is in `src/App.tsx`. Update the text content directly in the JSX to match your information.

### Styling
Additional styles can be added to `src/index.css` or `src/App.css`.

## Deployment

This portfolio can be deployed to any static hosting service:
- **Vercel** (recommended for React apps)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

For Vercel deployment:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## License

This project is open source and available under the [MIT License](LICENSE).
