MERN eCommerce Website

This project is a full-featured eCommerce website built using the MERN stack (MongoDB, Express, React, Node.js). It includes user authentication, product management, shopping cart functionality, and a payment gateway integration.
Features

    User Authentication: Secure registration and login system with JWT tokens.
    Product Management: Admin can add, edit, and delete products.
    Shopping Cart: Users can add products to their cart, update quantities, and remove items.
    Checkout Process: Seamless checkout process with order summary and payment integration.
    Order History: Users can view their past orders and order details.
    Responsive Design: Fully responsive layout for optimal viewing on any device.
    Payment Gateway: Integration with Stripe/PayPal for secure online payments.
    Admin Dashboard: Comprehensive dashboard for managing products, orders, and users.

Technologies Used

    Frontend: React, Redux, Bootstrap
    Backend: Node.js, Express
    Database: MongoDB
    Authentication: JWT (JSON Web Tokens)
    Payment Integration: Stripe/PayPal API
    Hosting: Deployed on Heroku/Vercel

Installation

    Clone the repository:

    bash

git clone https://github.com/yourusername/mern-ecommerce.git

Install dependencies:

bash

cd mern-ecommerce
npm install
cd client
npm install

Create a .env file in the root directory and add the following:

bash

NODE_ENV = development
PORT = 5000
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret
PAYPAL_CLIENT_ID = your_paypal_client_id

Run the application:

bash

    # In the root directory
    npm run dev

Usage

    Visit the homepage to browse products.
    Sign up or log in to add products to the cart.
    Complete the checkout process using the integrated payment gateway.
    Admin users can manage products, orders, and users via the admin dashboard.

Contributing

Contributions are welcome! Please fork the repository and create a pull request.
License

This project is licensed under the MIT License.