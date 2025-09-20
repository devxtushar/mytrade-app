import React, { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import Header from '../components/Header';

function SignUpScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <Header
        title="Sign Up"
        description="Create your account to get a started"
      />
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
            <Text onPress={() => setModalVisible(true)}>
              Terms and Conditions
            </Text>
          </Text>
        </View>
        <View>
          <Button mode="contained" style={{ marginTop: 10 }}>
            Continue
          </Button>
        </View>
      </View>
    </ScreenContainer>
  );
}

export default SignUpScreen;
