## LLE-dashy-dashy-dashboard
**LLE-dashy-dashy-dashboard** is an application that provides users with a user-friendly interface for viewing deployed projects and adding them to the favorites list for quick access. The application retrieves data from the card.json file, which is currently manually populated.
![image](https://github.com/serhiyraskoley/LLE-dashydahsy-dashboard/assets/22105624/24c2840c-751b-4a36-9c42-ec608cb531c2)

Main functionality:
* Viewing projects: The user can view cards describing projects that are deployed and available for use.
![image](https://github.com/serhiyraskoley/LLE-dashydahsy-dashboard/assets/22105624/3deb4775-f708-4c3c-a5f5-8a7139a8c230)
* Add to favorites: The user can add projects to the favorites list to have quick access to them. The card changes color.
  ![image](https://github.com/serhiyraskoley/LLE-dashydahsy-dashboard/assets/22105624/63317608-03dd-4d91-9b7c-786c63c69e83)
* Search for projects by maintainer.
![image](https://github.com/serhiyraskoley/LLE-dashydahsy-dashboard/assets/22105624/c7249088-561c-47d6-aec7-ffefa81be2e3)

Technical details:
* Card.json file: The application retrieves project data from the card.json file, which contains information about the project name, description, links, and other details.
* Favorite projects: The user can add projects to the list of favorites which save in browser local storage, which will be displayed at the top of the screen for quick access.

<details>
<summary>React default readme file</summary>
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
</details>
