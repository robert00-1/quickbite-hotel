# QuickBite Hotel

QuickBite Hotel is a modern React-based restaurant ordering application that allows customers to browse meals, search for food, view meal details, add meals to a cart, and place dine-in orders.

The application also includes separate dashboards for **waiters** and **managers**. Waiters can view incoming customer orders and update their status, while managers can view completed orders and their payment information.

## Features

### Customer Features

* Browse available meals
* Search for meals
* Filter meals by category
* View meal details
* View meal images and ingredients
* Select meal quantities
* Add meals to cart
* Increase or decrease quantities in the cart
* Remove items from the cart
* Enter customer information
* Select a table number
* Select payment method
* Submit an order
* View order submission confirmation

### Waiter Features

* View customer orders
* View customer name and phone number
* View table number
* View ordered food and quantities
* Track order status
* Change order status:

  * Pending
  * Preparing
  * Ready
  * Served
* Remove served orders from the active order list

### Manager Features

* View completed/served orders
* View customer information
* View table numbers
* View food ordered
* View payment method
* View payment amounts
* View total cash payments
* View total M-Pesa payments
* View total payments

## Technologies Used

* React
* Vite
* JavaScript
* React Router
* Tailwind CSS
* TheMealDB API
* LocalStorage

## Project Structure


quickbite-hotel/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── ManagerDashboard.jsx
│   │   ├── MealDetails.jsx
│   │   ├── Menu.jsx
│   │   ├── OrderSuccess.jsx
│   │   └── WaiterDashboard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── vercel.json
├── package.json
└── README.md


# Setup Instructions

## 1. Clone the repository


git clone https://github.com/robert00-1/quickbite-hotel.git


## 2. Enter the project directory


cd quickbite-hotel


## 3. Install dependencies


npm install


## 4. Start the development server


npm run dev


The application will normally be available at:


http://localhost:5173


## 5. Build the project

To create a production build:


npm run build


To preview the production build locally:


npm run preview


# API Used

QuickBite Hotel uses **TheMealDB API** to retrieve meal information.

The API provides meal names, images, categories, areas, ingredients, and other meal information.

## API Base URL


https://www.themealdb.com/api/json/v1/1/
```

## Endpoints Used

### Get Meal Categories


https://www.themealdb.com/api/json/v1/1/list.php?c=list


This endpoint is used to retrieve available meal categories.

### Search Meals


https://www.themealdb.com/api/json/v1/1/search.php?s={mealName}


Example:


https://www.themealdb.com/api/json/v1/1/search.php?s=chicken


This endpoint allows customers to search for meals.

### Filter Meals by Category


https://www.themealdb.com/api/json/v1/1/filter.php?c={category}


Example:


https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken


This endpoint is used to display meals belonging to a selected category.

### Get Meal Details


https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}


Example:


https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772


This endpoint is used to retrieve detailed information about a selected meal, including ingredients and instructions.

# Order Management

The application uses browser **LocalStorage** to temporarily store customer orders.

Orders move through the following workflow:


Customer
   ↓
Place Order
   ↓
Pending
   ↓
Preparing
   ↓
Ready
   ↓
Served
   ↓
Manager Payment Records


When a waiter marks an order as **Served**, the order is removed from the active waiter dashboard and moved to the completed orders used by the manager dashboard.

# Application Routes

| Route            | Purpose                           |
| ---------------- | --------------------------------- |
| `/`              | Home page                         |
| `/menu`          | Restaurant menu                   |
| `/meal/:id`      | Meal details                      |
| `/cart`          | Shopping cart                     |
| `/checkout`      | Checkout and customer information |
| `/order-success` | Order confirmation                |
| `/about`         | About the hotel                   |
| `/contact`       | Contact page                      |
| `/waiter`        | Waiter dashboard                  |
| `/manager`       | Manager dashboard                 |

# Deployment

The frontend is deployed using Vercel.

Live application:


https://quickbite-hotel-672y.vercel.app
```

## Main Customer Page


https://quickbite-hotel-672y.vercel.app/


## Waiter Dashboard


https://quickbite-hotel-672y.vercel.app/waiter


## Manager Dashboard


https://quickbite-hotel-672y.vercel.app/manager


# Challenges and Known Bugs

## 1. LocalStorage limitation

The current version uses browser LocalStorage to store orders.

This means orders can be shared between different tabs/windows of the same browser, but LocalStorage is **not shared between different browsers or different devices**.

For example, an order created in Chrome will not automatically appear in Firefox.

A future version should use a backend API and database such as PostgreSQL so that customers, waiters, and managers can access the same real-time order data.

## 2. Payment processing

The application currently records the selected payment method as **Cash** or **M-Pesa**, but it does not perform a real M-Pesa transaction.

A future version can integrate the Safaricom Daraja API to process real M-Pesa payments.

## 3. Meal prices

TheMealDB provides meal information but does not provide restaurant-specific prices.

The current application therefore uses temporary prices for meals.

A future version should store restaurant prices in the application's own database.

## 4. Authentication

The current version does not have user authentication.

The waiter and manager dashboards are accessible through their respective routes.

A future production version should add authentication and role-based authorization so that only authorized staff can access the waiter and manager dashboards.

## 5. Real-time order updates

The current version does not use WebSockets or a real-time backend.

A future version could use WebSockets so that a waiter immediately receives a new customer order without refreshing the page.

# Future Improvements

* Add a backend API
* Add PostgreSQL database
* Add customer, waiter, and manager authentication
* Add role-based authorization
* Integrate real M-Pesa payments
* Add real restaurant meal prices
* Add real-time order notifications
* Add order history for customers
* Add menu management for managers
* Add sales reports
* Add responsive mobile navigation
* Add automated testing

# Author

**Robert Mmasi**

Full Stack Software Engineering Student

Built as a React application project for learning and demonstrating modern frontend development, API integration, state management, routing, and user interface design.
