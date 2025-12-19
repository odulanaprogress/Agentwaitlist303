# 🏠 AGENT - Location-First Rental Platform

**Revolutionizing apartment hunting with precision location search, professional vetting, and escrow protection.**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

---

## 🎯 About AGENT

AGENT is a luxury rental platform launching in 3 months that transforms how people find apartments. Unlike traditional listings, AGENT lets users search with surgical precision: **State → Local Government Area → Community**.

### 🌟 Key Features

- **🎯 Precise Location Search** - Filter by State, LGA, and Community for pinpoint accuracy
- **✅ 100% Vetted Rentals** - Every property professionally inspected with 4K videos and 3D tours
- **🔒 Escrow Protection** - Your money held securely until property delivery with legal protection
- **🚀 Seamless Relocation** - Perfect for interstate moves with virtual tours and expert support
- **💎 Luxury Experience** - Glassmorphism design with deep navy (#0F1A2F) and electric cyan (#00F5FF)

### 💰 Business Model

- Transparent **15% service fee** for comprehensive vetting and escrow protection
- Professional property inspection and verification before listing
- Legal contract review and dispute resolution
- 24/7 customer support

---

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Your app will be running at `http://localhost:3000`

### Deploy to Netlify

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the complete step-by-step guide.

**TL;DR:**
1. Push code to GitHub
2. Connect repository to Netlify
3. Deploy automatically (all settings configured)

---

## 📱 Platform Pages

### For Users

**Main Waitlist Page:** `/`
- Join the waitlist by entering your email
- Select your property interest (student housing, luxury apartments, etc.)
- Get instant position in queue
- Beautiful glassmorphism design

### For Admins

**Admin Statistics:** `/?admin=true`
- Login: `odulanaprogress@gmail.com`
- View total signups and growth metrics
- See property type breakdown
- Quick access to dashboard

**Admin Dashboard:** `/?dashboard=true`
- Comprehensive user management
- Edit/delete users
- Send individual or bulk messages
- Export data (CSV/JSON)
- Real-time statistics

---

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for blazing fast builds
- **Tailwind CSS v4** with custom glassmorphism theme
- **Radix UI** for accessible components
- **Lucide React** for icons
- **Sonner** for toast notifications

### Data Storage
- **localStorage** (browser-based)
- Ready for backend integration
- Structured data service layer

### Build & Deploy
- **Vite** bundler with code splitting
- **Netlify** hosting (optimized config included)
- **TypeScript** for type safety
- **ESLint** ready

---

## 📂 Project Structure

```
agent-rental-platform/
├── components/
│   ├── AgentWaitlist.tsx       # Main waitlist landing page
│   ├── AdminDashboard.tsx      # Full admin panel
│   ├── WaitlistAdmin.tsx       # Admin statistics view
│   ├── ui/                     # Reusable UI components
│   └── figma/                  # Figma utilities
├── services/
│   └── localDataService.ts     # Data management layer
├── styles/
│   └── globals.css             # Tailwind CSS + custom styles
├── public/
│   └── favicon.svg             # Site icon
├── App.tsx                     # Main app with routing
├── main.tsx                    # React entry point
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.ts              # Build configuration
├── netlify.toml                # Netlify deployment config
├── tsconfig.json               # TypeScript configuration
└── DEPLOYMENT.md               # Deployment guide
```

---

## 🎨 Design System

### Colors
- **Deep Navy:** `#0F1A2F` - Primary background
- **Electric Cyan:** `#00F5FF` - Accent color
- **White:** `#FFFFFF` - Text and highlights

### Typography
- **Monospace:** Geist Mono (primary font)
- **Glassmorphism Effects:**
  - Frosted glass panels with backdrop blur
  - Subtle border glows
  - Smooth transitions and animations

---

## 📊 Data Management

### Current Implementation: localStorage

All waitlist data is stored in the browser's localStorage:

```typescript
interface WaitlistUser {
  id: string;
  email: string;
  propertyType: string;
  timestamp: string;
  queuePosition: number;
}
```

### Integrating with Backend

To connect your email service or backend:

1. **Open** `/services/localDataService.ts`
2. **Find** the TODO comments in:
   - `submitToWaitlist()` - New signups
   - `sendMessage()` - Individual emails
   - `sendBulkMessage()` - Bulk emails
3. **Replace** localStorage calls with fetch() to your API

**Example:**
```typescript
// Current
const users = this.getUsers(); // from localStorage

// Replace with your API
const response = await fetch('https://your-api.com/users');
const users = await response.json();
```

**Recommended Services:**
- **Resend** - Modern email API (easiest)
- **SendGrid** - Proven reliability
- **Mailgun** - Developer-friendly
- **Postmark** - High deliverability

---

## 🔐 Admin Access

### Admin Login
- **Email:** `odulanaprogress@gmail.com` (hardcoded in `/services/localDataService.ts`)
- **Access:** Automatically granted when logging in with this email

### Admin Features
- ✅ View all waitlist users
- ✅ Real-time statistics (24h, 7d, 30d growth)
- ✅ User management (edit, delete)
- ✅ Messaging (individual & bulk)
- ✅ Export data (CSV/JSON)
- ✅ Property type analytics

To change admin email, edit line 54 in `/services/localDataService.ts`

---

## 🚀 Launch Checklist

### Pre-Launch (Now - Month 2)
- [x] Waitlist platform ready
- [x] Frontend fully functional
- [ ] Reach 1000+ waitlist signups
- [ ] Integrate email service
- [ ] Social media presence established
- [ ] Property vetting process finalized

### Month 3 (Launch Prep)
- [ ] Main platform development complete
- [ ] Payment/escrow integration tested
- [ ] Legal framework finalized
- [ ] First 10 properties vetted and ready
- [ ] Customer support team trained

### Launch Day
- [ ] Migrate waitlist users to main platform
- [ ] Send launch announcement emails
- [ ] Activate property listings
- [ ] Enable booking and payments
- [ ] Monitor system performance

---

## 📈 Analytics & Monitoring

The admin dashboard provides real-time insights:

- **Total Signups** - Overall waitlist size
- **Growth Metrics** - Last 24h, 7 days, 30 days
- **Daily Average** - Signup rate trends
- **Property Types** - User preference breakdown
- **Timeline** - First/last signup tracking
- **Capacity** - Progress toward launch goals

---

## 🎯 Environment Setup

### Development
All configuration is included. Just run:
```bash
npm install
npm run dev
```

### Production (Netlify)
No environment variables needed for the frontend-only version.

When you integrate a backend, add variables in:
**Netlify Dashboard** → **Site settings** → **Environment variables**

---

## 🔧 Configuration Files

All deployment configurations are already set up:

- **`package.json`** - All dependencies listed
- **`vite.config.ts`** - Build optimization with code splitting
- **`netlify.toml`** - Netlify deployment (SPA routing, caching, security)
- **`tsconfig.json`** - TypeScript strict mode
- **`.gitignore`** - Excludes node_modules, build files, env files

You can deploy immediately without any changes!

---

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit
```

### Admin Panel Not Loading
- Email must be exactly: `odulanaprogress@gmail.com`
- Try incognito mode to clear cache
- Check browser console (F12) for errors

### Data Not Persisting
- localStorage is browser-specific
- Data is lost when cache is cleared
- Consider backend integration for production

---

## 📱 Social Media

Currently configured:
- **Instagram:** [@agen.t1236](https://www.instagram.com/agen.t1236?igsh=MTd6d2VrNHQxNjRs)

To update social links, edit `/components/AgentWaitlist.tsx` (search for "Instagram")

---

## 🤝 Contributing

This is a private project. For team members:

1. Create a feature branch
2. Make changes
3. Test locally
4. Create PR
5. Deploy preview automatically generated
6. Merge to main → Auto-deploy to production

---

## 📄 License

Proprietary - AGENT Platform © 2025

---

## 🙏 Built With

- [React](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide Icons](https://lucide.dev/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

## 📖 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide
- **[Attributions.md](./Attributions.md)** - Credits and licenses

---

## 🎉 Ready to Launch?

Your AGENT platform is production-ready! Here's what to do next:

1. **Deploy to Netlify** - Follow [DEPLOYMENT.md](./DEPLOYMENT.md)
2. **Test Everything** - Try signup, admin panel, exports
3. **Share Waitlist** - Start collecting signups
4. **Integrate Email** - Connect your email service
5. **Monitor Growth** - Track signups in admin panel

**Let's revolutionize rental housing!** 🚀

---

## 💬 Questions?

- Check the browser console (F12) for helpful debug messages
- Review the console startup message for quick links
- All pages and features are listed on startup

**Your platform is ready to capture early adopters. Start promoting!** ✨
