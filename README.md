# BIDHUB

![BIDHUB Logo](https://raw.githubusercontent.com/SamNickGammer/BiddingApp/master/web/src/assets/logo/logo.png)

## Introduction

Welcome to BIDHUB, an innovative bidding platform brought to you by Lets Transport. This application aims to facilitate
seamless and efficient bidding processes for users. This README provides comprehensive instructions to set up, run, and
connect to the BIDHUB application.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Running the Server](#running-the-server)
- [Running the Web Application](#running-the-web-application)
- [Database Connection](#database-connection)
- [Technologies Used](#technologies-used)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

- Node.js (v16.20.1 or later)
- npm (v6 or later)
- MongoDB (v4.2 or later)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/SamNickGammer/BiddingApp.git
    ```
2. Navigate to the project directory:
    ```sh
    cd BiddingApp
    ```

## Running the Server

1. Navigate to the server directory:
    ```sh
    cd server
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the `server` directory and add the following environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    ```
4. Start the server:
    ```sh
    npm start
    ```

The server should now be running on `http://localhost:5000`.

## Running the Web Application

1. Navigate to the `web` directory:
    ```sh
    cd ../web
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the `web` directory and add any necessary environment variables.
4. Start the web application:
    ```sh
    npm start
    ```

The web application should now be running on `http://localhost:3000`.

## Database Connection

BIDHUB uses MongoDB as its database. Ensure MongoDB is installed and running on your machine or a remote server.

1. In the server's `.env` file, set the `MONGO_URI` to your MongoDB connection string:
    ```env
    MONGO_URI=mongodb://localhost:27017/bidhub
    ```

2. The server will connect to the MongoDB instance when started.

## Technologies Used

- **Backend:**
    - Node.js
    - Express
    - MongoDB
    - Mongoose
    - JWT for authentication

- **Frontend:**
    - React
    - Redux (if applicable)

- **Other Tools:**
    - bcryptjs
    - body-parser
    - cors
    - dotenv
    - express-validator
    - http-status-codes
    - nanoid
    - nodemon (for development)

## Contact

For any inquiries or issues, please contact Lets Transport
at [contact@letstransport.com](mailto:contact@letstransport.com).

Thank you for using BIDHUB!
