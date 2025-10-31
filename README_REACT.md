# Kaizen Microlessons - React.js Website

This is a React.js conversion of the WordPress website for Kaizen Microlessons.

## Project Structure

```
wordpress/
├── public/
│   ├── images/          # All image assets
│   └── index.html       # HTML template
├── src/
│   ├── components/     # React components (JSX)
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── ProblemSection.js
│   │   ├── SolutionSection.js
│   │   ├── ProductDetails.js
│   │   ├── SocialProof.js
│   │   ├── FinalCTA.js
│   │   ├── FAQ.js
│   │   ├── StickyCTA.js
│   │   └── Footer.js
│   ├── styles/
│   │   └── index.css    # Main stylesheet
│   ├── App.js           # Main App component
│   └── index.js         # Entry point
├── package.json
└── README_REACT.md
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Features

- ✅ All sections converted to React components
- ✅ Carousel functionality with React hooks
- ✅ Image gallery with auto-rotate
- ✅ FAQ accordion functionality
- ✅ Scroll animations using Intersection Observer
- ✅ Responsive design maintained
- ✅ All images in public/images folder

## Notes

- All images are referenced from `/images/` path (public folder)
- CSS file needs to be created from the original HTML styles
- Components use React hooks (useState, useEffect, useRef) instead of vanilla JavaScript
- Smooth scroll and animations are handled in React

## Next Steps

1. Extract CSS from `images/index.html` (lines 19-2247) and save to `src/styles/index.css`
2. Test all functionality
3. Optimize images if needed
4. Deploy to hosting service
