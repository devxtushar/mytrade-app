import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import ScreenContainer from '../components/ScreenContainer';
import Header from '../components/Header';

function SignInScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <View className="flex-1">
        <Header title="Sign In" description="Access Your Account Securely" />
        <View className="flex-1 flex-col gap-5">
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
      </View>
    </ScreenContainer>
  );
}

export default SignInScreen;
