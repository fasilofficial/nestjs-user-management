# User Management REST API

This project is a simple User Management API built with [NestJS](https://nestjs.com/). It provides endpoints to create, read, update, and delete user records.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Create a User](#create-a-user)
  - [Get All Users](#get-all-users)
  - [Get a User by ID](#get-a-user-by-id)
  - [Update a User](#update-a-user)
  - [Delete a User](#delete-a-user)
- [DTOs and Validation](#dtos-and-validation)
- [Service](#service)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fasilofficial/nestjs-user-management.git
   cd nestjs-user-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

### Create a User

- **Endpoint**: `POST /api/users`
- **Description**: Creates a new user.
- **Request Body**:

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "gender": "MALE"
  }
  ```

### Get All Users

- **Endpoint**: `GET /api/users`
- **Description**: Retrieves all users. You can filter users by gender.
- **Query Parameters**:
  - `gender` (optional): Can be `MALE`, `FEMALE`, or `OTHER`.

### Get a User by ID

- **Endpoint**: `GET /api/users/:id`
- **Description**: Retrieves a user by their ID.
- **Path Parameters**:
  - `id`: The ID of the user.


### Update a User

- **Endpoint**: `PATCH /api/users/:id`
- **Description**: Updates a user by their ID.
- **Path Parameters**:
  - `id`: The ID of the user.
- **Request Body**:

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "gender": "MALE"
  }
  ```

### Delete a User

- **Endpoint**: `DELETE /api/users/:id`
- **Description**: Deletes a user by their ID.
- **Path Parameters**:
  - `id`: The ID of the user.


## DTOs and Validation

- **CreateUserDto**: Defines the structure for creating a user.
- **UpdateUserDto**: Defines the structure for updating a user.
- **Validation**: Uses `ValidationPipe` to validate request data against DTOs.

## Service

- **UsersService**: Contains the business logic for managing users, including methods for creating, finding, updating, and deleting users.
