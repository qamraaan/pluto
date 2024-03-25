### This project is a React application built with:

    Vite: High-performance development server for modern web applications.
    TypeScript: Enhances code maintainability and developer experience with static typing.
    Chakra UI: Accessible and responsive component library for building beautiful UIs.
    RTK Query: Simplifies making API requests and managing data fetching in React applications.
    Yarn: Fast, reliable, and secure package manager.

### Features

    Fast development: Enjoy lightning-fast hot module replacement with Vite.
    Type safety: Improve code quality and reduce errors with TypeScript.
    Accessible UI: Build user interfaces that are inclusive and meet accessibility standards with Chakra UI.
    Easy API integration: Make efficient API calls and manage data with RTK Query.

### Prerequisites
    Node > 18.16
    Node.js and npm (or Yarn) installed on your machine (https://nodejs.org/en/download)

### Getting Started
  Clone the repository:

    git clone https://github.com/qamraaan/pluto.git

  Install dependencies:

    yarn

  Start the development server:

    yarn dev

This will start the development server at http://localhost:5173 by default.

    Open your browser and navigate to http://localhost:5173 to see the application running.

Project Structure

src/
  - components/         Reusable UI components
  - domains/            Application modules
  - layout/             Application layout
  - routes/             Application routes
  - store/              Application global store.
  - theme/              Application theme.
  - types/              Application types
  - App.tsx             Entry point for the application
  - ...                 Other files
  - tsconfig.json    # TypeScript configuration
  - vite.config.ts   # Vite configuration
  - package.json    # Project dependencies
  - yarn.lock        # Dependency lock file (if using Yarn)

Note: This is a general structure, and specific files and folders might vary depending on your project's needs.