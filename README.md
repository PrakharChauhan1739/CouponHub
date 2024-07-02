# CouponHub
Welcome to Couponhub, your destination for incredible discounts.Couponhub uses ReactJS, MongoDB, and Bootstrap to make savings effortless. Sign up securely, buy or sell coupons, and never miss an expiration date. Join Couponhub and unlock a world of smart shopping today!
How to run : 

Prerequisites:
Node.js and npm: Ensure Node.js and npm are installed. You can download them from Node.js official website.
MongoDB: Make sure you have MongoDB installed and running on your local machine or have access to a remote MongoDB instance.

Steps:
-Clone the Repository:
git clone <repository_url>
cd <repository_name>

-Install Dependencies:

Most MERN projects have separate client and server directories. Install dependencies for both.

cd client
npm install
cd ../server
npm install

- Set Up Environment Variables:

Create a .env file in the server directory if it doesn’t exist. Add necessary environment variables like MongoDB URI, API keys, etc.
eg of an 'emv file 
MONGODB_URI=mongodb://localhost:27017/your_db_name
PORT=5000
SECRET_KEY=your_secret_key

- Run mongoDB
mongod 

-Run the Server:

Start the server from the server directory.
cd server
npm start

--Run the Client:

Open a new terminal and start the client from the client directory
cd client
npm start


-----

project-root/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...other client files
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── ...other server files
│
└── README.md


--------------

If you're using MongoDB Compass to manage your MongoDB database, you still need to follow the general steps to run a MERN stack project. Here’s how you can incorporate MongoDB Compass into the process:
Detailed Steps for MongoDB Compass Integration:
Connecting MongoDB Compass:
Open MongoDB Compass.
Connect to MongoDB: Use the connection string mongodb://localhost:27017.
Create Database: If the database specified in your .env file doesn’t exist, create a new one in MongoDB Compass.

project-root/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...other client files
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── ...other server files
│
└── README.md




