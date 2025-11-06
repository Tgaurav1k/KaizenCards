# Kaizen Cards - React.js Website

Revolutionary gamified chemistry flashcards for students aged 12-17. Master all 118 periodic table elements 4x faster with fun facts and proven memory techniques.

## 🚀 Features

- ✅ Modern React.js architecture with React Router
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Interactive carousel and image gallery
- ✅ FAQ accordion functionality
- ✅ Smooth scroll animations
- ✅ Policy pages (Privacy, Return, Shipping)
- ✅ Optimized for performance and SEO

## 📁 Project Structure

```
├── public/
│   ├── images/          # All image assets
│   └── index.html       # HTML template
├── src/
│   ├── components/     # React components
│   ├── styles/         # CSS stylesheets
│   ├── App.js          # Main App component
│   └── index.js        # Entry point
├── package.json
├── netlify.toml        # Netlify configuration
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tgaurav1k/KaizenCards.git
   cd KaizenCards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Pages

<img width="1349" height="630" alt="1" src="https://github.com/user-attachments/assets/6f36e491-4f7d-4d97-a110-21b954761067" />
<img width="1346" height="721" alt="Screenshot 2025-11-01 110431" src="https://github.com/user-attachments/assets/7042e993-4fb6-445d-af57-397379a7581b" />


- **Home** (`/`) - Main landing page with product showcase
- **Privacy Policy** (`/privacy-policy`) - Privacy information
- **Return Policy** (`/return-policy`) - Return and refund information
- **Shipping Info** (`/shipping-info`) - Shipping and delivery information

## 🚀 Deployment

### 🧭 Step-by-Step: Deploy React Build to FTP Server

#### 1️⃣ Build Your React App

Run this in your project root:

```bash
npm run build
```

This creates a `/build` folder with optimized static files.

#### 2️⃣ Connect to Your FTP Server

You can use any FTP client such as:

- **FileZilla** (recommended)
- **WinSCP**
- **Cyberduck**
- **VS Code extension** ("FTP Simple" or "SFTP")

**FTP details:**

- **Host:** `145.79.209.72`
- **Username:** `u666984220.products.kaizenlessons.in`
- **Password:** `$P$B1w/aGdVYx3Xj3bD`
- **Port:** `21`

#### 3️⃣ Upload Files

1. In FileZilla, connect using the above credentials.
2. On the remote side, open the directory where your site should be hosted (usually `public_html` or similar).
3. On the local side, open your React project folder → `/build`.
4. Upload all files inside `/build` to the server directory.

#### 4️⃣ Test the Deployment

Once upload completes, visit:

**https://products.kaizenlessons.in**

(or whichever domain/subdomain your FTP directory is mapped to)

The site should load your React build.

## 🛠️ Tech Stack

- **React** 18.2.0
- **React Router DOM** 7.9.5
- **CSS3** with custom animations

## 📄 License

© 2025 Kaizen Microlessons. All rights reserved.

## 📧 Contact

For inquiries: b3solns1@gmail.com

---

Made with ❤️ for Chemistry Students

