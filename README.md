# Boolean Logic Solver

A web-based Digital Logic Solver that helps users solve and understand Boolean logic problems using interactive tools and visualizations.

## Live Website

https://boolean-logic-solver.vercel.app

## Features

### 1. Truth Table
- Generate truth tables for different numbers of variables.
- Solve Boolean functions using the generated truth table.
- View the corresponding K-Map and circuit representation.
- Verify the simplified result.

### 2. Minterms / Maxterms
- Enter minterms or maxterms.
- Generate the corresponding Boolean expression.
- Simplify and verify the result.

### 3. Boolean Expression
- Enter Boolean expressions such as:
  - `AB + A'C`
  - `A'B + AC`
- Generate the corresponding truth table.
- Perform simplification, K-Map generation, circuit generation and verification.

### 4. K-Map
- Generate Karnaugh Maps for Boolean functions.
- Simplify Boolean expressions using K-Maps.
- Display the corresponding circuit and verification.

### 5. Binary Adder
- Add binary numbers from 1 to 4 bits.
- Display the result and circuit representation.
- Supports:
  - Standard Gates
  - NAND-only implementation
  - NOR-only implementation

### 6. Binary Subtractor
- Subtract binary numbers from 1 to 4 bits.
- Display the result and circuit representation.
- Supports:
  - Standard Gates
  - NAND-only implementation
  - NOR-only implementation

### 7. Logical Statement → Boolean Expression
The project includes an AI-powered feature that converts natural language logical statements into Boolean expressions.

For example:

Input:
The output is true when A is true and B is false.

Output:
`AB'`

The generated Boolean expression can then be used with the existing Boolean Logic Solver tools.

### 8. Multiplexer
- Supports interactive multiplexer inputs.
- Allows users to select input values.
- Displays the output and truth table.
- Provides multiplexer circuit representations.

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### AI
- Google Gemini API

### Deployment
- Vercel — Frontend
- Render — Backend

## Project Structure

```text
Boolean Logic Solver
│
├── Website DC/
│   └── Website DC/
│       ├── index.html
│       ├── about.html
│       ├── script.js
│       └── style.css
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
