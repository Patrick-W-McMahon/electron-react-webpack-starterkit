# electron-react-webpack-starterkit
Electron & React & Webpack 4 template for a quick development and prototyping.

## Install
``` bash
# Clone the repository
$ git clone https://github.com/Patrick-W-McMahon/electron-react-webpack-staterkit my-app

# Go into the repository
$ cd my-app

# Install dependencies
$ npm install
```

## Develop
Just run this command to start developing with hot reloading.
``` bash
$ npm run dev
```

## What's included
- [React](https://reactjs.org/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html) support for React.
- CSS modules support.
- JS, CSS and assets automatic bundling.
- [Hot reloading](https://webpack.js.org/concepts/hot-module-replacement/) via Webpack 4.


## Folder structure
```
├── my-app/                             # Project root

    ├── build/                          # Webpack 4 will manage this folder for you
        ├── bundle.css                  # Bundled CSS
        ├── bundle.js                   # Bundled JS
        ├── images                      # images will be copied here

    ├── public
        ├── images/                     # public images

    ├── src/
            ├── assets/                 # assets for the project
            ├── components/             # React Components
            ├── containers/             # React Containers

            ├── App.jsx                 # React main component where everything is tied up
            ├── renderer_process.js     # Electron's renderer-process, where you React app is called.
            ├── global.css              # Global CSS and global constants go here

    ├── templates/                      # Templates 
        ├── index.hbs                   # This HTML only uses build/ folder's files

    ├── main_process.js                 # Electron's main process. Application Starting point.
    ├── package.json
    ├── webpack.config.js               # Webpack 4 setup
```