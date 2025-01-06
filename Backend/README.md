# Library Management System API Documentation

---

## Introduction

Welcome to the Library Management System API! This system provides a set of endpoints to manage users and books in a library. Users can register, log in, log out, add books, retrieve books, update book details, delete books, and manage the status of books.

The API is designed to handle user authentication using JSON Web Tokens (JWT) and ensures that only authenticated users can perform certain actions.

---

## Table of Contents

- [User Routes](#user-routes)
  - [Signup Route](#signup-route)
  - [Login Route](#login-route)
  - [Logout Route](#logout-route)
- [Book Routes](#book-routes)
  - [Add Book Route](#add-book-route)
  - [Get Books Route](#get-books-route)
  - [Update Book Route](#update-book-route)
  - [Delete Book Route](#delete-book-route)
  - [Update Book Status Route](#update-book-status-route)
- [Health Check Route](#health-check-route)

---

## User Routes

### Signup Route

- **Endpoint**: `/signup`
- **Method**: POST
- **Description**: Registers a new user. After providing necessary user details (e.g., name, email, password), the API creates a new user in the database.
- **Controller**: `Signupuser`

---

### Login Route

- **Endpoint**: `/login`
- **Method**: POST
- **Description**: Authenticates a user by validating their credentials and generating a JSON Web Token (JWT). The JWT token is used for securing further routes.
- **Controller**: `Loginuser`
- **Middleware**: `jwtverify` - Ensures that all routes beyond `/login` require a valid JWT token for access.

---

### Logout Route

- **Endpoint**: `/logout`
- **Method**: DELETE
- **Description**: Logs out the user by invalidating their JWT token, making it unusable for subsequent requests.
- **Controller**: `Logout`

---

## Book Routes

### Add Book Route

- **Endpoint**: `/addbook`
- **Method**: POST
- **Description**: Adds a new book to the database. The request must include book details like title, author, status, publishedYear, etc.
- **Controller**: `Addbook`
- **Middleware**: `jwtverify` - Ensures only authenticated users can add books.

---

### Get Books Route

- **Endpoint**: `/getbooks/:limit?`
- **Method**: GET
- **Description**: Fetches a list of books. The optional `limit` query can be provided to specify the number of books returned. If no limit is provided, all books are fetched.
- **Controller**: `Getbooks`

---

### Update Book Route

- **Endpoint**: `/updatebook/:id`
- **Method**: PUT
- **Description**: Updates the details of a book using its unique ID. The updated information should be included in the request body.
- **Controller**: `Updatebook`
- **Middleware**: `jwtverify` - Secures the route by requiring a valid JWT token.

---

### Delete Book Route

- **Endpoint**: `/deletebook/:id`
- **Method**: DELETE
- **Description**: Deletes a book using its unique ID.
- **Controller**: `Deletebook`
- **Middleware**: `jwtverify` - Ensures only authenticated users can delete books.

---

### Update Book Status Route

- **Endpoint**: `/updatestatus/:id`
- **Method**: PATCH
- **Description**: Updates the status of a book (e.g., availability). The request should include the necessary data to update the status.
- **Controller**: `Updatestatus`
- **Middleware**: `jwtverify` - Ensures that the user making the request has proper authentication.

---

### Health Check Route

- **Endpoint**: `/api/v1/health/`
- **Method**: GET
- **Description**: Provides a simple health check for the API to verify if it's running smoothly.

---
