# Employee Registry API

## Overview

The **Employee Registry API** is a RESTful API designed to manage employee data within a company. Built with **Node.js, Express**, and **MongoDB**, it showcases how to structure and manage complex, relational data in MongoDB using **Mongoose**. The API supports handling employee information, roles, addresses, and office locations, allowing for a detailed and scalable human resources management structure.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Data Models](#data-models)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [License](#license)

---

## Features

- **Comprehensive Data Management**: Add, view, update, and delete employees, roles, addresses, and offices.
- **Data Relations**: Defines relationships between employees and their addresses, office locations, and roles.
- **Seeder Script**: Preloads the database with sample data for quick testing and demonstration.
- **RESTful API Design**: Uses standard REST conventions for efficient data retrieval and management.

## Technologies

- **Node.js** & **Express**: Provides a fast and scalable server environment.
- **MongoDB** & **Mongoose**: Manages database schemas and enforces data relations.
- **env**: Manages environment variables for sensitive data.

## Getting Started

1. **Clone the repository:**

```
git clone https://github.com/anastasia2022be1/employee-registry-API.git
cd employee-registry-API
```

2. **Install dependencies:**

```
npm install
```

3. **Set up environment variables:**

- Create a .env file in the root directory with your MongoDB URI:

```
MONGODB_URI=your_mongodb_connection_string
```

4. **Run the application:**

```
npm start
```

## Data Models

### Employee

- **Fields:** <span style="color:darkgrey">fullName, position, email, contactAddress, office, roles </span>.
- **Relationships:**
  - <span style="color:darkgrey">contactAddress</span>: References an Address.
  - <span style="color:darkgrey">office</span>: References an Office.
  - <span style="color:darkgrey">roles</span>: Array referencing Role.
  - **Address**
    - **Fields**: <span style="color:darkgrey">streetName, streetNumber, areaCode, city.</span>
  - **Office**
    - **Fields**: <span style="color:darkgrey">streetNameAndNumber, areaCode, city.</span>
    - **Relationships**: Can have multiple employees assigned.
- **Role**

  - Fields: <span style="color:darkgrey"> name, employees.</span>
  - Relationships: Can be assigned to multiple employees.

  ## API Endpoints

  ### Employee Endpoints

  - GET /employee: Fetch all employees.
  - GET /employee?full=true: Fetch all employees with full details (address, office, roles).

  ### Role Endpoints

  - GET /role: Fetch all roles.
  - GET /role?full=true: Fetch all roles with assigned employees.
  - GET /role/:id/employees: Fetch employees with a specified role.

  ### Office Endpoints

  - GET /office: Fetch all offices.
  - GET /office/:id/employees: Fetch employees assigned to a specified office.

  ## Scripts

  - Start server: <span style="color:darkgrey">npm start</span>
  - Seed database: <span style="color:darkgrey">npm run seed</span> (Uses seeder.js to preload data)

  ## License

  This project is licensed under the ISC License.
