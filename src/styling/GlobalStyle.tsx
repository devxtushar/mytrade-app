import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topWave: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height * 0.6,
  },
  bottomWave: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.2,
  },
});
