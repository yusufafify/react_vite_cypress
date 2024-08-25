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

4. Open the application in your browser at `http://localhost:5173`.

## Running Tests

### Running Cypress Tests Locally

To run the Cypress tests locally:

1. Open the Cypress test runner:
    ```bash
    npx cypress open
    ```

2. Click on the desired test spec to run the test cases in the Cypress Test Runner.
![Screenshot 2024-08-25 222208](https://github.com/user-attachments/assets/1eae4483-4a86-43a5-8f92-f468feaf181b)
- click on the e2e tab
![Screenshot 2024-08-25 222319](https://github.com/user-attachments/assets/f794e3cb-be2f-44bc-a22e-ab516440a68d)
- choose the browser you want to test on
![Screenshot 2024-08-25 222540](https://github.com/user-attachments/assets/1c9a4ad7-418a-476d-bd65-9919ac5f668e)
- Click on form.cy.js to start testing the form component
![Screenshot 2024-08-25 222704](https://github.com/user-attachments/assets/657cf9a1-46d0-456b-9662-b5e53c74a262)
### Now the testing will happen infront of your eyes visually and in real time and showing you every possible action and what will happen after it 
![Screenshot 2024-08-25 222845](https://github.com/user-attachments/assets/7b152008-ec65-4e2a-87b0-809d7ad4ca4f)
### Showing in details the logs of how the testing occured and if any error it will highlight the error part


## Test Cases and Reports
### Test Cases
The test cases are structured and documented within the Cypress test files located in the `cypress/e2e/` directory. Each test case includes clear descriptions of the functionality being tested, with step-by-step assertions to validate the expected outcomes.

## Coverage Reports
Coverage reports are generated automatically when running tests in headless mode. The reports are available in the coverage directory and provide detailed insights into the test `coverage` of the application.

