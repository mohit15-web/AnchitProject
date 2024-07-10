# Directory App

## Overview

This application allows users to manage a directory of personal information. Users can add, view, and edit details such as name, date of birth, Aadhaar number, mobile number, and age. The app is built using React.js and leverages local storage for data persistence.

## Features

- Add new person information to the directory
- View the list of people in the directory
- Edit existing person information
- Data persistence using local storage
- Responsive design for different screen sizes

## Technologies Used

- React.js
- Tailwind CSS
- React Toastify
- UUID

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/directory-app.git
   cd directory-app
2. Install dependencies:
    ```sh
    npm install

## Running the Application
To start the development server, run:
    ```sh
    npm start

## Usage

### Adding a New Person

1. Click on the "Add" button.
2. Fill in the required fields in the modal form.
3. Click on "Submit" to add the person to the directory.

### Viewing the Directory

1. Navigate to the "Retrieve Information" section by clicking the respective button.
2. The list of people in the directory will be displayed.

### Editing a Person's Information

1. In the directory list, click on the "Edit" button next to the person's entry.
2. Update the necessary fields in the modal form.
3. Click on "Submit" to save the changes.

## Directory Structure
    ```sh
    directory-app/
    │
    ├── public/
    │   ├── index.html
    │   └── ...
    │
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── RetrieveInfo.jsx
    │   │   └── AddNewPerson.jsx
    │   ├── Modal.jsx
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── ...
    │
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── ...



## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React.js documentation
- Tailwind CSS documentation
- React Toastify documentation

---

This README file provides a comprehensive guide on setting up and using the Directory App. It includes installation steps, usage instructions, and information about the project structure. Feel free to customize this template based on your project's specific needs.


