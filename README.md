# ToDoList - RESTful API

The ToDoList app is a RESTful web application following the Model-View-Controller (MVC) architecture. The backend, powered by Node.js and Express.js, offers a RESTful API for managing tasks. It utilizes MongoDB as the database for storing task data, with models defining the schema and structure of the data.

![Alt text](src/views//todoapp.png)

The backend controllers handle incoming requests, interacting with the models to perform CRUD (Create, Read, Update, Delete) operations on tasks. The API endpoints are designed to adhere to RESTful principles, providing predictable and consistent interfaces for client applications.

On the frontend, the app is built with React.js to create a dynamic and interactive user interface. Components such as Greeting and TodoList are responsible for rendering views and managing user interactions. React Router is used for client-side routing, enabling navigation between different views without full page reloads.

The app is tested using Jest. Test suites ensure that the API endpoints behave correctly, database operations are performed accurately.

## for GitHub

The ToDoList app is a simple task management application built with Node.js, Express.js, and React.js. It allows users to create, view, update, and delete tasks. The backend of the app is powered by Express.js, providing RESTful API endpoints for managing tasks stored in a MongoDB database. On the frontend, React.js is used to create an interactive user interface where users can add new tasks, mark tasks as completed, and delete tasks. The app features responsive design, dark mode, and a clean user interface for a seamless task management experience.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command:

   ```bash
   npm install

3. Build the application using TypeScript by running:


   ```bash
   npm run build

4. To start the application, in the root folder type:


   ```bash
   npm start

You should see the messages "Gurrus says hello from port 3000" and "Connected to MongoDB" if the application is initialized correctly.

5. Open your web browser and visit http://localhost:3000/index.html to access the front-end of the application.


## Key Components

    - Todo.ts: This TypeScript model defines the structure of a ToDo item, representing data stored in the database.

    - ITodoItem.ts: This interface describes the structure of a ToDo item, which is used to interact with the database.

## MONGO_CONNECTION_STRING

    This project connects to MongoDB. You need to have a MONGO_CONNECTION_STRING for the connection to be established successfully.

## Dependencies

The project uses the following dependencies:

    express: A fast, unopinionated, minimalist web framework for Node.js.

    mongoose: A MongoDB object modeling tool designed to work in an asynchronous environment.

    body-parser: A middleware to parse incoming request bodies in a middleware before the handlers.

## Development Dependencies

The project uses the following devDependencies:

    typescript: A superset of JavaScript that compiles to clean JavaScript output.

    jest: A testing framework for JavaScript projects.

    ts-jest: A TypeScript preprocessor for Jest.

## Testing

To run the tests, use the following command:

    npm test

The tests are written using Jest and are located in the __tests__ directory.


## Contribution

to this project are welcome! If you find any issues or want to add new features, feel free to create a pull request or submit an issue.

## License

This project is licensed under the MIT License.




Happy ToDoListing! 🚀














