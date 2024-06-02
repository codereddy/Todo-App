# Todo App Microfrontend

This project is a standalone React Microfrontend (MFE) component that encapsulates a fully functional todo list application. It demonstrates the ability to design and structure a maintainable React application with attention to code organization, testing, and TypeScript usage.

## Features

- **Todo Creation**: Users can input a new todo task description and add tasks to a list.
- **Todo Status**: Mark completed task by clicking on the checkbox.
- **Todo Persistence**: Todo items are saved using the browser’s localStorage to persist across page refreshes and sessions.
- **Filtering**: Provides buttons or a mechanism to filter the list: “All”, “Active”, “Completed”.

## Technical Considerations

- **TypeScript**: The project is written in TypeScript for type safety.
- **Testing**: Includes unit tests to test core functionalities.
- **Code Quality**: Follows best practices for clean, readable, and well-structured code.
- **State Management**: Utilizes React’s built-in state management.

## Setup Instructions

### Prerequisites

- Node.js (v12 or higher)
- npm 

### Installation and usage

1. Unzip the project and navigate to TODO-APP
2. run "npm i"
3. run "npm start"

### Design and Architectural Choices

**Microfrontend Integration**: The component is designed to be seamlessly integrated into various host applications. It accepts initial data via props and communicates changes back to the host application if needed.
**Component Structure**: A seperate components folder is created to add future components.


### Edge Cases

***Edge Case 1**: Handles edge cases such as localStorage unavailability and prints an error.
***Edge Case 2**: To handel invalid input like trailing spaces etc., the input is trimmed before task creation.
***Edge Case 3**: Handling default errors and showing a explanatory message when no tasks are available in a category.

### Scope to enhancements

Below are possible enhancements:
***Enhancement 1** : Create a button to clear/delete all tasks.
***Enhancement 2** : Improving button based task filters to Tabbed Interface.
***Enhancement 3** : Improving the CSS to make page more appealing.
***Enhancement 4** : Utilising a state management library if appication grows in future.
***Enhancement 5** : Search tasks, drag and drop tasks etc.,


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).