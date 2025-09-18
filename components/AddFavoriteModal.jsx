// components/AddFavoriteModal.jsx
import React from 'react';
import { Button, Modal, Text, View } from 'react-native';

const AddFavoriteModal = ({ visible, onClose, onSave, item }) => {
  const handleSave = () => {
    onSave(item);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white p-6 rounded-xl w-4/5">
          <Text className="text-lg font-bold mb-4">Add to Favorites</Text>
        <Text className="text-base mb-6 text-gray">
  {item
    ? `Do you want to add ${item.title} to your favorites?`
    : "Loading item..."}
</Text>

          <Button title="Confirm" onPress={handleSave} />
          <Button title="Cancel" onPress={onClose} color="white"  />
        </View>
      </View>
    </Modal>
  );
};

export default AddFavoriteModal;
