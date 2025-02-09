# Street Style Store API

## Description
This is a RESTful API built using Node.js, Express, and MySQL for managing an e-commerce store. The API supports user authentication, product management, and rate limiting.

## Features
- **User Authentication**: Login functionality with JWT authentication.
- **CRUD Operations**: Create, Read, Update, and Delete (CRUD) operations for managing products.
- **Rate Limiting**: Prevents abuse by limiting the number of requests.
- **Database Integration**: Uses MySQL for storing and retrieving data.

## Technologies Used
- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- dotenv
- Express Rate Limit

## Installation
### 1. Clone the Repository
```sh
git clone git@github.com:pavankumarkaniki/street-style-store-api.git
cd street-style-store-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=street_style_store
JWT_SECRET=your_secret_key
```

### 4. Start the Server
```sh
npm run dev
```

## API Endpoints

### Authentication
- **POST** `/api/auth/login` - User login

### Items Management
- **GET** `/api/items` - Get all items (requires authentication)
- **POST** `/api/items` - Add a new item (requires authentication)
- **PUT** `/api/items/:id` - Update an item (requires authentication)
- **DELETE** `/api/items/:id` - Delete an item (requires authentication)

## Troubleshooting
If you face a database connection error, ensure MySQL is running and your `.env` variables are correctly set.

## Contributing
Feel free to submit issues or pull requests.
