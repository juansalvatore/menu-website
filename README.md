# Menu Website

This is a simple website I'm building with **[`Belu`](https://github.com/Belgebel)** to practice **React 16.7.0-alpha.0** 

## Technologies used

- [Reactjs](https://reactjs.org/) - JavaScript library for building user interfaces
- [styled-components](https://www.styled-components.com/) - Visual primitives for the component age 💅
- [Material-UI](https://material-ui.com/) - React components that implement Google's Material Design.
- [node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - Document database

## How to run the project locally

1. `git clone https://github.com/juansalvatore/menu-website.git`

2. `cd menu-website` 

3. `npm run dependencies`

3. Now you should create a new file called **keys_dev.js** inside the folder **./config** 

4. Inside this file paste this code:
```
module.exports = {
  mongoURI: 'mongodb://localhost:27017/menu-website',
}
```
You can replace the mongoURI with your own mongodb uri.

5. After that you should run `npm run dev` and it will run the react app in *localhost:3000* and the api in *localhost:5000*
