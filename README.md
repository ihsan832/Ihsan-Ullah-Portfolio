# 🚀 Ihsan Ullah — AI/ML Engineer Portfolio

> Modern, responsive, and fully containerized portfolio website built with React, Vite, and Docker

![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🎨 **Modern Design** - Clean, minimalist UI with smooth animations
- ⚡ **Fast & Lightweight** - Built with Vite for instant page loads
- 📧 **Email Integration** - Professional contact form with EmailJS
- 🎭 **Smooth Animations** - Framer Motion for elegant transitions
- 📱 **Fully Responsive** - Mobile-first approach, works on all devices
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🐳 **Dockerized** - Production-ready Docker configuration
- 🌙 **Dark Mode Ready** - Beautiful dark theme by default
- ♿ **Accessible** - WCAG compliant components
- 📊 **Portfolio Showcase** - Display projects, skills, and experience

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, JSX |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3, PostCSS |
| **Animations** | Framer Motion 11 |
| **Icons** | React Icons 5 |
| **Email Service** | EmailJS 4 |
| **Containerization** | Docker, Docker Compose |

---

## 📦 Quick Start

## 📦 Quick Start

### Local Development (Recommended for Development)

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Open in browser
# http://localhost:5173
```

### Docker (Recommended for Testing Production Build)

```bash
# Option 1: Docker Compose (Easiest)
docker-compose up -d

# Option 2: Direct Docker
docker build -t ihsan-portfolio:latest .
docker run -p 3000:3000 ihsan-portfolio:latest

# Access at http://localhost:3000
```

### Docker Hub (Already Built & Published)

```bash
# Pull from Docker Hub
docker pull ihsan177/ihsan-portfolio:latest

# Run anywhere
docker run -p 3000:3000 ihsan177/ihsan-portfolio:latest
```

---

## 📁 Project Structure

```
ihsan-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Hero section with intro
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills with levels
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Projects.jsx        # Portfolio projects
│   │   ├── Contact.jsx         # Contact form with EmailJS
│   │   ├── Footer.jsx          # Footer section
│   │   └── EmailInput.jsx      # Reusable form inputs
│   ├── services/
│   │   └── emailService.js     # Email handling logic
│   ├── config/
│   │   └── emailConfig.js      # Email configuration
│   ├── data.js                 # All your content (EDIT THIS)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── profile.jpg             # Your profile photo
├── Dockerfile                  # Docker image configuration
├── docker-compose.yml          # Docker Compose setup
├── .dockerignore               # Docker build ignores
├── .gitignore                  # Git ignores
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies & scripts
├── EMAIL_SETUP.md              # Email setup guide
├── DOCKER_GUIDE.md             # Docker deployment guide
└── README.md                   # This file
```

---

## ⚙️ Configuration & Customization

### Edit Your Content

Open `src/data.js` and update:
- Personal information (name, email, location)
- Professional summary and tagline
- Skills with proficiency levels
- Work experience and education
- Portfolio projects with links
- Social media links

```javascript
// Example: src/data.js
export const DATA = {
  name: 'Ihsan Ullah',
  role: 'AI/ML Engineer',
  email: 'ihsanokz912@gmail.com',
  github: 'https://github.com/ihsan832',
  linkedin: 'https://www.linkedin.com/in/ihsan-ullah-26bbb9320/',
  // ... more data
}
```

### Customize Colors

Edit `src/index.css` CSS variables:

```css
:root {
  --green: #2dcc7a;        /* primary accent */
  --green-dark: #24a95f;   /* darker accent */
  --bg: #0a0f0d;           /* main background */
  --bg2: #0d1410;          /* alternate background */
  --card: #111a14;         /* card background */
  --border: #1e2e23;       /* border color */
  --text: #e8f0ec;         /* primary text */
  --text-muted: #8aa89a;   /* secondary text */
}
```

### Add Your Photo

1. Prepare a photo (JPG or PNG)
2. Rename it to `profile.jpg`
3. Place it in `/public/` folder
4. It will display automatically

### Setup Email Functionality

1. Create account on [EmailJS](https://www.emailjs.com)
2. Update credentials in `src/config/emailConfig.js`:
   ```javascript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'your_service_id',
     TEMPLATE_ID: 'your_template_id',
     PUBLIC_KEY: 'your_public_key',
   }
   ```
3. See `EMAIL_SETUP.md` for detailed setup

---

## 🚀 Build & Deployment

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Output: /dist folder (optimized for deployment)
```

