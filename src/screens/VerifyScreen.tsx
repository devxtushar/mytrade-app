import React, { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import BrandBox from '../components/BrandBox';
import Header from '../components/Header';
import SetPin from '../components/SetPin';

function VerifyScreen({ navigation }: any) {
  const [showNo, setShowNo] = useState(true);
  return (
    <ScreenContainer>
      <BrandBox back={true} />
      <View className="flex-2 justify-end items-center" style={{ height: 150 }}>
        <Header
          title="Verify OTP"
          description="Secure your account via Mobile & Email"
        />
      </View>
      <View className="flex-1 flex-col gap-5 pt-10">
        <View>
          <SetPin
            iconName="email-outline"
            title="Email OTP"
            values={{ value1: '1', value2: '5', value3: '8', value4: '2' }}
            description="Enter the 4 digit OTP sent to a******v@mail.com"
          />
          <View className="flex-row justify-end mt-2">
            <Text style={{ color: '#605790' }}>Resend OTP (in 01.:52s)</Text>
          </View>
        </View>

        {showNo && (
          <View>
            <SetPin
              iconName="cellphone"
              title="Mobile OTP"
              description="Enter the 4 digit OTP sent to +9192******82"
              values={{ value1: '', value2: '', value3: '', value4: '' }}
            />
            <View className="flex-row justify-end mt-2">
              <Text style={{ color: '#605790' }}>Resend OTP</Text>
            </View>
          </View>
        )}
      </View>
      <View className="flex-1 justify-center" style={{ bottom: 40 }}>
        <Button mode="contained" onPress={() => setShowNo(false)}>
          Verify
        </Button>
      </View>
      {!showNo && (
        <View className="flex-1 justify-end items-center pb-5">
          <View style={{ zIndex: 9 }}>
            <Text className="text-small text-white">
              Can't access this email?
            </Text>
            <Text
              className="text-large text-center text-white"
              onPress={() => navigation.navigate('Signup')}
            >
              Update Email
            </Text>
          </View>
        </View>
      )}
    </ScreenContainer>
  );
}

export default VerifyScreen;
