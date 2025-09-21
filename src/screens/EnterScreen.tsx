import React from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import BrandBox from '../components/BrandBox';
import Header from '../components/Header';
import SetPin from '../components/SetPin';

function EnterScreen({ navigation }: any) {
  return (
    <ScreenContainer>
      <BrandBox back={false} />
      <View className="flex-2 justify-end items-center" style={{ height: 150 }}>
        <Header title="Enter PIN" description="Unlock using your PIN" />
      </View>
      <View className="flex-1 flex-col gap-5 pt-10 justify-center">
        <View>
          <SetPin
            iconName="pin-outline"
            title="Enter PIN"
            values={{ value1: '1', value2: '5', value3: '8', value4: '2' }}
            description="Please enter your 4-digit PIN to unlock access."
          />
        </View>
        <View className="flex-row justify-end">
          <Text style={{ color: '#605790' }}>Forgot PIN?</Text>
        </View>
        <View className="flex-row justify-center">
          <Button mode="outlined" icon={'fingerprint'}>
            Use Biometric
          </Button>
        </View>
      </View>
      <View className={'flex-1 justify-center'} style={{ bottom: 40 }}>
        <Button mode="contained" onPress={() => navigation.navigate('RootTab')}>
          Continue
        </Button>
      </View>
    </ScreenContainer>
  );
}

export default EnterScreen;
