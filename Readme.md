# Library Management System

## Overview

The Library Management System is a web application designed to facilitate the management of library resources, including books and user accounts. This system allows users to sign up, log in, and manage their book collections efficiently. Admin users have additional privileges to add, update, and delete books from the library.

## Features

- **User Authentication**: Users can sign up and log in to their accounts.
- **Book Management**: Admin users can add, update, and delete books.
- **Health Check Endpoint**: A health check endpoint to verify the server's status.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Tech Stack

- **Frontend**: 
  - React.js
  - Redux for state management
  - Axios for API calls
  - Tailwind CSS for styling

- **Backend**: 
  - Node.js with Express.js
  - MongoDB for database management
  - JWT for user authentication

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- A package manager like npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/library-management-system.git
   cd library-management-system
   ```

2. **Set up the backend**:
   - Navigate to the `Backend` directory:
     ```bash
     cd Backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `Backend` directory and add your MongoDB connection string and other environment variables:
     ```
     VITE_API_BASE_URL='https://your-api-url.com/api/v1'
     ```

3. **Run the backend server**:
   ```bash
   npm start
   ```

4. **Set up the frontend**:
   - Navigate to the `Frontend` directory:
     ```bash
     cd Frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `Frontend` directory and add your API base URL:
     ```
     VITE_API_BASE_URL='http://localhost:8000/api/v1'
     ```

5. **Run the frontend application**:
   ```bash
   npm run dev
   ```

### Usage

- Navigate to `http://localhost:3000` in your web browser to access the application.
- Users can sign up and log in to manage their accounts.
- Admin users can add, update, and delete books from the library.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

