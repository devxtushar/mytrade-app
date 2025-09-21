import React, { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import Header from '../components/Header';
import BrandBox from '../components/BrandBox';
import ModalTC from '../components/ModalTC';
function SignUpScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <BrandBox back={false} />
      <View className="flex-1 justify-center items-center">
        <Header
          title="Sign Up"
          description="Create your account to get a started"
        />
      </View>
      <View className="flex-2 flex-col gap-5">
        <View>
          <TextInput
            mode="flat"
            value="user1234@gmail.com"
            placeholder="xyz@gmail.com"
            keyboardType="email-address"
            style={{
              backgroundColor: 'transparent',
              elevation: 0,
            }}
            left={<TextInput.Icon icon="email-outline" />}
          />
        </View>
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
        <View>
          <TextInput
            mode="flat"
            value=""
            placeholder="Referral Code"
            keyboardType="default"
            style={{
              backgroundColor: 'transparent',
              elevation: 0,
            }}
            left={<TextInput.Icon icon="share-outline" />}
          />
        </View>
        <View className="flex flex-row items-center">
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
        <Button mode="contained" onPress={() => navigation.navigate('Verify')}>
          Continue
        </Button>
      </View>
      <View className="flex-1 justify-end items-center pb-5">
        <View style={{ zIndex: 9 }}>
          <Text className="text-small text-white">
            Already have an account?
          </Text>
          <Text
            className="text-large text-center text-white"
            onPress={() => navigation.navigate('Signin')}
          >
            Login
          </Text>
        </View>
      </View>
      <ModalTC
        openModal={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </ScreenContainer>
  );
}

export default SignUpScreen;
