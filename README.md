# Ampisoa Next.js Portfolio

A modern, responsive portfolio website built with Next.js 15, featuring a blog, project showcase, and contact form. This project utilizes the latest features of Next.js App Router and integrates shadcn/ui components for a polished user interface.

## ✨ Features

- 🎨 Modern UI with shadcn/ui components
- 📱 Fully responsive design
- 📝 Blog section with latest and tech categories
- 💼 Dynamic project showcase
- 📬 Contact form with form validation
- 🎯 Profile section
- ⚡ Fast page loads with Next.js App Router
- 🎨 Tailwind CSS for styling

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Icons:** [Radix UI Icons](https://www.radix-ui.com/icons) & [Lucide](https://lucide.dev/)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ampisoa-next.git
cd ampisoa-next
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
ampisoa-next/
├── app/                     # Next.js App Router pages
│   ├── blog/               # Blog section pages
│   ├── contact/            # Contact form page
│   ├── profile/            # Profile page
│   └── projects/           # Project showcase pages
├── components/             # Reusable UI components
│   └── ui/                # shadcn/ui components
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## 📜 Available Scripts

- `pnpm dev` - Run development server with turbopack
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality

## 💻 Development

### Prerequisites

- Node.js 18.17 or later
- pnpm package manager

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting (recommended)

### Adding New Features

1. Create new components in `components/ui/`
2. Add new pages in the appropriate directory under `app/`
3. Use shadcn/ui components for consistent UI
4. Follow TypeScript best practices
5. Test thoroughly before committing

## 🌐 Deployment

The application is optimized for deployment on [Vercel](https://vercel.com). For the best experience:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with a single click

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/docs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
