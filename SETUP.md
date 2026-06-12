# Setup Instructions for Modern Portfolio

## Step 1: Install Node.js

If Node.js is not already installed, please install it:

1. The Node.js installer is already in your Downloads folder: `node-v24.16.0-x64 (1).msi`
2. Double-click the installer and follow the installation wizard
3. **Important:** Make sure to check the box that says "Automatically install the necessary tools"
4. After installation, **restart your terminal/PowerShell**

To verify Node.js is installed, open a new terminal and run:
```bash
node --version
npm --version
```

You should see version numbers (e.g., v24.16.0 and 10.x.x).

## Step 2: Install Project Dependencies

Once Node.js is installed, navigate to the project directory and install dependencies:

```bash
cd C:\Users\Vivek_Modi\modern-portfolio
npm install
```

This will install all required packages including:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript
- And all other dependencies

## Step 3: Run the Development Server

After dependencies are installed, start the development server:

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

## Step 4: Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Troubleshooting

### Issue: "node is not recognized"
**Solution:** 
- Restart your terminal/PowerShell after installing Node.js
- Make sure Node.js installation completed successfully
- Check if Node.js is in your PATH environment variable

### Issue: npm install fails
**Solution:**
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Try using `npm install --legacy-peer-deps` if there are dependency conflicts

### Issue: Port 3000 is already in use
**Solution:**
- Kill the process using port 3000
- Or run on a different port: `npm run dev -- -p 3001`

## Next Steps

1. ✅ Install Node.js
2. ✅ Install dependencies (`npm install`)
3. ✅ Run development server (`npm run dev`)
4. ✅ Customize the portfolio with your information
5. ✅ Test on different devices
6. ✅ Deploy to Vercel or Netlify

## Quick Start (After Node.js Installation)

```bash
# Navigate to project
cd C:\Users\Vivek_Modi\modern-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

Enjoy your new modern portfolio! 🚀
