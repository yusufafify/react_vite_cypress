# React Vite Application with Cypress Testing

## Project Overview

This project is a simple React application built using Vite and TypeScript, styled with Tailwind CSS, and tested using Cypress. The purpose of the project is to demonstrate end-to-end testing with real-world scenarios, ensuring the application is robust and ready for production.

## Features

- **React Vite**: A fast development environment for building React applications.
- **TypeScript**: Type-safe code with better maintainability.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Cypress**: End-to-end testing framework to ensure application stability and reliability.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yusufafify/react_vite_cypress.git
    cd react_vite_cypress
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open the application in your browser at `http://localhost:5742`.

## Running Tests

### Running Cypress Tests Locally

To run the Cypress tests locally:

1. Open the Cypress test runner:
    ```bash
    npx cypress open
    ```

2. Click on the desired test spec to run the test cases in the Cypress Test Runner.

### Running Tests in Headless Mode

To run the tests in headless mode and generate coverage reports:

```bash
npm run test:headless
