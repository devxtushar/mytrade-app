import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';

type ModalTCProps = {
  openModal: boolean;
  closeModal: () => void;
};
function ModalTC({ openModal, closeModal }: ModalTCProps) {
  const screenHeight = Dimensions.get('window').height;

  return (
    <Modal
      visible={true}
      transparent
      animationType="slide"
      onRequestClose={closeModal}
    >
      <TouchableOpacity style={styles.modalOverlay}>
        <View style={[styles.modalContent, { height: screenHeight / 4 }]}>
          <Text className="mb-5 text-bold"> Terms & Conditions</Text>
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
      </TouchableOpacity>
    </Modal>
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

export default ModalTC;
