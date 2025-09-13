import { useAuth } from "@/context/AuthContext";
import { addFavorite } from "@/utils/favoriteStorage";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { Button, Modal, Portal, Text } from "react-native-paper";

const DetailModal = ({ visible, onDismiss, anime }) => {
  const { user } = useAuth();
  const [isAdding, setIsAdding] = useState(false);

  if (!anime) return null;

  const handleSaveFavorite = async (item) => {
    if (!user) {
      Alert.alert("Error", "Please log in to add favorites");
      return;
    }

    setIsAdding(true);
    try {
      await addFavorite(user.id, item);
      Alert.alert("Success", "Added to favorites!");
    } catch (error) {
      console.error("Error adding favorite:", error);
      Alert.alert("Error", "Failed to add to favorites");
    } finally {
      setIsAdding(false);
    }
  };
  return (
    <Portal>
      {/* Dimmed backdrop */}
      {visible && <View style={styles.backdrop} />}

      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <ScrollView
          style={{ maxHeight: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={{ uri: anime.images?.webp?.image_url }}
            style={{ width: "100%", height: 350, borderRadius: 8 }}
          />

          <Text className="text-white text-lg font-bold mt-2" numberOfLines={2}>
            {anime.type}
          </Text>
          <Text className="text-white text-lg font-bold mt-2"  numberOfLines={2}>
            {anime.title_english}
          </Text>
            <Text className="text-white text-lg mt-2"  numberOfLines={1}>
            Status: {anime.status ?? "N/A" }
          </Text>
          <Text className="text-white text-sm mt-1">
            {anime.synopsis || "No synopsis available."}
          </Text>
          <Text className="text-white text-xs mt-2">
            Episodes: {anime.episodes ?? "N/A"}
          </Text>
        
          <Text className="text-white text-xs">
            Score: {anime.score ?? "N/A"}
          </Text>
 <Button mode="contained" buttonColor="red" textColor="white" onPress={() => handleSaveFavorite(anime)} style={{ marginTop: 10 }}>
   Add to Favorites
 </Button>
          <Button onPress={onDismiss} style={{ marginTop: 10 }}>
            Close
          </Button>
        </ScrollView>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 0,
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    maxHeight: "70%",
    marginHorizontal: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 1,
  },
});

export default DetailModal;
