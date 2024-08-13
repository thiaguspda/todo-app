
### **README.md para `todo_app`**

```markdown
# Todo App

A simple Todo list application built with Ruby on Rails for the backend and React.js for the frontend.

## Getting Started

### **Prerequisites**

- Node.js and npm (Node Package Manager)
- Ruby and Rails
- Docker (if using Docker for deployment)

### **1. Clone the repository**

```bash
git clone https://github.com/thiaguspda/todo_app.git
cd todo_app
```

### **2. Set up the backend**

1. **Install dependencies**:

   ```bash
   bundle install
   ```

2. **Set up the database**:

   ```bash
   rails db:create
   rails db:migrate
   ```

3. **Start the Rails server**:

   ```bash
   rails server
   ```

   The backend will be running on `http://localhost:3000`.

### **3. Set up the frontend**

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the React development server**:

   ```bash
   npm start
   ```

   The frontend will be running on `http://localhost:3001`.

### **4. Open the application**

- Visit `http://localhost:3001` to view the application.
- The frontend will interact with the Rails API running on `http://localhost:3000`.

## **Deployment**

If deploying to AWS Elastic Beanstalk or another cloud platform, ensure that the appropriate environment variables are set, and follow the deployment instructions specific to the platform.

## **Built With**

- Ruby on Rails - Backend API
- React.js - Frontend UI
- Docker - Containerization (optional)
- AWS Elastic Beanstalk - Deployment (optional)

## **Contributing**

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## **License**

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```
