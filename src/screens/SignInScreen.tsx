import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { GlobalStyle } from '../styling/GlobalStyle';

function SignInScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const screenHeight = Dimensions.get('window').height;
  return (
    <View style={GlobalStyle.container}>
      <Image
        source={require('../assests/Top.png')}
        style={GlobalStyle.topWave}
        resizeMode="stretch"
      />

      <View style={GlobalStyle.content}>
        <View>
          <Text className="text-xl text-center">Sign Up</Text>
          <Text className="capitalize mt-2 text-small">
            Create your account to get a started
          </Text>
        </View>
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
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPressOut={() => setModalVisible(false)}
        >
          <View style={[styles.modalContent, { height: screenHeight / 4 }]}>
            <Text style={styles.modalText}>
              I hereby declare that the particulars given by me above are true
              and correct to best of my knowledge as on the date of making this
              application. I agree and undertake to intimate “Company Name” any
              change(s) in the details mentioned by me in the form. I further
              agree that if any of the above information given by me is found to
              be false or misrepresenting, I may be held liable for it and will
              render my account liable for termination and necessary action by
              “Company Name”.
            </Text>
          </View>
        </Pressable>
      </Modal>
      <Image
        source={require('../assests/Bottom.png')}
        style={GlobalStyle.bottomWave}
        resizeMode="stretch"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 12,
    padding: 20,
  },
  modalText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default SignInScreen;
