import { AppRegistry } from 'react-native';
import App from './App'; // This will find App.tsx
import appConfig from './app.json';

AppRegistry.registerComponent(appConfig.expo.name, () => App);