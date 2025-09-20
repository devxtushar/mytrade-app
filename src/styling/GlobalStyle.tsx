import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 50,
    backgroundColor: '#fff',
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
