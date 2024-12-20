# Todo List Application <br>

[![codecov](https://codecov.io/gh/john-data-chen/to-do-list-app/graph/badge.svg?token=2QA3D3NBHD)](https://codecov.io/gh/john-data-chen/to-do-list-app)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/293ce47e93cc4119ab97a0d79ee11c41)](https://app.codacy.com/gh/john-data-chen/to-do-list-app/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![CI workflow](https://github.com/john-data-chen/to-do-list-app/actions/workflows/ci.yml/badge.svg)

A modern Todo List project built with React, TypeScript, and Vite.

[Demo](https://john-data-chen.github.io/to-do-list-app/)

![Screenshots of drag and drip](/src/assets/drag%20demo.gif)

## 🌟 Key Features

- ⭐️ Intuitive drag & drop and interaction animations
- 🌍 Fully localized for English and German markets
- ✅ Reliable, production-ready with 85%+ test coverage with comprehensive testing and monitoring

## Minor Features

- 🌓 Dark/Light Theme
- 📱 Responsive Design (Mobile, Tablet, Desktop)
- 💾 Local Storage persistence
- ⌨️ Accessibility: Keyboard and screen reader support

## 🛠️ Technical Stack

### Requirements

[![React Dependencies](https://img.shields.io/librariesio/release/npm/react)](https://libraries.io/npm/react)

- Node.js: v22.12.0
- React: v18.3.1
- Vite: v6.0.3
- TypeScript: v5.6.2

### Testing

- Jest
- Playwright

### CI/CD

- GitHub Actions
- Codecov
- Codacy

### Automated code quality and style verification

- ESLint
- Prettier
- Husky

### Technical Decisions

- Vite: Faster builds, efficient HMR, and TypeScript-friendly.
- Playwright: High-performance E2E testing with better support of multi browsers and parallel execution.
- Redux Toolkit: Simplified state management and immutability support.

## 🔜 Upcoming Improvements

- [x] Code Quality: Automated lint and style checks
- [x] Test: Integration test of Redux state management
- [x] Test: E2E tests for more user cases
- [ ] Accessibility: Add more ARIA labels and Adjust color contrasts
- [ ] Animations: Add more animations of interactions for touch screens

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run unit and integration tests by Jest
npm run test

# Run E2E tests by Playwright
npx playwright test

# Deploy to GitHub Pages
npm run deploy
```

## 📋 Technical Documentation

### 🐛 Known Issues or Limitations

- **Hover Animations on Touch Screens**: Hover effects are unavailable on devices without pointer support. Future enhancements will introduce touch-screen-specific interaction animations.
- **Language Menu Alignment**: Slight misalignment in Chrome DevTools for desktops. No impact on end-user experience.

🖥️ Chrome Developer Tool of PC / Laptop <br>
![Screenshot of language menu on PC / laptop](/src/assets/language%20menu%20on%20PC.png)

📲 Language menu displays on Phone <br>
![Screenshot of language menu on Phones](/src/assets/language%20menu%20on%20phone.png)

### 📊 Testing Strategy

- Test Coverage is over 85%, target is 100%
- Unit tests of components
- Integration test of Redux state management
- E2E test of more user cases, covering all major browsers including desktop and mobile.

### 📱 Responsive Design

Optimized for multiple screen sizes:

- Mobile: 400px
- Tablet: 768px
- Desktop: 1200px
- Large Desktop: >1200px

### Project Structure

```
src/
├── __tests__/ # test cases
├── assets/ # Static files such as images
├── component/ # Reusable React components
├── constants/ # Application-wide constants
├── hooks/ # Custom React hooks
├── i18n/ # Localization files for multi-language support
├── redux/ # State management logic using Redux Toolkit
├── theme/ # Light and dark theme configurations
└── type/ # TypeScript type definitions
```

### Performance Optimizations

- **Build Speed**: Choose Vite for 50% faster builds compared to Webpack. Playwright runs testing in parallel execution.
- **Optimized Deployment**: Gzip compression reduces bundle size.
- **Efficient Runtime**: Code splitting minimizes initial load time for faster user interactions.

### CI Strategy in GitHub Action

it is triggered when

- push to dev and main branches
- PR to main branch

### Deployment Strategy

- **Automated Deployment**: GitHub Actions triggers CD on PR to the main branch, ensuring smooth updates.
- **Manual Emergency Deployment**: Use `npm run deploy` for urgent fixes with detailed roll-back steps documented.
