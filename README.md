# Abhishek Portfolio

A modern, responsive, and dynamic personal portfolio website built with React, Vite, and custom CSS styling.

## 🚀 Live Demo

[Link to Live Demo](https://abhishekjha27.vercel.app)

---

## ✨ Features

- **Responsive Design:** Optimized for a seamless experience across all screen sizes (mobile, tablet, desktop).
- **Theme Switcher:** Seamless light and dark mode toggling using React Context.
- **Custom Components:**
  - **Hero Section:** Introduction with call-to-action buttons.
  - **About Me:** Biography and brief background.
  - **Skills:** Categorized list of technical skills.
  - **Experience:** Interactive timeline of professional/educational history.
  - **Projects:** Interactive showcase of personal and professional projects.
  - **Contact Form:** Fully functional contact form powered by **EmailJS** for direct client-to-inbox messaging.
  - **Toast Notifications:** Smooth toast alert alerts using a custom React Context provider.
  - **Scroll to Top:** Dynamic button appearing as you scroll down to easily navigate back.
- **Modern UI/UX:** Built with sleek micro-interactions, smooth hover transitions, and clean layouts.

---

## 🛠️ Tech Stack & Tools

- **Frontend Library:** [React](https://react.dev/) (v18)
- **Build Tool:** [Vite](https://vite.dev/) (fast and modern frontend tooling)
- **Styling:** Custom CSS (Modular and responsive design variables)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Service:** [EmailJS](https://www.emailjs.com/) for contact form integration

---

## 📂 Project Structure

```text
portfolio/
├── public/              # Static assets
└── src/
    ├── assets/          # Images, logos, and illustrations
    ├── components/      # Reusable React components
    │   ├── About/       # About section component
    │   ├── Contact/     # Contact form section
    │   ├── Experience/  # Professional timeline
    │   ├── Footer/      # Footer section
    │   ├── Hero/        # Home/Hero landing page
    │   ├── Navbar/      # Responsive navigation menu
    │   ├── Projects/    # Showcase of works
    │   ├── ScrollToTop/ # Floating quick-scroll button
    │   ├── Skills/      # Interactive skills listing
    │   └── Toast/       # Interactive toast alert alerts
    ├── context/         # React Context files (ThemeContext, ToastContext)
    ├── App.css          # Global and component CSS styles
    ├── App.jsx          # Root component wiring all sections
    └── main.jsx         # App entry point
```

---

## ⚙️ Installation & Setup

Follow these simple steps to run the portfolio locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/Abhishek05012004/abhishek-portfolio.git
cd abhishek-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure EmailJS (Optional)
To enable the Contact form to send emails to your inbox:
1. Sign up on [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and an Email Template.
3. Replace the keys/service IDs in your `Contact.jsx` component with your own credentials.

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.


