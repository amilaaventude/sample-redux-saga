This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Description
Redux saga is one of middleware library that can be used for Redux store. This can be accessing browser storage or I/O operation or HTTP request. redux store by default knows to dispatch actions and update its state using its root reducer. Actions represent of event describing something triggering in app and an interaction to change state. Reducer accumulates values from or stemming from dispatched actions and accumulates these values into the newly updated state. Actions are simply objects passed on into the reducer.Redux middleware lies between an action and a reducer. Cause of this actions it will contain a plain object, as long as the middleware intercepts this, performs its logic, and returns a plain object to pass along to the reducer. 
