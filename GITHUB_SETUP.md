# GitHub Repository Setup Guide

Your portfolio code is ready and has been committed to a local Git repository. Follow these steps to push it to GitHub.

## Method 1: Using GitHub Website (Recommended)

### Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name:** `modern-portfolio` (or any name you prefer)
   - **Description:** "Modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these in your terminal:

```bash
cd C:\Users\Vivek_Modi\modern-portfolio

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/modern-portfolio.git

# Rename the branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

**Example:**
If your GitHub username is `modiviveks`, the command would be:
```bash
git remote add origin https://github.com/modiviveks/modern-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Enter Your Credentials

When prompted:
- Enter your GitHub username
- For password, use a **Personal Access Token** (not your GitHub password)

#### How to Create a Personal Access Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Portfolio Upload")
4. Select scopes: Check **"repo"** (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing to GitHub

## Method 2: Using GitHub Desktop (Alternative)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Sign in to your GitHub account
3. Click **"Add"** → **"Add existing repository"**
4. Browse to `C:\Users\Vivek_Modi\modern-portfolio`
5. Click **"Publish repository"**
6. Choose repository name and visibility
7. Click **"Publish repository"**

## Method 3: Using SSH (Advanced)

If you have SSH keys set up:

```bash
cd C:\Users\Vivek_Modi\modern-portfolio
git remote add origin git@github.com:YOUR_USERNAME/modern-portfolio.git
git branch -M main
git push -u origin main
```

## Verify Your Repository

After pushing, visit:
```
https://github.com/YOUR_USERNAME/modern-portfolio
```

You should see all your portfolio files!

## Next Steps After Pushing to GitHub

### Deploy to Vercel (Free & Easy)

1. Go to [Vercel](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Import your `modern-portfolio` repository
5. Vercel will auto-detect Next.js settings
6. Click **"Deploy"**
7. Your portfolio will be live in minutes!

### Deploy to Netlify (Alternative)

1. Go to [Netlify](https://www.netlify.com)
2. Sign in with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your `modern-portfolio` repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click **"Deploy site"**

## Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/modern-portfolio.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error: Authentication failed
- Make sure you're using a Personal Access Token, not your password
- Check that your token has the correct permissions (repo scope)

## Repository Information

- **Local Path:** `C:\Users\Vivek_Modi\modern-portfolio`
- **Repository Name:** `modern-portfolio` (recommended)
- **Suggested GitHub URL:** `https://github.com/modiviveks/modern-portfolio`

## Quick Reference Commands

```bash
# Check current status
git status

# View commit history
git log --oneline

# Check remote URL
git remote -v

# Make changes and commit
git add .
git commit -m "Your commit message"
git push
```

---

**Need Help?**
- [GitHub Docs - Creating a Repository](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- [GitHub Docs - Pushing to Remote](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)
