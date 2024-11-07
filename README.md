# E-Commerce Platform

This is a modern, feature-rich e-commerce platform built using React, Vite, Node.js, and TypeScript. The project offers a dynamic shopping experience with themes, a shopping cart, and an integration with the FakeStore API to display a wide variety of products.

## Tech Stack

- **Frontend**: 
  - **React**: A popular JavaScript library for building user interfaces.
  - **Vite**: A fast build tool that serves as an alternative to create-react-app, with a focus on performance.
  - **TypeScript**: A typed superset of JavaScript, enabling better maintainability and catching errors early in the development process.

- **Backend**:
  - **Node.js**: A runtime environment that enables the use of JavaScript on the server side, allowing for efficient and scalable applications.

- **API**:
  - **FakeStore API**: Provides sample product data to simulate a real e-commerce experience.

## Features

### 1. Product Listing
   - Fetches product information dynamically from the FakeStore API.
   - Displays product details including images, descriptions, prices, and categories.

### 2. Product Detail Page
   - Users can view detailed information about each product.
   - Allows users to add items to the shopping cart from the detail page.

### 3. Shopping Cart
   - Add, remove, or update product quantities in the shopping cart.
   - Real-time calculation of the total price based on items and quantities in the cart.

### 4. Theme Support
   - Allows users to switch between multiple themes, e.g., light and dark modes, for a personalized experience.

### 5. Responsive Design
   - Ensures a seamless experience on all devices, including desktop, tablet, and mobile.

### 6. TypeScript Integration
   - Adds strong typing throughout the project, reducing potential errors and improving code readability.

### 7. Vite for Optimized Performance
   - Utilizes Vite for faster builds and hot reloading, leading to a more efficient development experience.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/e-commerce-platform.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd e-commerce-platform
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

4. **Run the project**:
   ```bash
   npm run dev
   # or if using yarn
   yarn dev
   ```

5. **Open the application**:
   - The application will be running at `http://localhost:3000`.

## Project Structure

- **src**: Contains all source code for the frontend application.
  - **components**: Reusable React components.
  - **context**: Context providers for theme and shopping cart state management.
  - **types**: Utility functions for interacting with the FakeStore API.

## API Integration

This application uses the **FakeStore API** to fetch sample product data. Visit [FakeStore API](https://fakestoreapi.com/) for more details and documentation.

## Available Scripts

- **`npm run dev`**: Runs the app in development mode with hot reloading.
- **`npm run build`**: Builds the app for production, outputting to the `dist` folder.
- **`npm run preview`**: Serves the production build, allowing for a final preview before deployment.

## Contributing

Contributions are welcome! Please submit a pull request with any bug fixes, features, or improvements.

---

With this setup, you’re all set to explore and expand the project further. Enjoy coding and happy shopping! 🛒