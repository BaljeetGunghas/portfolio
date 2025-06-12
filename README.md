# 🚀 Baljeet Gunghas Portfolio (Next.js)

This is a [Next.js](https://nextjs.org) project created with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It serves as a personal portfolio with a functional contact form powered by [Resend](https://resend.com).

Deploying on Netlify

🚀 Live Demo
🟢 View the live website here:
👉 https://baljeetgunghasportfolio.netlify.app

## 🛠️ Getting Started

To run the project locally, follow these steps:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```


--------------------------------------------------

## 📁 Folder Structure Overview


```
├── app/
│ ├── api/send-email/ # API route using Resend for email
│ ├── favicon.ico
│ ├── globals.css # Global CSS
│ ├── layout.tsx # App layout
│ └── page.tsx # Homepage
│
├── Components/ # UI Components
│ ├── Footer/
│ ├── Healper/
│ ├── Home/
│ │ ├── About/
│ │ ├── Contact/
│ │ ├── ExperienceTimeline/
│ │ ├── Hero/
│ │ ├── Project/
│ │ ├── Services/
│ │ └── Skills/
│ ├── Home.tsx
│ └── Navbar/
│
├── Constant/ # Static constants
│ └── constant.ts
│
├── Data/ # Static content and data
│ └── data.ts
│
├── public/
│ ├── images/ # Image assets
│ ├── BALJEETSINGHRESUME.pdf
│ ├── *.svg
│
├── .env.local # Environment variables
├── .gitignore
├── eslint.config.js
└── README.md
```

## 🚀 Features

- ✅ Modern Next.js App Router structure
- ✅ Fully responsive UI
- ✅ Modular components for reusability
- ✅ Functional contact form using [Resend API](https://resend.com/)
- ✅ Resume PDF download
- ✅ Hosted on [Netlify](https://netlify.com)

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/BaljeetGunghas/portfolio.git
cd portfolio

npm install
# or
yarn install
```
### 2 Setup environment variables
Create a .env.local file in the root directory:

```
NEXT_PUBLIC_RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_CONTACT_RECEIVER_EMAIL=your_email@example.com
```

### 3. Start development server

```
npm run dev
# or
yarn dev
```
##### Open http://localhost:3000 to see it in action.
---

### 🔤 Fonts
This project uses next/font with the Geist font for optimized performance.

#### 📚 Useful Resources
- Next.js Documentation

- Resend Email API Docs

- Deploying on Netlify
---


## 👤 Author

Name: Baljeet Gunghas

Email: jaatmrharyanvi@gmail.com

GitHub: github.com/baljeetgunghas



---
---