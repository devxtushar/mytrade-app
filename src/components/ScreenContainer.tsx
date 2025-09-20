import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyle } from '../styling/GlobalStyle';

type Props = {
  children: React.ReactNode;
};
const ScreenContainer = ({ children, ...rest }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={GlobalStyle.container} {...rest}>
        <Image
          source={require('../assests/Top.png')}
          style={GlobalStyle.topWave}
          resizeMode="stretch"
        />
        {children}
        <Image
          source={require('../assests/Bottom.png')}
          style={GlobalStyle.bottomWave}
          resizeMode="stretch"
        />
      </View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
