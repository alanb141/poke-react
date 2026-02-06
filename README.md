# React Performance & State Demo (PokéAPI)

A highly optimized React application designed to handle large datasets (1000+ items) with a focus on network efficiency and rendering performance.

## Key Architectural Features:

- **Redux Caching Strategy:** Implemented a custom caching layer in Redux. Before fetching data, the app checks the store to prevent redundant API calls, significantly reducing network overhead during navigation.

- **Virtualization & Lazy Loading:** Utilized Lazy Loading for the 1000+ image assets to ensure the *Core Web Vitals* (LCP) remain green and the main thread isn't blocked on initial load.

- **Data Visualization:** Integrated Chart.js to render stats dynamically, handling data normalization from the API response to the chart configuration.

- **Testing:** Unit testing implemented via Jest.

Tech Stack: React, Redux, JavaScript (ES6), Chart.js, Jest.

## Future Roadmap Possibilities:

- Migration to TypeScript to enforce stricter type safety on API responses.

- Migration from Redux to Redux Toolkit (RTK) or React Query.
