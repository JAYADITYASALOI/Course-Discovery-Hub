# Course-Discovery-Hub
Course Discovery Hub is a polished full-stack web app combining responsive course listing interface with backend API that validates mobile numbers &amp; returns structured JSON response.  
This project is made to demonstrate production-style thinking, clean architecture, strong UI-UX, proper backend validation, &amp; seamless frontend-backend integration.

---

# Objective

Build a simple but high-quality web application that demonstrates:

- a Next.js frontend with mock course listing data,
- search and filter functionality,
- a Flask API endpoint with strict validation,
- and integration between the frontend and backend.

The objective of this project is to create a clean, professional, and recruiter-friendly full-stack solution that showcases frontend, backend, and integration skills together.

---

# Tasks to be Completed

## Task 1 — Next.js

Create a course listing page that:

- displays mock course data,
- supports search by course name,
- supports category-based filtering,
- and is fully responsive on both mobile and desktop devices.

---

## Task 2 — Flask

Create a Flask API endpoint that:

- accepts a `POST` request,
- receives:
  - `phone_number`
  - `message`
- validates Indian mobile numbers,
- and returns proper JSON responses for both valid and invalid inputs.

---

## Task 3 — Frontend to Backend Integration

Connect the Next.js frontend with the Flask backend so that:

- the frontend sends user input to the backend,
- the Flask API validates the data,
- and the API response is displayed directly on the frontend interface.

---

# My Idea

The idea behind this project was to transform a basic screening assignment into a polished mini product.

Instead of building a plain demo application, the goal was to create a clean and professional experience with:

- a visually attractive interface,
- smooth user interaction,
- strong validation handling,
- clear architecture,
- and production-style implementation quality.

The application combines:

- course discovery,
- instant search and filtering,
- and live backend API interaction

within a single unified interface.

This approach demonstrates practical full-stack development skills rather than isolated frontend or backend implementation.

---

# Approach to the Project

The solution follows a clear separation of concerns between the frontend and backend systems.

---

## Frontend Approach

The frontend is responsible for:

- rendering course data,
- handling search functionality,
- managing category filtering,
- collecting user input,
- calling the backend API,
- and displaying API responses on the screen.

The UI is designed to feel modern, responsive, and visually polished.

---

## Backend Approach

The backend is responsible for:

- receiving form data,
- validating the phone number,
- validating required fields,
- and returning structured JSON responses.

Validation logic is handled entirely in Flask to maintain backend responsibility and clean architecture.

---

## Validation Rule

The mobile number validation follows these rules:

- must contain exactly 10 digits,
- must start with:
  - 6
  - 7
  - 8
  - or 9.

Example of valid number:

```text
9876543210
```

---

## UI/UX Approach

The interface is intentionally designed to feel premium and structured.

Key UI features include:

- dark gradient layout,
- responsive grid-based course cards,
- modern typography,
- smooth spacing and alignment,
- visual response states,
- clean form layout,
- and mobile-first responsiveness.

The focus was to ensure that the project feels complete and professional rather than appearing like a basic prototype.

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Fetch API

---

## Backend

- Python
- Flask
- flask-cors
- Python `re` module for validation

---

## Development Tools

- Node.js
- npm
- Python 3.10+
- pip
- Git
- GitHub

---

# System Architecture

```text
User
  ↓
Next.js Frontend
  ↓
Course Listing UI + Search/Filter Logic
  ↓
User submits API form
  ↓
Fetch Request to Flask API
  ↓
Flask Validation Endpoint
  ↓
Validation Logic
  ↓
JSON Response
  ↓
Response Displayed on Frontend
```

---

# Component Structure

## Frontend

### `page.tsx`
Main page container responsible for rendering the entire application UI.

### `CourseCard.tsx`
Reusable course card component used to display individual course details.

### `SearchFilter.tsx`
Handles:
- course search,
- category filtering,
- and filtering state management.

### `ApiTester.tsx`
Handles:
- form inputs,
- API requests,
- loading states,
- and API response display.

### `courses.ts`
Contains the mock course dataset used throughout the application.

---

## Backend

### `app.py`
Main Flask application containing:
- API routes,
- validation logic,
- and JSON response handling.

### `requirements.txt`
Contains all required Python dependencies.

---

# Data Flow

1. Course data is loaded from a hardcoded array.
2. Search and filter logic runs directly in the browser.
3. The user submits:
   - phone number
   - message
4. Next.js sends the request to the Flask backend.
5. Flask validates the data.
6. Flask returns a structured JSON response.
7. Next.js displays the response directly on the UI.

---

# Value Proposition

This project demonstrates more than basic assignment completion.

It showcases:

- clean frontend architecture,
- practical backend validation,
- real frontend-backend integration,
- responsive UI design,
- structured API response handling,
- and disciplined project organization.

The strength of this project lies in the execution quality.

The implementation avoids:

- unnecessary complexity,
- broken flows,
- inconsistent behavior,
- poor UI structure,
- and incomplete integration.

The application is built with production-style quality and presentation standards.

---

# Project Highlights

- Responsive course listing page
- Instant search and category filtering
- Strict Indian mobile number validation
- Real-time frontend-to-backend communication
- Structured JSON response handling
- Modern and polished UI design
- Clean project architecture
- Recruiter-friendly implementation
- Professional README documentation
- Mobile and desktop responsiveness

---

# How to Run

## Backend Setup

Open a terminal inside the `backend` folder:

```bash
python -m venv .venv
```

---

### Activate Virtual Environment

#### Windows PowerShell

```bash
.venv\Scripts\Activate.ps1
```

#### Windows Command Prompt

```bash
.venv\Scripts\activate.bat
```

---

### Install Backend Dependencies

```bash
pip install -r requirements.txt
```

---

### Run Flask Server

```bash
python app.py
```

Backend runs at:

```text
http://127.0.0.1:5000
```

---

# Frontend Setup

Open a second terminal inside the `frontend` folder:

```bash
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:3000
```

---

# How to Test

1. Open the frontend in the browser.
2. Search courses using keywords such as:
   - React
   - Python
   - Data
3. Apply category filters.
4. Enter a valid phone number:

```text
9876543210
```

5. Enter any message.
6. Submit the form.
7. View the JSON response displayed directly on the screen.

---

# Conclusion

This project demonstrates the ability to design and implement a complete full-stack feature with:

- clarity,
- correctness,
- clean architecture,
- responsive UI,
- backend validation,
- and professional presentation quality.

It is a polished and thoughtfully designed project intended to stand out under strict technical experimentation.

---

# Final Statement

Course Discovery Hub was created to meet the requirements with precision while also presenting the work in a professional, attractive, and production-style manner.

The final result is:

- a responsive Next.js frontend,
- a validated Flask API,
- seamless frontend-backend integration,
- and a clean user experience delivered as a complete mini product.
