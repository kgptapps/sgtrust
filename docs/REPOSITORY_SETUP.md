# Repository Setup Instructions
## Professor's Legacy Website - Deployment Configuration

### 📋 Repository Information
- **Repository**: `git@github.com:kgptapps/sgtrust.git`
- **Organization**: kgptapps
- **Repository Name**: sgtrust
- **Deployment URL**: `https://kgptapps.github.io/sgtrust/`

---

## 🚀 GitHub Pages Setup

### 1. Repository Configuration

#### 1.1 Access Repository Settings
1. Go to `https://github.com/kgptapps/sgtrust`
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** section in the left sidebar

#### 1.2 Configure GitHub Pages
1. **Source**: Select **"Deploy from a branch"**
2. **Branch**: Select **"gh-pages"** (will be created automatically by GitHub Actions)
3. **Folder**: Select **"/ (root)"**
4. **Custom Domain**: Leave empty (using default GitHub Pages domain)
5. Click **"Save"**

### 2. GitHub Actions Permissions

#### 2.1 Enable Actions
1. Go to **"Settings"** → **"Actions"** → **"General"**
2. Under **"Actions permissions"**, select **"Allow all actions and reusable workflows"**
3. Under **"Workflow permissions"**, select **"Read and write permissions"**
4. Check **"Allow GitHub Actions to create and approve pull requests"**
5. Click **"Save"**

#### 2.2 Pages Permissions
1. Go to **"Settings"** → **"Pages"**
2. Under **"Build and deployment"**, ensure **"GitHub Actions"** is selected as source
3. This allows the workflow to deploy to GitHub Pages

---

## 🔧 Local Development Setup

### 1. Clone Repository
```bash
# Clone the repository
git clone git@github.com:kgptapps/sgtrust.git
cd sgtrust

# Verify remote origin
git remote -v
# Should show:
# origin  git@github.com:kgptapps/sgtrust.git (fetch)
# origin  git@github.com:kgptapps/sgtrust.git (push)
```

### 2. Development Environment
```bash
# Navigate to docs folder (where React app will be)
cd docs

# Initialize React project (when ready)
npm create vite@latest . -- --template react-ts
npm install

# Install additional dependencies
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material @mui/lab
npm install react-router-dom
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend
npm install framer-motion react-intersection-observer react-image-gallery
npm install -D tailwindcss postcss autoprefixer
npm install -D @types/react @types/react-dom
npm install -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install -D prettier eslint-config-prettier eslint-plugin-prettier

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### 3. Configure Vite for GitHub Pages
Create `docs/vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/sgtrust/', // Repository name for GitHub Pages (kgptapps/sgtrust)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          i18n: ['react-i18next', 'i18next']
        }
      }
    }
  },
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173,
    open: true
  }
});
```

---

## 🔄 Deployment Workflow

### 1. Automatic Deployment
The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. **Triggers** on push to `main` branch with changes in `docs/` folder
2. **Builds** the React application using `npm run build`
3. **Adds** `.nojekyll` file for proper React deployment
4. **Deploys** to GitHub Pages on `gh-pages` branch
5. **Updates** live website at `https://kgptapps.github.io/sgtrust/`

### 2. Manual Deployment
If needed, you can manually trigger deployment:
1. Go to **"Actions"** tab in GitHub repository
2. Select **"Deploy Professor Website to GitHub Pages"** workflow
3. Click **"Run workflow"** → **"Run workflow"**

### 3. Deployment Status
Monitor deployment status:
- **Actions Tab**: View build and deployment logs
- **Pages Settings**: Check deployment status and URL
- **Build Logs**: Debug any deployment issues

---

## 🌐 URL Structure

### Production URLs
- **Main Website**: `https://kgptapps.github.io/sgtrust/`
- **About Page**: `https://kgptapps.github.io/sgtrust/about`
- **Students Directory**: `https://kgptapps.github.io/sgtrust/students`
- **Photo Gallery**: `https://kgptapps.github.io/sgtrust/gallery`
- **Individual Student**: `https://kgptapps.github.io/sgtrust/students/[student-slug]`

### Asset URLs (GitHub Raw)
- **Images**: `https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/media/images/`
- **Data Files**: `https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/data/`
- **Documents**: `https://raw.githubusercontent.com/kgptapps/sgtrust/main/docs/public/media/documents/`

### Language URLs
- **English**: `https://kgptapps.github.io/sgtrust/` (default)
- **Tamil**: `https://kgptapps.github.io/sgtrust/?lang=ta`

---

## 🔒 Security Configuration

### 1. Repository Security
- **Branch Protection**: Enable branch protection for `main` branch
- **Required Reviews**: Require pull request reviews before merging
- **Status Checks**: Require status checks to pass before merging
- **Signed Commits**: Require signed commits for security

### 2. Secrets Management
No secrets required for this static site deployment, but if needed:
1. Go to **"Settings"** → **"Secrets and variables"** → **"Actions"**
2. Add repository secrets as needed
3. Reference in GitHub Actions workflow with `${{ secrets.SECRET_NAME }}`

---

## 📊 Monitoring & Analytics

### 1. GitHub Pages Analytics
- **Built-in Analytics**: Basic traffic statistics in repository insights
- **Custom Analytics**: Can add Google Analytics 4 (privacy-compliant)

### 2. Performance Monitoring
- **GitHub Actions**: Build time and deployment status
- **Lighthouse CI**: Automated performance testing (can be added)
- **Core Web Vitals**: Monitor loading performance

---

## 🛠️ Troubleshooting

### Common Issues

#### **Deployment Fails**
1. Check GitHub Actions logs in **"Actions"** tab
2. Verify `package.json` and dependencies are correct
3. Ensure build command succeeds locally: `npm run build`
4. Check for TypeScript or linting errors

#### **Website Not Loading**
1. Verify GitHub Pages is enabled in repository settings
2. Check that `gh-pages` branch exists and has content
3. Ensure `.nojekyll` file is present in deployed files
4. Wait 5-10 minutes for GitHub Pages to update

#### **Assets Not Loading**
1. Verify base URL in `vite.config.ts` is `/sgtrust/`
2. Check that asset paths start with `/sgtrust/`
3. Ensure GitHub raw URLs are correct for external assets

#### **Build Errors**
1. Run `npm run type-check` to check TypeScript errors
2. Run `npm run lint` to check code quality issues
3. Verify all dependencies are installed: `npm ci`
4. Check Node.js version compatibility (use Node 18+)

---

## 📞 Support Contacts

### Repository Access
- **Organization**: kgptapps
- **Repository**: sgtrust
- **Admin Contact**: [Repository admin contact]

### Technical Support
- **GitHub Issues**: Create issues in the repository for bugs
- **Documentation**: Refer to project documentation in `docs/` folder
- **Deployment Issues**: Check GitHub Actions logs first

---

## 🔄 Next Steps

### After Repository Setup
1. **Verify Access**: Ensure you have push access to `kgptapps/sgtrust`
2. **Test Deployment**: Make a small change and verify auto-deployment works
3. **Begin Development**: Start with Task 1 from PROJECT_TRACKING.md
4. **Monitor Performance**: Set up monitoring and analytics

### Development Workflow
1. **Create Feature Branch**: `git checkout -b feature/task-name`
2. **Develop and Test**: Follow DEVELOPMENT_WORKFLOW.md
3. **Create Pull Request**: For code review and testing
4. **Merge to Main**: Triggers automatic deployment

---

**Repository**: git@github.com:kgptapps/sgtrust.git  
**Live URL**: https://kgptapps.github.io/sgtrust/  
**Last Updated**: August 2, 2025  
**Setup Status**: Ready for development
