# Discipline Management System - API Documentation

This document provides a comprehensive overview of the available API endpoints for the Discipline Management System backend.

## Base URL
Default: `http://localhost:2008`

## Authorization (JWT)
Most endpoints in this system are **protected**. You must include a JWT Bearer Token in the headers of your requests.
- **Header Key:** `Authorization`
- **Header Value:** `Bearer <your_token>`

Tokens are obtained via the `/auth/login` endpoint and are valid for **3 days**.

---

## Authentication Endpoints

### Login
- **Endpoint:** `/auth/login`
- **Method:** `POST`
- **Request Body (JSON):**
  - `email` (string): **Required**.
  - `password` (string): **Required**.

### Register
- **Endpoint:** `/auth/register`
- **Method:** `POST`
- **Request Body (JSON):**
  - `firstName` (string): **Required**.
  - `lastName` (string): **Required**.
  - `phoneNumber` (string): **Required**.
  - `email` (string): **Required**.
  - `password` (string): **Required** (min 6 chars).

---

## Student Endpoints (Protected)

### Create Student
- **Endpoint:** `/students`
- **Method:** `POST`
- **Request Body (JSON):**
  - `firstName` (string): **Required**.
  - `lastName` (string): **Required**.
  - `fatherName` (string): **Required**.
  - `motherName` (string): **Required**.
  - `fatherPhoneNumber` (string): **Required**.
  - `motherPhoneNumber` (string): **Required**.
  - `year` (string): **Required**.
  - `classGroup` (string): **Required**.
  - `location` (string): Optional.
  - `status` (string): Optional. (Values: `IN`, `OUT`, `RETURNED`)

### Get All Students
- **Endpoint:** `/students`
- **Method:** `GET`
- **Query Params:** `location` (optional).

### Update Student
- **Endpoint:** `/students/:id`
- **Method:** `PATCH`
- **Request Body (JSON):**
  - Any field from **Create Student** (optional).

---

## Transport Endpoints (Protected)

### 1. Route Management
#### Create Route
- **Endpoint:** `/transport`
- **Method:** `POST`
- **Request Body (JSON):**
  - `location` (string): **Required**.
  - `price` (number): **Required**.

#### Update Route
- **Endpoint:** `/transport/:id`
- **Method:** `PATCH`
- **Request Body (JSON):**
  - `location` (string): Optional.
  - `price` (number): Optional.

### 2. Assignment Management
#### Assign Student to Route
- **Endpoint:** `/transport/assign`
- **Method:** `POST`
- **Request Body (JSON):**
  - `studentId` (number): **Required**.
  - `transportId` (number): **Required**.
  - `status` (string): Optional. (Values: `PAID`, `NOT_PAID`, `OUT`)

#### Update Assignment Status
- **Endpoint:** `/transport/assignments/:id`
- **Method:** `PATCH`
- **Request Body (JSON):**
  - `status` (string): **Required**. (Values: `PAID`, `NOT_PAID`, `OUT`)

---

## Discipline Record Endpoints (Protected)

### Create Record
- **Endpoint:** `/records`
- **Method:** `POST`
- **Request Body (JSON):**
  - `studentId` (number): **Required**.
  - `reason` (string): **Required**.
  - `location` (string): Optional.
  - `status` (string): Optional. Default: `OUT`.
  - `outDate` (string/date): Optional.
  - `returnDate` (string/date): Optional.

### Update Record
- **Endpoint:** `/records/:id`
- **Method:** `PATCH`
- **Request Body (JSON):**
  - Any field from **Create Record** (optional).

---

## Academic Term Endpoints (Protected)

### Get All Terms
- **Endpoint:** `/terms`
- **Method:** `GET`

### Get Active Term
- **Endpoint:** `/terms/active`
- **Method:** `GET`

### Create Term
- **Endpoint:** `/terms`
- **Method:** `POST`
- **Request Body (JSON):**
  - `name` (string): **Required**.
  - `startDate` (string/date): **Required**.
  - `endDate` (string/date): Optional.
  - `isActive` (boolean): Optional.

### Activate Term
- **Endpoint:** `/terms/:id/activate`
- **Method:** `PATCH`

---

## Attendance Endpoints (Protected)

### List Attendance (with students)
- **Endpoint:** `/attendance`
- **Method:** `GET`
- **Query Params:** `termId`, `date`, `year`, `classGroup` (optional).

### Student Attendance History
- **Endpoint:** `/attendance/student/:studentId`
- **Method:** `GET`
- **Query Params:** `termId` (optional).

### Mark Attendance (bulk)
- **Endpoint:** `/attendance/mark`
- **Method:** `POST`
- **Request Body (JSON):**
  - `date` (string/date): **Required**.
  - `termId` (number): Optional (uses active term).
  - `records` (array): `{ studentId, status, note? }` — status: `PRESENT`, `ABSENT`, `LATE`, `EXCUSED`.

### Term Opening (mark all present)
- **Endpoint:** `/attendance/term-opening`
- **Method:** `POST`
- **Request Body (JSON):**
  - `termId`, `date`, `year`, `classGroup` (all optional).

---

## Parent Notifications (Protected)

### Notify Parents
- **Endpoint:** `/notifications/parent`
- **Method:** `POST`
- **Request Body (JSON):**
  - `date` (string/date): **Required**.
  - `type` (string): **Required** — `TERM_OPENING`, `ABSENCE_ALERT`, `ATTENDANCE_SUMMARY`.
  - `termId` (number): Optional.
  - `studentIds` (number[]): Optional (for targeted alerts).

### Notification History
- **Endpoint:** `/notifications`
- **Method:** `GET`
- **Query Params:** `studentId` (optional).

---

## Staff Endpoints (Protected)

### Update Staff
- **Endpoint:** `/staff/:id`
- **Method:** `PATCH`
- **Request Body (JSON):**
  - `firstName` (string): Optional.
  - `lastName` (string): Optional.
  - `phoneNumber` (string): Optional.
  - `email` (string): Optional.
  - `password` (string): Optional.
