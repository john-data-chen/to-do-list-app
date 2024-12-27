# Todo List Application <br>

[![codecov](https://codecov.io/gh/john-data-chen/to-do-list-app/graph/badge.svg?token=2QA3D3NBHD)](https://codecov.io/gh/john-data-chen/to-do-list-app)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/293ce47e93cc4119ab97a0d79ee11c41)](https://app.codacy.com/gh/john-data-chen/to-do-list-app/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![CI workflow](https://github.com/john-data-chen/to-do-list-app/actions/workflows/ci.yml/badge.svg)

A production-ready Todo List application demonstrating modern frontend architecture and engineering best practices. Built with accessibility and internationalization as core features, perfect for enterprise deployment.

[Live Demo](https://john-data-chen.github.io/to-do-list-app/)

![Screenshots of drag and drip](/src/assets/drag%20demo.gif)

## 🌟 Key Features

- ⭐️ **Intuitive interaction**: drag & drop and animations
- ♿ **Accessibility**: Screen reader support and keyboard navigation
- 🌍 **Localization**: Full support for English and German
- 📱 **Responsive Design**: Consistent experience across devices

## Minor Features

- 🌓 Dark/Light Theme
- 💾 Persistent data via local storage

**Key Accomplishments**:

- **Test Coverage in Codecov**: 85%+
- **Code Quality in Codacy**: B
- **Optimized performance**: for both desktop and mobile devices.
- **CI/CD automation**: in GitHub actions.

## 🛠️ Technical Stack

[![React Dependencies](https://img.shields.io/librariesio/release/npm/react)](https://libraries.io/npm/react)

- **Requirements**: Node.JS v22.12.0
- **Frontend**: React 18.3.1, TypeScript 5.6.2, Redux Toolkit
- **Build & Quality**: Vite, Jest, Playwright, ESLint , Prettier, Husky
- **CI/CD**: GitHub Actions, Codecov, Codacy

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

## 🔜 Upcoming Improvements

Limited by the GitHub Page architecture, this project won't be updated anymore.
I will add functions into the another project **Next Board** such as

- [ ] Use Next.js to be a full stack project
- [ ] Use Shadcn UI to fitting WAI-ARIA and more browsers
- [ ] Login to manage users, projects and tasks in security
- [ ] Pomodoro

and more...

## 📖 Detailed Technical Documentation

### 🐛 Limitations

Minor Display Issue: Language menu behaves abnormally only in Chrome Developer Tools on desktop.

🖥️ Chrome Developer Tool of PC / Laptop <br>
![Screenshot of language menu on PC / laptop](/src/assets/language%20menu%20on%20PC.png)

📲 Language menu displays normal on Phone <br>
![Screenshot of language menu on Phones](/src/assets/language%20menu%20on%20phone.png)

### 📊 Testing Strategy

- Achieved 85%+ test coverage with unit, integration, and E2E tests.
- Cross-browser testing ensures functionality across desktop and mobile.

### 📱 Responsive Design

Optimized for multiple screen sizes:

- Mobile: 400px
- Tablet: 768px
- Desktop: 1200px
- Large Desktop: >1200px

### Project Structure

```
src/
├── __tests__/ # Test cases
├── assets/ # Static files such as images
├── component/ # Reusable React components
├── constants/ # Application-wide constants
├── hooks/ # Custom React hooks
├── i18n/ # Localization files for multi-language support
├── redux/ # State management logic using Redux Toolkit
├── theme/ # Light and dark theme configurations
└── type/ # TypeScript type definitions
```

### Performance Optimization

- Faster Testing: Playwright parallel execution enhances testing speed.
- Optimized Builds: add Gzip compression

### Deployment Strategy

- **Automated Deployment**: GitHub Actions triggers on PR to the main branch, ensuring smooth updates.
- **Manual Emergency Deployment**: Use `npm run deploy` for urgent fixes.
