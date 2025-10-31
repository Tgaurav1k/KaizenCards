# Netlify Deployment Guide for Kaizen Microlessons

This guide will help you deploy your React application to Netlify.

## Prerequisites
- A Netlify account (sign up at https://app.netlify.com)
- Your code pushed to GitHub, GitLab, or Bitbucket

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Build the project locally first (optional, to test)**
   ```bash
   npm run build
   ```
   This creates a `build` folder with optimized production files.

2. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

3. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider (GitHub/GitLab/Bitbucket)
   - Select your repository

4. **Configure Build Settings**
   Netlify will auto-detect these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   
   These are already configured in `netlify.toml`, so Netlify should auto-detect them.

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at `https://your-site-name.netlify.app`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   ```
   Follow the prompts to connect to an existing site or create a new one.

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Drag & Drop Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to https://app.netlify.com/drop
   - Drag and drop the `build` folder
   - Your site will be deployed instantly

## Important Files for Netlify

- `netlify.toml` - Netlify configuration file (already created)
- `public/_redirects` - Handles React Router routing (already created)
- `package.json` - Contains build scripts

## Custom Domain Setup

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

## Environment Variables (if needed)

If you need environment variables:
1. Go to Site settings → Environment variables
2. Add your variables
3. Redeploy the site

## Continuous Deployment

Netlify automatically deploys on every push to your main branch. You can:
- Set up branch deploys for previews
- Enable deploy previews for pull requests
- Configure build hooks for manual triggers

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version (Netlify uses Node 18 by default)

### Routing Issues
- The `_redirects` file handles all routes to `/index.html`
- If routes don't work, check that `_redirects` is in the `public` folder

### Image Loading Issues
- Ensure all images are in `public/images/` folder
- Use `/images/filename.jpg` in your code (already configured)

## Build Configuration

The project uses:
- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Node version:** 18 (default on Netlify)

## Production Checklist

- ✅ Build script configured in package.json
- ✅ netlify.toml created with proper redirects
- ✅ _redirects file in public folder for SPA routing
- ✅ All images in public/images folder
- ✅ React Router configured with BrowserRouter
- ✅ All dependencies listed in package.json

## Support

If you encounter issues:
1. Check Netlify build logs
2. Test build locally: `npm run build`
3. Verify all files are committed to Git
4. Check Netlify documentation: https://docs.netlify.com

