BetterWay – Mini E-Commerce Product & Cart UI

BetterWay is a small e-commerce frontend built using React (with Vite) and Tailwind CSS.
The project focuses on component design, state management, and clean React practices rather than extra features.

This application was developed as part of a frontend assignment.

Features->
  Product listing displayed in a responsive grid
  Search products by name (debounced)
  Filter products by category
  Sort products by price (Low → High, High → Low)
  Add / remove items from cart
  Update item quantity (stock-aware)
  Disabled actions for out-of-stock products
  Cart summary showing total items and total price
  Persistent cart using localStorage
  Proper empty states (no products, empty cart)

Design & Analysis->
  Before implementation, rough sketches were created to plan:
  Page layout
  Component breakdown
  Data flow between product list, filters, and cart

Tech Stack->
  React (Functional Components only)
  Vite for project setup
  Tailwind CSS for styling
  JavaScript (ES6+)
  No UI libraries were used, as per requirements.

Project Structure
src/
  components/
       ProductCard.jsx
       ProductGrid.jsx
       Filters.jsx
       Cart.jsx
  hooks/
       useProducts.js
       useDebounce.js
  App.jsx
  main.jsx

Key Implementation Details->
  Component isolation: Each UI section has a clear responsibility
  Optimized rendering: React.memo used for product cards
  Debounced search: Prevents unnecessary re-renders
  Derived state: Filters and sorting are applied together
  LocalStorage sync: Cart state persists across refreshes

Setup Instructions->
  Clone the repository -> git clone https://github.com/<your-username>/betterway-ui.git
  Install dependencies -> npm install
  Start the development server -> npm run dev
  The app will run at: http://localhost:5173

Notes

Backend is mocked as required
Focus was kept on clarity, correctness, and maintainability
Bonus features were implemented without affecting core functionality

Author
Akshita Aggarwal
Frontend / MERN Developer
