# ADmyBRAND AI Suite - Modern SaaS Landing Page

A stunning, responsive landing page for a fictional AI marketing tool built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: Animated hero section, feature cards, pricing calculator
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Accessible**: WCAG compliant components with proper ARIA labels

## 🎨 Design Highlights

- **Glassmorphism Cards**: Modern backdrop blur effects with subtle borders
- **Gradient Text**: Eye-catching gradient text effects for headlines
- **Smooth Animations**: Framer Motion powered scroll-triggered animations
- **Interactive Elements**: Hover effects, micro-interactions, and state transitions
- **Modern Typography**: Clean, readable fonts with proper hierarchy

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admybrand-ai-suite
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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
admybrand-ai-suite/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx
│   │   ├── Hero.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── TestimonialCarousel.tsx
│   │   ├── AccordionFAQ.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── features.ts
│   │   ├── pricing.ts
│   │   └── testimonials.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── utils.ts
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Key Components

### Hero Section
- Animated gradient background with floating elements
- Glassmorphism overlay effects
- Interactive CTA buttons with hover animations
- Statistics display with staggered animations

### Features Section
- 6 feature cards with gradient icons
- Scroll-triggered animations
- Hover effects with subtle shadows
- Responsive grid layout

### Pricing Section
- 3 tiered pricing plans
- Popular plan highlighting
- Feature comparison
- Interactive CTA buttons

### Testimonials
- Auto-advancing carousel
- Smooth transitions between testimonials
- Navigation controls and dots indicator
- Star ratings display

### FAQ Section
- Accordion-style questions
- Smooth expand/collapse animations
- Radix UI powered accessibility
- Comprehensive Q&A content

### Contact Form
- Form validation with error handling
- Loading states and success feedback
- Modern input styling
- Responsive layout

## 🎨 Customization

### Colors
The color scheme can be customized in `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other color variables */
}
```

### Animations
Custom animations are defined in `tailwind.config.ts`:

```typescript
animation: {
  "blob": "blob 7s infinite",
  "fade-in": "fade-in 0.5s ease-out",
  // ... other animations
}
```

### Content
Update the content in the data files:
- `app/data/features.ts` - Feature cards content
- `app/data/pricing.ts` - Pricing plans and features
- `app/data/testimonials.ts` - Customer testimonials

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style
- TypeScript strict mode enabled
- ESLint configuration included
- Prettier formatting (recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

Built with ❤️ using Next.js 14, TypeScript, and modern web technologies. 