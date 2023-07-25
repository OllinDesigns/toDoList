# ToDoList - Node.js Project

This project is a ToDoList application built using Node.js, following the principles of hexagonal architecture and vertical slicing. It provides a simple web interface for managing tasks.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies by running the following command:

   ```bash
   npm install

3. Build the application using TypeScript by running:


   ```bash
   npm run build

4. To start the application, navigate to the dist folder and run the following command:


   ```bash
   node app.js

You should see the messages "Gurrus says hello from port 3000" and "Connected to MongoDB" if the application is initialized correctly.

5. Open your web browser and visit http://localhost:3000/index.html to access the front-end of the application.


## Key Components

    - Todo.ts: This TypeScript model defines the structure of a ToDo item, representing data stored in the database.

    - ITodoItem.ts: This interface describes the structure of a ToDo item, which is used to interact with the database.

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














