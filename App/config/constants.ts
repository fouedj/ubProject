import {Config} from 'react-native-config';
import {Dimensions, Platform} from 'react-native';

export const Environment = {
  environment: Config.ENV || '',
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const SERVER_URL = 'http://192.168.1.39:1337';
export const DimensionScreen = {
  windowHeight,
  windowWidth,
};
export const device = Platform.OS === 'android' ? 'android' : 'ios';
