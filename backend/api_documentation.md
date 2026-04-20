# Discipline Management System - API Documentation

This document provides a comprehensive overview of the available API endpoints for the Discipline Management System backend.

## Base URL
Default: `http://localhost:2008`

---

## Authentication Endpoints

### Login
- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a token.
- **Payload:**
  - `email` (string): User's email address.
  - `password` (string): User's password.
- **Rate Limit:** 5 requests per 60 seconds.

### Register
- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user/staff member.
- **Payload:**
  - `firstName` (string): Required.
  - `lastName` (string): Required.
  - `phoneNumber` (string): Required.
  - `role` (string): Required.
  - `email` (string): Required, valid email format.
  - `password` (string): Required, minimum 6 characters.
  - `status` (string): Optional.

---

## Student Endpoints

### Create Student
- **Endpoint:** `/students`
- **Method:** `POST`
- **Payload:**
  - `firstName` (string): Required.
  - `lastName` (string): Required.
  - `fatherName` (string): Required.
  - `motherName` (string): Required.
  - `fatherPhoneNumber` (string): Required.
  - `motherPhoneNumber` (string): Required.
  - `year` (string): Required.
  - `classGroup` (string): Required.
  - `status` (string): Optional.

### Get All Students
- **Endpoint:** `/students`
- **Method:** `GET`

### Get Student by ID
- **Endpoint:** `/students/:id`
- **Method:** `GET`

### Update Student
- **Endpoint:** `/students/:id`
- **Method:** `PATCH`
- **Payload:** All "Create Student" fields are optional.

### Delete Student
- **Endpoint:** `/students/:id`
- **Method:** `DELETE`

---

## Staff Endpoints

### Create Staff
- **Endpoint:** `/staff`
- **Method:** `POST`
- **Payload:**
  - `firstName` (string): Required.
  - `lastName` (string): Required.
  - `phoneNumber` (string): Required.
  - `role` (string): Required.
  - `email` (string): Required, valid email format.
  - `password` (string): Required, minimum 6 characters.
  - `status` (string): Optional.

### Get All Staff
- **Endpoint:** `/staff`
- **Method:** `GET`

### Get Staff by ID
- **Endpoint:** `/staff/:id`
- **Method:** `GET`

### Update Staff
- **Endpoint:** `/staff/:id`
- **Method:** `PATCH`
- **Payload:** All "Create Staff" fields are optional.

### Delete Staff
- **Endpoint:** `/staff/:id`
- **Method:** `DELETE`

---

## Discipline Record Endpoints

### Create Record
- **Endpoint:** `/records`
- **Method:** `POST`
- **Payload:**
  - `studentId` (number): Required.
  - `reason` (string): Required.
  - `status` (string): Optional.
  - `outDate` (date-string): Optional.
  - `returnDate` (date-string): Optional.

### Get All Records
- **Endpoint:** `/records`
- **Method:** `GET`

### Get Record by ID
- **Endpoint:** `/records/:id`
- **Method:** `GET`

### Update Record
- **Endpoint:** `/records/:id`
- **Method:** `PATCH`
- **Payload:** All "Create Record" fields are optional.

### Delete Record
- **Endpoint:** `/records/:id`
- **Method:** `DELETE`

---

## Miscellaneous

### Health Check / Hello
- **Endpoint:** `/`
- **Method:** `GET`
- **Description:** Simple health check returning a greeting.
