# E-Learning Platform

This is a full-stack E-Learning platform built with React, Redux Toolkit, and Express. The platform allows users to browse, purchase, and take courses. It also includes an admin panel for managing courses and lectures. [Live Demo 🔥](https://e-learning-ebrd.onrender.com)

## Features

### Frontend
- **User Authentication**: Login and registration functionality.
- **Course Management**: Users can browse, search, and filter courses.
- **Course Detail**: Detailed view of each course with purchase options.
- **Course Progress**: Track progress of enrolled courses.
- **Admin Panel**: Manage courses and lectures, including adding, editing, and deleting.
- **Profile Management**: Users can update their profile information.
- **Responsive Design**: Optimized for both desktop and mobile devices.

### Backend
- **User Management**: User authentication and profile management.
- **Course Management**: APIs for creating, updating, and deleting courses and lectures.
- **Purchase Management**: Handle course purchases and track user enrollments.
- **Progress Tracking**: Track user progress through courses and lectures.
- **Media Management**: Upload and manage course media content.
- **Stripe Integration**: Handle payments using Stripe.

## Technologies Used

### Frontend
- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios
- React Player
- Recharts

### Backend
- Express
- MongoDB
- Mongoose
- Cloudinary
- Stripe
- Multer
- JWT
- CORS

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/e-learning-platform.git
   cd e-learning-platform



2. **Install backend dependencies:**
   ```sh
   npm install
   ```

3. **Install frontend dependencies:**
   ```sh
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables:**
   Create a 

.env

 file in the root directory and add the following:
   ```env
   PORT=8000
   MONGO_URI=your-mongodb-uri
   SECRET_KEY=your-secret-key

   # Cloudinary setup
   API_KEY=your-cloudinary-api-key
   API_SECRET=your-cloudinary-api-secret
   CLOUD_NAME=your-cloudinary-cloud-name

   # Stripe setup
   STRIPE_SECRET_KEY=your-stripe-secret-key
   STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   WEBHOOK_ENDPOINT_SECRET=your-stripe-webhook-secret
   ```

5. **Build the frontend:**
   ```sh
   cd client
   npm run build
   cd ..
   ```

6. **Start the backend server:**
   ```sh
   npm run dev
   ```

### Deployment

1. **Deploy Backend:**
   Deploy the backend to a hosting service like Render, ensuring the `dist` directory is included in the deployment.

2. **Deploy Frontend:**
   Deploy the `dist` directory to a hosting service like Vercel or Netlify.

## Usage

### Admin Panel:
- Access the admin panel to manage courses and lectures.
- Add, edit, and delete courses and lectures.
- **Admin Login:** 
  - **Email:** mani@gmail.com
  - **Password:** mani123

### User Dashboard:
- Browse and search for courses.
- Purchase and enroll in courses.
- Track progress through courses and lectures.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the Maniraj kumar License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
- [Cloudinary](https://cloudinary.com/)
```
