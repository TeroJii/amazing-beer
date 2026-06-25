# Copilot Instructions for JavaScript Website Development

## Project Overview
This repository is a JavaScript-based website. Follow these guidelines when generating or reviewing code.

## Language & Runtime
- Use **modern JavaScript (ES2020+)** with ES modules (`import`/`export`).
- Prefer **TypeScript** for new files when the project supports it, to benefit from static typing.
- Target evergreen browsers; use a bundler (e.g., Vite or webpack) with Babel/SWC for transpilation when legacy support is needed.

## Project Structure
```
project-root/
├── src/
│   ├── assets/        # Images, fonts, icons
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components or routes
│   ├── styles/        # Global CSS / SCSS files
│   └── utils/         # Shared helper functions
├── public/            # Static files served as-is
├── tests/             # Unit and integration tests
├── index.html         # Entry HTML file
└── package.json
```

## Code Style
- Follow the **Airbnb JavaScript Style Guide** unless the project has its own ESLint config.
- Use **Prettier** for formatting; do not override its output manually.
- Prefer `const` over `let`; never use `var`.
- Use **arrow functions** for callbacks and short expressions.
- Use **template literals** instead of string concatenation.
- Destructure objects and arrays where it improves readability.
- Keep functions small and focused on a single responsibility.

## HTML & Accessibility
- Write semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`).
- Every `<img>` must have a meaningful `alt` attribute (empty string `alt=""` for decorative images).
- Ensure interactive elements are keyboard-accessible and have visible focus styles.
- Use ARIA attributes only when native HTML semantics are insufficient.
- Maintain a minimum colour-contrast ratio of **4.5:1** for normal text (WCAG 2.1 AA).

## CSS & Styling
- Use **CSS custom properties** (variables) for colours, spacing, and typography tokens.
- Prefer **CSS Modules** or **scoped styles** to avoid global name collisions.
- Follow a mobile-first approach; use `min-width` media queries.
- Avoid inline styles; keep styles in dedicated CSS/SCSS files or component style blocks.

## JavaScript Best Practices
- Handle all asynchronous operations with `async`/`await`; avoid raw `.then()` chains.
- Always handle errors with `try/catch` around `await` calls or add a `.catch()` on unhandled promise chains.
- Never expose secrets, API keys, or credentials in client-side code; use environment variables and a backend proxy for sensitive operations.
- Validate and sanitize all user input on both the client and server.
- Avoid `eval()`, `innerHTML` with unsanitized data, and other sources of XSS vulnerabilities; prefer `textContent` and `createElement`.

## Performance
- Lazy-load images using the `loading="lazy"` attribute.
- Code-split large bundles by route or feature.
- Prefer native browser APIs over heavy third-party libraries for simple tasks.
- Minimize DOM manipulations; batch updates where possible.

## Testing
- Write **unit tests** for all utility functions and business logic (Jest or Vitest).
- Write **component/integration tests** for UI components (Testing Library).
- Aim for meaningful coverage of critical paths; avoid testing implementation details.
- Test file names should mirror the source file: `utils/formatDate.js` → `tests/utils/formatDate.test.js`.

## Dependency Management
- Use **npm** (or the package manager already configured in the project) for installing dependencies.
- Pin major versions in `package.json`; use `package-lock.json` for reproducible installs.
- Regularly audit dependencies with `npm audit` and keep them up to date.
- Prefer well-maintained, widely-used packages; avoid packages with no recent activity.

## Git & Commits
- Write clear, imperative commit messages: `Add hero section animation`, not `added stuff`.
- Keep commits small and focused on a single change.
- Do not commit generated files, `node_modules/`, or build artifacts; ensure they are listed in `.gitignore`.
