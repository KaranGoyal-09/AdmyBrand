# 🚀 ADmyBRAND AI Suite - Modern SaaS Landing Page

A stunning, highly responsive, and animated SaaS landing page for a fictional AI marketing tool. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

![ADmyBRAND AI Suite](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-0055FF?style=for-the-badge)

## ✨ Features

### 🎨 **Visual Design**
- **Glassmorphism Effects**: Beautiful backdrop blur and transparency effects
- **Gradient Backgrounds**: Dynamic color gradients throughout the site
- **3D Animations**: Tilt effects and perspective transforms on hover
- **Smooth Scroll Animations**: Framer Motion powered scroll-triggered animations
- **Responsive Design**: Mobile-first approach with perfect scaling

### 🚀 **Interactive Elements**
- **Hero Section**: Magnetic hover effects, animated blobs, platform mockup
- **Feature Cards**: 3D tilt effects, glow animations, floating particles
- **Pricing Calculator**: Real-time dynamic pricing with sliders
- **Testimonial Carousel**: Auto-advancing with progress indicators
- **Enhanced Contact Form**: Advanced validation with animated error states
- **FAQ Accordion**: Smooth expand/collapse with custom animations

### 🎯 **Technical Highlights**
- **Next.js 14 App Router**: Latest React framework with server components
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework with custom animations
- **Framer Motion**: Advanced animations and gesture support
- **shadcn/ui**: High-quality React components built on Radix UI
- **Lucide Icons**: Beautiful, customizable icons

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/KaranGoyal-09/AdmyBrand.git
cd AdmyBrand
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
ADmyBrand/
├── app/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Features.tsx    # Features section
│   │   ├── Pricing.tsx     # Pricing section
│   │   ├── TestimonialCarousel.tsx
│   │   ├── AccordionFAQ.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   └── PricingCalculator.tsx
│   ├── data/               # Mock data
│   │   ├── features.ts
│   │   ├── pricing.ts
│   │   └── testimonials.ts
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── README.md
```

## 🎨 Customization

### Colors & Themes
The project uses a custom color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... more colors
}
```

### Animations
Custom animations are defined in `app/globals.css`:

```css
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
```

### Components
Each component is modular and can be easily customized:

- **Hero.tsx**: Main landing section with animated background
- **FeatureCard.tsx**: Individual feature cards with 3D effects
- **PricingCard.tsx**: Pricing plan cards with glassmorphism
- **ContactForm.tsx**: Enhanced contact form with validation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
```bash
npm run build
npm start
```

## 🎯 Key Features Explained

### 1. **Glassmorphism Styling**
```tsx
className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl"
```

### 2. **3D Tilt Effects**
```tsx
const rotateX = useTransform(y, [-100, 100], [30, -30]);
const rotateY = useTransform(x, [-100, 100], [-30, 30]);
```

### 3. **Scroll Animations**
```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

### 4. **Dynamic Pricing Calculator**
Real-time price calculation based on user inputs with animated updates.

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components
1. Create component in `app/components/`
2. Import and use in `app/page.tsx`
3. Add any required data to `app/data/`

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the 8px spacing scale
- Use the defined color palette
- Implement responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS
- **Framer Motion** for the smooth animations
- **shadcn/ui** for the beautiful components
- **Lucide** for the beautiful icons

## 📞 Support

If you have any questions or need help:
- 📧 Email: hello@admybrand.ai
- 📞 Phone: +1 (555) 123-4567
- 🌐 Website: [admybrand.ai](https://admybrand.ai)

---

**Made with ❤️ by the ADmyBRAND Team** 