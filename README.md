[![CI Pipeline](https://github.com/alanb141/wedding-site/actions/workflows/ci.yml/badge.svg)](https://github.com/alanb141/wedding-site/actions/workflows/ci.yml)

# React Performance & State Demo (PokéAPI)

A highly optimized React application designed to handle large datasets (1000+ items) with a focus on network efficiency and rendering performance.

## Technical Strategy
This project goes beyond simple data fetching by implementing enterprise-grade patterns for caching and performance optimization.

* **Redux Toolkit (RTK) Caching:** Implemented a custom caching layer to prevent redundant API calls. The app checks the store state before requesting data, significantly reducing network overhead during navigation.
* **Virtualization & Lazy Loading:** Utilized `React.lazy` and optimized image loading to ensure "Core Web Vitals" (LCP) remain green, preventing the main thread from blocking while rendering the 1000+ item grid.
* **Modern Routing:** Built on **React Router v7** to manage dynamic route matching for detailed Pokémon views.
* **Data Visualization:** Integrated **Chart.js** to normalize API data into interactive stat radar charts.

## Tech Stack
* **Core:** React 18, TypeScript (via JSDoc/Prop-Types), JavaScript (ES6+)
* **State Management:** Redux Toolkit (RTK), Redux Thunk
* **Routing:** React Router DOM (v7)
* **Styling:** SCSS (Sass), Responsive Grid Layouts
* **Testing:** Vitest, React Testing Library (RTL), JSDOM

## Testing Strategy
The project utilizes **Vitest** as a modern replacement for Jest to ensure faster test execution.

* **Component Isolation:** `react-router-dom` is mocked to test navigation components (like `<Tile />`) in isolation without requiring a full router context.
* **Accessibility First:** Tests utilize `screen.getByRole` selectors to ensure the UI remains accessible to screen readers and semantic HTML is maintained.
* **Deterministic Mocking:** `fetch` and API responses are mocked to ensure reliable test runs without external network dependencies.

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm start

# 3. Run the test suite (Vitest)
npm test
