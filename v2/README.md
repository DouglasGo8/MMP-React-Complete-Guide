
#### Install Modules

##### Dependencies

``` s
$ npm install -y @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/preset-react babel-eslint babel-loader babel-plugin-module-resolver babel-polyfill css-loader file-loader style-loader
$ npm install -y html-webpack-plugin
$ npm install -y react react-dom
$ npm install -y webpack webpack-cli webpack-dashboard webpack-dev-server copy-webpack-plugin
$ npm install -y --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```

#### ReactJS LifeCycle

 1. constructor (props) -> Don't use in side-effects action, as http request, storage loca file

 2. getDerivedStateFromProps (props, state) -> rarely used

 3. render -> returns JSX and that is really its job (Render Child Components)

 4. componentDidMount() -> a very important lifecycle hook which you'll use a lot when your're working with class-bases component, ***don't set state Syncronously here***, causes bad performance

 5. shouldComponetUpdate(nextProps, nextState) -> may cancel updating process

 6. render() -> Update Child Component Props

 7. getSnapshotBeforeUpdate(prevProps, prevState)

 8. componentDidUpdate

 9. componentWillRecieveProps(props)

clearTimeout(timer); when umnount components


### Planning React Apps

 1. Component Tree / Component Structure
 2. Application State (Data)
 3. Components vs Containers


* [JsonPlace Holder](https://jsonplaceholder.typicode.com)


