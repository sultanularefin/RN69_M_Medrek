/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import A_Form from "./src/outLander/A_Form";

/*AppRegistry.registerComponent(appName, () => App);*/
AppRegistry.registerComponent(appName, () => A_Form);
