This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation

In the project directory, you can run the following command to install the packages:

### `npm install`

## Environment Variables

Some environment variables such as api keys are stored in the .env file.<br>
Example: Page(s) that require api access will need to utilize .env in the root directory.<br>
A sample env file, env-sample.txt, is stored in the root directory for reference.

## API Keys Instruction

1. Sign up to get an api key from https://fortniteapi.com/
2. Input the api key as shown in the env-sample.txt file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Sass scripts

To run sass script, you can run the following command in the project directory:

### `gulp sass`

To run sass in watch mode, ou can run the following command:

### `gulp watch`

Note: compiled css file is located in ./src/main.css
