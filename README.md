# Todo List Application <br>

[![codecov](https://codecov.io/gh/john-data-chen/to-do-list-app/graph/badge.svg?token=2QA3D3NBHD)](https://codecov.io/gh/john-data-chen/to-do-list-app)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/293ce47e93cc4119ab97a0d79ee11c41)](https://app.codacy.com/gh/john-data-chen/to-do-list-app/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![CI workflow](https://github.com/john-data-chen/to-do-list-app/actions/workflows/ci.yml/badge.svg)

A modern Todo List project built with React, TypeScript, and Vite, featuring comprehensive testing and accessibility support.

[Demo](https://john-data-chen.github.io/to-do-list-app/)

![Screenshots of drag and drip](/src/assets/drag%20demo.gif)

## 🔄 Changelog

### Version 1.0.0

- ✨ Drag & Drop functionality
- ⭐️ Animations of interaction
- 🌍 Multi-language support (English/German)
- 🌓 Dark/Light Theme
- 📱 Responsive Design (400px, 768px, 1200px+)
- 💾 Local Storage persistence
- ⌨️ Keyboard and Screen Reader support
- ✏️ Task Editing Capabilities

## 🛠️ Technical Stack

[![React Dependencies](https://img.shields.io/librariesio/release/npm/react)](https://libraries.io/npm/react)

- Node.js: v22.12.0
- React: v18.3.1
- Vite: v6.0.3
- TypeScript: v5.6.2
- Jest (Unit Testing)
- GitHub Actions (CI/CD)
- ESLint (Code Quality)
- Prettier (Code Style)
- Husky (Automated code verification)

### Technical Decisions

#### Build Tool: Vite

- Faster development server startup through native ES modules
- Efficient Hot Module Replacement (HMR)
- Optimized production builds with built-in Rollup configuration
- Better TypeScript integration compared to Create React App

#### TypeScript

- Enhanced code maintainability and readability
- Early error detection during development
- Better VS Code support and autocompletion
- Improved team collaboration through type definitions

#### Redux Toolkit

- Simplified state management with less boilerplate
- Built-in immutability support
- Integrated TypeScript support
- Efficient dev tools for debugging

#### Jest for Testing

- Comprehensive testing framework with good TypeScript support
- Integration with GitHub Actions CI/CD and Codecov coverage reports

## 🔜 Upcoming Improvements

- [x] Code Quality: Automated lint and style checks
- [x] Test: Integration tests for Redux
- [ ] Accessibility: Add more ARIA labels and Adjust color contrasts
- [ ] Animations: Add more animations of interactions for touch screens
- [ ] Test: E2E tests for critical user flows
- [ ] Security: add validations in Security Strategy

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# ESLint check
npm run lint

# Prettier check
npx prettier . --check

# Deploy to GitHub Pages
npm run deploy
```

## 🐛 Known Issues or Limitations

### Touch Screen Hover Limitation

- Hover animations are not supported on touch screens, as these devices do not provide hover states like mouse or touchpad pointers.
- To ensure consistent UX across devices, alternative animations or interactions will be implemented specifically for touch screens.

### Language Menu Positioning Issue

- The language menu is displayed incorrectly in Chrome Developer Tools on desktop (PC/Laptop) but renders correctly on mobile devices.
- As this issue is isolated to developer tools and does not affect real-world user experience, it will not be prioritized for a fix.

🖥️ Chrome Developer Tool of PC / Laptop <br>
![Screenshot of language menu on PC / laptop](/src/assets/language%20menu%20on%20PC.png)

📲 Language menu displays on Phone <br>
![Screenshot of language menu on Phones](/src/assets/language%20menu%20on%20phone.png)

## 📋 Technical Documentation

### ✅ Code Quality and Style Auto Check

- Automated code quality checks using ESLint with Codacy integration: [![Codacy Badge](https://app.codacy.com/project/badge/Grade/293ce47e93cc4119ab97a0d79ee11c41)](https://app.codacy.com/gh/john-data-chen/to-do-list-app/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
- Standardized code formatting by Prettier: [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
- Pre-commit hooks with Husky for automated code verification
- VS Code integration for real-time code quality feedback

### 📊 Testing

- Codecov integration for coverage reports: [![codecov](https://codecov.io/gh/john-data-chen/to-do-list-app/graph/badge.svg?token=2QA3D3NBHD)](https://codecov.io/gh/john-data-chen/to-do-list-app)
- Continuous Integration via GitHub Actions: ![CI workflow](https://github.com/john-data-chen/to-do-list-app/actions/workflows/ci.yml/badge.svg)

### 📱 Responsive Design

Optimized for multiple screen sizes:

- Mobile: 400px
- Tablet: 768px
- Desktop: 1200px
- Large Desktop: >1200px

### Project Structure

```
src/
├── __tests__/
├── assets/
├── component/
├── constants/
├── hooks/
├── i18n/
├── redux/
├── theme/
└── types/
```

### State Management

- Redux Toolkit for global state management
- Custom middleware for LocalStorage integration
- Typed action creators for task management

### Performance Optimizations

- Gzip compression
- Refactor and Code splitting
- Memoization for complex calculations

### Accessibility Features

- ARIA labels for Screen reader support
- Keyboard navigation
- Sufficient color contrasts

### Testing Strategy

- Unit tests for components, coverage is over 80%, target is 100%.
- Add Integration test of Redux state management

### CI Strategy in Github Action

it is triggered when

- push to dev and main branches
- PR to main branch

### Deployment Strategy

- CD in Github Action is triggered when PR to main branch
- NPM deploy command to deploy manually in the emergency

### Security Strategy

- CSRF protection
- XSS prevention
- Input data validation
