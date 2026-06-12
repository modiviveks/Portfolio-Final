# Modern Portfolio Website

A stunning, modern, and fully responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional, and visually impressive UI
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 🎭 **Smooth Animations** - Beautiful animations powered by Framer Motion
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Performance Optimized** - Built with Next.js 14 App Router for blazing-fast performance
- 🎯 **SEO Friendly** - Optimized meta tags and semantic HTML
- 🔧 **TypeScript** - Type-safe code for better development experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid development

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** or **pnpm**

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/modiviveks/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action!

## 📁 Project Structure

```
modern-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Home page
├── components/
│   ├── About.tsx             # About section with interests
│   ├── Contact.tsx           # Contact form and information
│   ├── Experience.tsx        # Professional experience timeline
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero/landing section
│   ├── Navbar.tsx            # Navigation bar with theme toggle
│   ├── Projects.tsx          # Featured projects showcase
│   ├── Skills.tsx            # Technical skills grid
│   └── ThemeProvider.tsx     # Theme context provider
├── public/                   # Static assets
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`)
   - Update name, role, and tagline
   - Modify social media links

2. **About Section** (`components/About.tsx`)
   - Edit bio and education details
   - Customize interests

3. **Experience Section** (`components/Experience.tsx`)
   - Add/modify work experience
   - Update achievements and responsibilities

4. **Projects Section** (`components/Projects.tsx`)
   - Add your projects with descriptions
   - Update GitHub links and technologies

5. **Skills Section** (`components/Skills.tsx`)
   - Customize skill categories
   - Add/remove technologies

6. **Contact Section** (`components/Contact.tsx`)
   - Update email and location
   - Modify social media links

### Color Scheme

The primary color scheme can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Modify these values to change the color scheme
    500: '#f59e0b',  // Main primary color
    600: '#d97706',  // Darker shade
    // ... other shades
  },
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `.next` folder to Netlify

### Deploy to Other Platforms

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for other platforms.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance

This portfolio is optimized for performance with:
- Server-side rendering (SSR)
- Automatic code splitting
- Optimized images
- Minimal JavaScript bundle
- Fast page transitions

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vivek Modi**

- GitHub: [@modiviveks](https://github.com/modiviveks)
- LinkedIn: [Vivek Modi](https://www.linkedin.com)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you found this helpful, please consider giving it a star!

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
