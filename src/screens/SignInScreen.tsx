import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import ScreenContainer from '../components/ScreenContainer';
import Header from '../components/Header';
import BrandBox from '../components/BrandBox';

function SignInScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <BrandBox back={false} />
      <View className="flex-1 justify-center items-center">
        <Header title="Sign In" description="Access Your Account Securely" />
      </View>
      <View className="flex-1 flex-col gap-5">
        <View className="gap-5 pt-10">
          <View>
            <TextInput
              mode="flat"
              value="9898451285"
              placeholder="9898451285"
              keyboardType="phone-pad"
              style={{
                backgroundColor: 'transparent',
                elevation: 0,
              }}
              left={<TextInput.Icon icon="cellphone" />}
            />
          </View>

          <View className="flex-row items-center">
            <Checkbox status={'checked'} />
            <Text>
              I agree to{' '}
              <Text
                onPress={() => setModalVisible(true)}
                style={{ color: '#605790' }}
              >
                Terms and Conditions.
              </Text>
            </Text>
          </View>
        </View>
        <Button
          mode="contained"
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Verify')}
        >
          Continue
        </Button>
      </View>
      <View className="flex-1 justify-end items-center pb-5">
        <View style={{ zIndex: 9 }}>
          <Text className="text-small text-white">Don't have an account?</Text>
          <Text
            className="text-large text-center text-white"
            onPress={() => navigation.navigate('Signup')}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

export default SignInScreen;
