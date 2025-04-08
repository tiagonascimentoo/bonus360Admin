# Bonus360 Promotional Campaign Management System

## Overview
Bonus360 is a promotional campaign management system inspired by Voucherify. It allows users to create, manage, and analyze promotional campaigns effectively. The application provides a user-friendly interface for handling various campaign-related tasks.

## Features
- **Campaign List**: View all campaigns with options to edit or delete.
- **Campaign Details**: Access detailed information about each campaign, including parameters and rules.
- **Create Campaign**: A dedicated form for creating new campaigns with input validation.
- **Home Dashboard**: Overview of campaigns with metrics and charts for quick insights.
- **Responsive Navigation**: Easy navigation between different pages of the application.

## Project Structure
```
bonus360
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── CampaignList.jsx
│   │   ├── CampaignDetails.jsx
│   │   ├── CreateCampaign.jsx
│   │   └── Navbar.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Campaigns.jsx
│   │   ├── CreateCampaignPage.jsx
│   │   └── NotFound.jsx
│   ├── services
│   │   └── api.js
│   ├── styles
│   │   └── global.css
│   ├── App.jsx
│   ├── index.js
│   └── routes.js
├── package.json
├── .gitignore
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd bonus360
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.