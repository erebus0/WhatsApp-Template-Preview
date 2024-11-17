# WhatsApp Template Preview UI

React-based frontend for previewing WhatsApp message templates. Part of Business Hero assignment - my first time working with template parsing UI!

> Note: This is a work in progress. Some features might break unexpectedly. Please create an issue if you find any bugs!

## Quick Start 🚀

# Install stuff
npm install

# Start dev server (runs on port 5000 to avoid conflict with backend)
npm start

# Build for production
npm run build

## Features ✨
- Live template preview
- Dynamic variable input fields
- Basic error handling
- Responsive design (mostly 😅)
- Local storage for unsaved work

## Screenshots
[Will add these soon - UI still needs some polish!]

## Tech Stack
- React (Create React App)
- Axios for API calls
- Local Storage for persistence
- Some basic CSS (need to clean this up)

## Known Issues 🐛
- [ ] Preview sometimes lags with rapid typing (need to fix debouncing)
- [ ] Mobile layout breaks with too many variables
- [ ] Chrome autofill messes up some input fields
- [ ] Need better error messages
- [ ] Some CSS is a bit hacky (especially the preview box)

## Development Setup

1. Clone the repo
2. Run npm install
3. Copy .env.example to .env
4. Update REACT_APP_API_URL if your backend runs on different port
5. npm start and pray 🤞

> Make sure backend server is running before starting frontend!

## Project Structure
src/
  ├── components/   # React components
  ├── hooks/       # Custom hooks (WIP)
  ├── utils/       # Helper functions
  ├── styles/      # CSS files (needs cleanup!)
  └── tests/       # Tests (TODO: add more)

## Local Development Tips 💡
- Use React Dev Tools to debug state issues
- Check console for API errors (lots of helpful messages!)
- Hot reload sometimes breaks with template changes
- Local storage can get messy - clear it if things break

## Things I Learned 📚
- Should have used TypeScript from the start
- Need better state management for complex templates
- CSS Grid is awesome for responsive forms
- React's useCallback is tricky with debouncing
- Always backup before major refactors 😅

## TODO List 📝
- [ ] Add template history
- [ ] Better mobile support
- [ ] Add loading states
- [ ] Proper error boundaries
- [ ] Clean up CSS (it's a mess right now)
- [ ] Add proper testing
- [ ] Maybe add dark mode?
- [ ] Fix that weird bug with emoji inputs

## Contributing
PRs welcome! Could really use help with:
- UI/UX improvements
- Mobile responsiveness
- Performance optimization
- Testing (I'm bad at this 😬)

## Available Scripts
- npm start - Runs dev server
- npm test - Runs tests (not many yet)
- npm run build - Builds for production
- npm run eject - No going back! (haven't needed this yet)

## Deployment
Currently deploying to Vercel (super easy setup!). Might switch to Netlify later.

Build command: npm run build
Output directory: build

## Environment Variables
REACT_APP_API_URL=http://localhost:5000
REACT_APP_VERSION=$npm_package_version

## Credits
- Create React App team
- Stack Overflow (my true mentor)
- Coffee ☕

## License

