import React from 'react';
import { View, Image } from 'react-native';

import { IconButton } from 'react-native-paper';

function BrandBox({ back }: { back: boolean }) {
  return (
    <View className="pt-5 flex-row justify-between">
      <View>
        {back ? (
          <IconButton
            mode="contained"
            icon="chevron-left"
            iconColor="black"
            containerColor={'#E5E0EC'}
            size={25}
            onPress={() => console.log('Pressed')}
          />
        ) : (
          <Image
            source={require('../assests/brandLogo.png')}
            style={{ width: 100, height: 40 }}
            resizeMode="contain"
          />
        )}
      </View>
      <View>
        <IconButton
          mode="contained"
          icon="headset"
          containerColor={'#FFDAD6'}
          size={25}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
}

export default BrandBox;
