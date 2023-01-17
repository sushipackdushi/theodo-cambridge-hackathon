# Getting Started with Create React App

This project was created with [Create React App](https://github.com/facebook/create-react-app).


## Setup
- Install nvm
    - In your terminal run `brew install nvm`
        - If `command -v nvm` does not return `nvm` add
        
        `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s` `"${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"`
        `[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`
        to the ~./bashrc
        
    - run `nvm install 14` to get node 14
    - **Check:** Run `which node` should output `/Users/<username>/.nvm/versions/node/<some node binary>`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
