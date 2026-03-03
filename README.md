📦 Smart Stock Manager – QA Automation Framework
🎯 Project Purpose

This project demonstrates the design and implementation of a professional End-to-End (E2E) test automation framework built with Cypress for a Stock Management Web Application.

The objective is to:

Ensure functional reliability

Prevent regression defects

Validate business workflows

Demonstrate structured QA engineering practices

This repository reflects real-world QA automation standards used in modern Agile environments.

🧠 QA Engineering Approach

This framework was built following professional testing principles:

✔ Page Object Model (POM)

✔ Clean locator strategy using data-cy

✔ Separation of concerns (tests / logic / locators)

✔ Data-driven testing using fixtures

✔ Reusable custom commands

✔ Scalable and maintainable structure

The goal was not only to automate tests — but to design a maintainable automation architecture.

🛠 Technical Stack

Cypress – End-to-End Testing Framework

JavaScript

Node.js

Git version control

CI-ready structure

📂 Framework Architecture
cypress/
│
├── e2e/
│   ├── authentication/
│   ├── users-management/
│   ├── products-management/
│   └── stock-management/
│
├── fixtures/
│
├── support/
│   ├── commands.js
│   └── e2e.js
│
└── pages/   → Page Object Model

This structure ensures:

High readability

Easy maintenance

Low coupling

Test scalability

🧪 Test Coverage
🔐 Authentication Module

Valid login

Invalid login

Session handling

Logout verification

👥 User Management

Create user

Edit user

Delete user

Validation & error scenarios

📦 Product & Stock Management

Add product

Update product

Delete product

Stock update workflow

⚠ Validation Testing

Required fields validation

Incorrect data formats

Business rule verification

🚀 Execution

Install dependencies:

npm install

Run tests:

npx cypress open

Headless execution:

npx cypress run
📊 Quality Focus

This project emphasizes:

Automation reliability

Clear test documentation

Structured defect detection

Professional test organization

Clean Git history management

It simulates real QA responsibilities in a production-like environment.

📈 What This Project Demonstrates

Ability to design automation architecture from scratch

Strong understanding of functional testing

Practical experience with Cypress

Professional Git workflow

QA mindset focused on scalability & quality

👨‍💻 About the Author

Hatem Almezlini
QA Functional Tester | QA Automation Engineer | IT Support Specialist

Background in IT support and software testing with hands-on experience in:

Manual testing

Automation testing (Cypress)

Test case design

Bug reporting

Agile environments

💡 Next Improvements (Planned)

CI/CD integration

Advanced reporting

Test summary dashboard

Performance & API testing integration
