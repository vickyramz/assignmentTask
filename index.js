/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as CONSTVALUES from './source/utills/Constant';
import Global_State from "./source/utills/global";
if (global.const == null) global.const = CONSTVALUES;
AppRegistry.registerComponent(appName, () => App);
