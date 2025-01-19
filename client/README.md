# Course Management Platform

This is a Course Management Platform built with React, Redux Toolkit, and various other libraries. It allows users to browse, purchase, and track progress in courses.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [File Structure](#file-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Manirajkumar1/client.git
    cd course-management-platform
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

- Navigate to `http://localhost:8000` to view the application.
- Use the navigation bar to explore different sections of the platform.

## Features

- **User Authentication**: Login and register users.
- **Course Browsing**: Browse and search for courses.
- **Course Purchase**: Purchase courses and track purchase status.
- **Course Progress**: Track progress in enrolled courses.
- **Profile Management**: View and edit user profile.
- **Admin Dashboard**: Manage courses and users (admin only).

## File Structure

- `rootReducer.js`: Combines multiple reducers.
- `store.js`: Configures the Redux store.
- `authSlice.js`: Manages authentication state.
- `courseSlice.js`: Placeholder for course-related state management.
- `authapi.js`: Defines API endpoints for authentication.
- `courseApi.js`: Defines API endpoints for courses.
- `courseProgressApi.js`: Defines API endpoints for course progress.
- `purchaseApi.js`: Defines API endpoints for purchases.
- `MainLayout.jsx`: Main layout component.
- `About.jsx`: About Us page.
- `Login.jsx`: Login and registration component.
- `Course.jsx`: Course card component.
- `CourseDetail.jsx`: Course detail page.
- `CourseProgress.jsx`: Course progress page.
- `Courses.jsx`: Courses listing page.
- `Filter.jsx`: Filter component for courses.
- `HeroSection.jsx`: Hero section with search bar.
- `MyLearning.jsx`: User's enrolled courses page.
- `Profile.jsx`: User profile page.
- `SearchPage.jsx`: Search results page.
- `SearchResult.jsx`: Individual search result component.
- `App.jsx`: Main application routes.
- `main.jsx`: Entry point of the React application.
- `package.json`: Project dependencies and scripts.

## Dependencies

- React
- Redux Toolkit
- React Router DOM
- Axios
- Tailwind CSS
- Radix UI
- Lucide React
- React Player
- React Quill
- Recharts
- Sonner

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the Maniraj Kumar License.