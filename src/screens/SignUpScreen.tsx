import React, { useState } from 'react';
import ScreenContainer from '../components/ScreenContainer';
import { View, Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import Header from '../components/Header';
import { GlobalStyle } from '../styling/GlobalStyle';
function SignUpScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <View className="flex-1">
        <Header
          title="Sign Up"
          description="Create your account to get a started"
        />
      </View>
      <View className="flex-1 flex-col gap-5">
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
      <View
        className="flex-1"
        style={[GlobalStyle.content, { zIndex: 9, top: 70 }]}
      >
        <Text className="text-small text-white">Already have an account?</Text>
        <Text className="text-large text-center text-white">Sign Up</Text>
      </View>
    </ScreenContainer>
  );
}

export default SignUpScreen;