### Deploy Options

#### **Vercel** (Recommended for Vite)
```bash
npm install -g vercel
vercel deploy
```

#### **Netlify**
```bash
npm run build
# Connect /dist folder to Netlify
```

#### **Railway.app** (Using Docker)
1. Connect GitHub repository
2. Select `ihsan-portfolio` project
3. Deploy automatically

#### **Docker Hub → Anywhere**
```bash
docker pull ihsan177/ihsan-portfolio:latest
docker run -p 3000:3000 ihsan177/ihsan-portfolio:latest
```

#### **AWS / Azure / GCP**
- Use Docker image: `ihsan177/ihsan-portfolio:latest`
- Deploy to container services (ECS, ACI, Cloud Run)

---

## 📧 Email Setup

The contact form uses **EmailJS** for sending emails. 

**Features:**
- ✅ Form validation (client-side)
- ✅ Real-time error messages
- ✅ Loading state during submission
- ✅ Success/error notifications
- ✅ Automatic form reset

**Setup Steps:**
1. Go to [EmailJS.com](https://www.emailjs.com)
2. Create account and service
3. Get: Service ID, Template ID, Public Key
4. Update `src/config/emailConfig.js`
5. Test contact form

See `EMAIL_SETUP.md` for complete guide.

---

## 🐳 Docker Information

### What's Included

- **Multi-stage build** - Optimized for production
- **Alpine Linux** - Minimal, secure base image
- **Health checks** - Container monitoring
- **Environment variables** - Easy configuration
- **Volume support** - For development

### Docker Commands

```bash
# Build
docker build -t ihsan-portfolio:latest .

# Run
docker run -p 3000:3000 ihsan-portfolio:latest

# Compose
docker-compose up -d
docker-compose down

# Push to Registry
docker push ihsan177/ihsan-portfolio:latest
```

See `DOCKER_GUIDE.md` for detailed Docker guide.

---

## 📚 Available Scripts

```bash
# Development
npm run dev          # Start dev server on http://localhost:5173

# Production
npm run build        # Build optimized bundle
npm run preview      # Preview production build locally

# Docker
docker-compose up    # Start with Docker Compose
docker build -t name . # Build Docker image
```

---

## 🎯 Performance Metrics

- ⚡ **Vite Build**: ~2 seconds
- 📦 **Bundle Size**: ~49MB (Docker), ~2MB (gzip)
- 🚀 **Load Time**: <1 second
- 📱 **Mobile Score**: 95+
- ♿ **Accessibility**: A+

---

## 🔐 Environment Variables

Create `.env.local` file:

```env
# EmailJS (Optional - can use config file)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🤝 Contributing

This is a personal portfolio, but improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

---

## 📄 License

MIT License - Feel free to use this as a template for your portfolio!

---

## 👤 Author

**Ihsan Ullah**
- 🌐 Portfolio: [ihsan-portfolio.vercel.app](https://your-portfolio-url.com)
- 💼 LinkedIn: [linkedin.com/in/ihsan-ullah-26bbb9320](https://www.linkedin.com/in/ihsan-ullah-26bbb9320/)
- 🐙 GitHub: [github.com/ihsan832](https://github.com/ihsan832)
- 📧 Email: [ihsanokz912@gmail.com](mailto:ihsanokz912@gmail.com)

---

## 🐳 Docker Hub

Pull ready-to-run image from Docker Hub:

```bash
docker pull ihsan177/ihsan-portfolio:latest
```

[View on Docker Hub](https://hub.docker.com/r/ihsan177/ihsan-portfolio)

---

## 📝 Changelog

### v1.0.0 (Current)
- ✅ Initial release
- ✅ EmailJS integration
- ✅ Docker support
- ✅ Production-ready
- ✅ Mobile responsive
- ✅ Dark theme

---

**Built with ❤️ using React, Vite, and modern web technologies**
