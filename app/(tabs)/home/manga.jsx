import AnimatedScreenWrapper from "@/components/AnimatedScreenWrapper";
import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import NavLinks from "@/components/NavLinks";
import { useApi } from "@/context/ApiContext";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const manga = () => {
  const { mangaAnime, loading } = useApi();
  const [selectedManga, setSelectedManga] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModel = (anime) => {
    setSelectedManga(anime);
    setModalVisible(true);
  };

  if (loading)
    return <Text className="color-white text-center">Loading...</Text>;

  return (
    <SafeAreaView className="flex-1 bg-[#020617]">
    <AnimatedScreenWrapper type="Slide">
 <View className="z-10">
        <NavLinks />
      </View>
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-red-600 text-center">Loading...</Text>
          </View>
        ) : (
          <FlatList
            data={mangaAnime}
            keyExtractor={(item) => item.mal_id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "center",
              gap: 5,
            }}
            contentContainerStyle={{
              paddingBottom: 20,
              paddingTop: 10,
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => openModel(item)}
                className="w-[30%]"
              >
                <AnimeCard
                  image={{ uri: item.images?.jpg?.image_url }}
                />
              </TouchableOpacity>
            )}
          />
        )}
        <DetailModal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          anime={selectedManga}
        />
     
    </AnimatedScreenWrapper>
    </SafeAreaView>
  );
};

export default manga;
