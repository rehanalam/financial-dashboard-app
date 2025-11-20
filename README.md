# Financial Dashboard App

## Introduction

The **Financial Dashboard App** is a modern and responsive web application designed to provide an overview of financial activities, card details, transactions, statistics, and user settings. The app follows the **Atomic Design methodology**, ensuring reusable and scalable UI components.

## Vercel Deployed Link

[financial-dashboard-app-steel.vercel.app](https://financial-dashboard-app-steel.vercel.app/)

## Getting Started

### Installation

To set up the project locally, follow these steps:

```sh
yarn install
```

### Running the Ap

```sh
yarn dev
```

### Running Storybook

```sh
yarn storybook
```

### Running Tests

```sh
yarn test
```

## Tech Stack:

- **React 19** – Modern UI development
- **Vite** – Fast build tooling
- **Redux Toolkit** – State management (integrated for Profile Settings page only)
- **React Hook Form** – Form handling with validation
- **Tailwind CSS** – Utility-first styling
- **Headless UI** – Accessible UI components
- **Storybook** – Component documentation
- **Vitest & React Testing Library** – Unit and integration testing
- **Recharts** – Data visualization

## Component Structure

The project follows the **Atomic Design** pattern:

- **Atoms** – Basic UI elements like Buttons, Inputs, and Labels (built using Headless UI and Tailwind CSS for consistent theming).
- **Molecules** – Combinations of atoms, such as form fields.
- **Organisms** – Complex UI components, such as the Profile Edit form.
- **Templates & Pages** – Full layouts that combine organisms into complete pages.

The project follows a structured **layout system** to ensure consistency and scalability.

### **Project Layout**

- **Main Layout:** Wraps the application with global styles and structure.
- **Sidebar:** Provides persistent navigation for seamless access to different sections.
- **Header:** Displays key user information and quick actions.
- **Main Content:** Dynamically renders dashboard and settings content based on routing.

This modular approach keeps the UI clean, intuitive, and easy to extend.

## Features

### Implemented Features

✔️ **Dashboard Page**

- **My Cards Section**: Displays multiple card details (balance, holder name, masked number) with a "See All" button.
- **Recent Transactions**: Lists recent transactions with details like icon, description, date, and amount.
- **Weekly Activity Chart**: A bar chart showing daily deposits and withdrawals.
- **Expense Statistics**: A pie chart showing spending breakdown by category.
- **Quick Transfer UI**: Displays frequent transfer contacts and allows input of transfer amount.
- **Balance History Chart**: A line chart representing balance trends over time.

✔️ **Settings Page**

- **Tabs**: "Edit Profile," "Preference," and "Security" sections.
- **Edit Profile Section**: Allows users to update Name, Username, Email, Password, and Address fields.
- **Profile Picture Upload**
- **Form Validations** (without Yup) with success messages.
- **Save Button** to persist changes.

✔️ **General Functionalities**

- **Fully Responsive Design**
- **Interactive Elements**: Hover effects and smooth transitions.
- **Mock API Integration** (for Profile Settings only)
- **State Management** (limited to Profile Settings page)
- **Storybook for UI Components**
- **Basic Unit Testing** (only key components covered due to time constraints)

### Pending (Future Improvements)

⏳ **Full API Integration for Dashboard**
⏳ **Extended Redux State Management**
⏳ **Enhanced Unit & Integration Tests**

## Notes

⚡ **Due to limited time**, API integration and Redux state management are implemented **only for the Profile Settings page**. The Dashboard currently relies on **mock constant data** to maintain a generic implementation.

⚡ **Storybook and testing** include only a few cases to showcase key components and basic functionality.

## Feedback & Contributions

Feel free to contribute and enhance the project! 🚀
