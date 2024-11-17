# WhatsApp Template Message Preview API

A Node.js/Express backend for parsing and previewing WhatsApp message templates. Built this as part of assignment for Business Hero - turned out to be trickier than I expected but learned a lot about regex and template parsing! 😅

## Quick Start 🚀

# Install dependencies (using node v16+)
npm install

# Run in development
npm run dev

# Run tests
npm test

# Start production server
npm start

## What's Working 🎉
- Basic template parsing (regex-based for now)
- Variable replacement
- Preview generation
- Error handling for common cases
- Some basic tests

## Known Issues 🐛
- [ ] Regex sometimes struggles with nested variables ({{var1{{var2}}}})`
- [ ] Need better error messages for malformed templates
- [ ] Tests are pretty basic right now
- [ ] No input sanitization yet (TODO: add this before going to prod!)

## API Endpoints

### POST /api/templates/preview
Generates a preview of the WhatsApp template with provided data.

// Request body example
{
  "template": "Hello {{name}}, your order #{{orderNumber}} is confirmed",
  "data": {
    "name": "John",
    "orderNumber": "12345"
  }
}

// Response
{
  "message": "Hello John, your order #12345 is confirmed"
}

Note: Currently limited to 10 variables per template (might need to adjust this based on actual requirements)

## Project Structure
src/
  ├── controllers/    # Request handlers
  ├── services/      # Business logic
  ├── utils/         # Helper functions
  ├── routes/        # API routes
  └── tests/         # Test files (need more coverage!)

## Local Development
1. Clone the repo
2. Copy .env.example to .env
3. Update environment variables if needed
4. Run npm install
5. Start server with npm run dev

Server runs on http://localhost:3000 by default.

## Testing
Running into some issues with Jest mock timing - if tests fail, try increasing timeout in jest.config.js. Working on a fix! 🔧

# Run all tests
npm test

# Run specific test file
npm test template.test.js

# Watch mode (super helpful during development!)
npm run test:watch

## Future Improvements 🚀
- [ ] Add support for template categories
- [ ] Implement caching (getting some performance issues with large templates)
- [ ] Better validation for WhatsApp specific rules
- [ ] Maybe switch to a proper parser instead of regex (any suggestions welcome!)
- [ ] Add rate limiting before going to prod
- [ ] Set up proper logging system (console.log everywhere right now 😬)

## Lessons Learned 📚
- Regex is powerful but gets messy quickly with complex templates
- Should have started with proper error handling from the beginning
- Need to add input validation earlier in development next time
- Jest mocking is trickier than expected

## Contributing
Feel free to raise issues or submit PRs. Could really use help with:
- Better error handling
- Test coverage
- Performance optimization
- Documentation improvements

## License
IDK will ask my soul