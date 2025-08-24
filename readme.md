# REEVATECH - HVAC & Kitchen Equipment Solutions

[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive website for REEVATECH - a leading provider of HVAC systems and commercial kitchen equipment installation, maintenance, and support services.

## 🚀 Features

- **Modern Design**: Clean, professional UI with responsive design
- **Dynamic Content**: Database-driven portfolio, services, and testimonials
- **Admin Dashboard**: Full-featured admin panel for content management
- **Contact System**: Integrated contact forms and inquiry management
- **Service Scheduler**: Online appointment booking system
- **Quote Calculator**: Interactive pricing calculator for services
- **Newsletter Signup**: Email subscription management
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

reevatech-website/
├── app/ # Next.js App Router pages
│ ├── admin/ # Admin dashboard pages
│ ├── api/ # API routes
│ └── page.tsx # Home page
├── components/ # React components
│ ├── admin/ # Admin-specific components
│ ├── ui/ # Reusable UI components
│ └── ... # Feature components
├── lib/ # Utilities and configurations
├── public/ # Static assets
└── scripts/ # Database setup scripts

text

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm
- Supabase account

### Installation

1. **Clone the repository**
git clone https://github.com/kanhaiyas103/REEVATECH.git
cd REEVATECH

text

2. **Install dependencies**
npm install

or
yarn install

or
pnpm install

text

3. **Set up environment variables**

Create a `.env.local` file in the root directory:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

text

4. **Set up the database**

Run the provided SQL scripts in your Supabase dashboard:
Execute in order:
scripts/01-create-tables.sql
scripts/02-seed-data.sql

text

5. **Run the development server**
npm run dev

or
yarn dev

or
pnpm dev

text

6. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application uses the following main tables:

- **services**: HVAC and kitchen equipment services
- **portfolio_projects**: Completed project showcases
- **testimonials**: Customer reviews and feedback
- **inquiries**: Contact form submissions

## 🎨 Key Components

- **Hero Section**: Eye-catching landing area with call-to-action
- **Services Section**: Dynamic service listings from database
- **Portfolio Section**: Featured project gallery
- **Testimonials**: Customer reviews carousel
- **Contact Form**: Lead generation and inquiry management
- **Admin Dashboard**: Content management system

## 📱 Pages

- `/` - Home page with all main sections
- `/admin` - Admin dashboard (password protected)
- `/quote-calculator` - Interactive pricing tool
- `/schedule` - Service appointment booking

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Copy your project URL and anon key
3. Run the SQL scripts to create tables
4. Enable Row Level Security (RLS) if needed

### Customization

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Content**: Update static content in component files
- **Images**: Replace placeholder images in the `public/` directory

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!



## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



**REEVATECH** - Professional HVAC & Kitchen Equipment Solutions

- Website: [Your Website URL]
- Email: info@reevatech.com
- Phone: [Your Phone Number]

Project Link: [https://github.com/kanhaiyas103/REEVATECH](https://github.com/kanhaiyas103/REEVATECH)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Supabase](https://supabase.com/) - Open source Firebase alternative
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit

---

⭐ **If you like this project, please give it a star!** ⭐
