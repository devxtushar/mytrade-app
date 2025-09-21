import React from 'react';
import { Modal, View, Text, StyleSheet, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { GlobalStyle } from '../styling/GlobalStyle';

type ModalTCProps = {
  openModal: boolean;
  closeModal: () => void;
};

export default function ModalTC({ openModal, closeModal }: ModalTCProps) {
  const screenHeight = Dimensions.get('window').height;

  return (
    <Modal
      visible={openModal}
      transparent
      animationType="slide"
      onRequestClose={closeModal}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContent, { height: screenHeight / 3 }]}>
          <View style={GlobalStyle.content}>
            <IconButton icon="minus" size={50} onPress={() => closeModal()} />
          </View>
          <Text style={styles.title}>Terms & Conditions</Text>
          <Text style={styles.modalText}>
            I hereby declare that the particulars given by me above are true and
            correct to best of my knowledge as on the date of making this
            application. I agree and undertake to intimate “Company Name” any
            change(s) in the details mentioned by me in the form. I further
            agree that if any of the above information given by me is found to
            be false or misrepresenting, I may be held liable for it and will
            render my account liable for termination and necessary action by
            “Company Name”.
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
