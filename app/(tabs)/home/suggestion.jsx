import NavLinks from "@/components/NavLinks";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import { useApi } from "@/context/ApiContext";
import { useState } from "react";
import { ScrollView } from "react-native";

const suggestion = () => {
  const { randomAnime, loading } = useApi();

  const [selectedSug, setSelectedSug] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (anime) => { 
    setSelectedSug(anime);
    setModalVisible(true);
  };
  if (loading)
    return <Text className="color-white text-center">Loading...</Text>;

  return (
    <View className="flex-1 justify-center  bg-[#020617]">
      <NavLinks className="absolute top-5" />
      <ScrollView>
        <View className="data">
          <FlatList
            className=""
            keyExtractor={(item) => item.mal_id.toString()}
            data={randomAnime}
              numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 5,
                
                }}
            renderItem={({ item }) => (
              <TouchableOpacity  className="w-[30%]" onPress={() => openModal(item)}>
              
                    <AnimeCard
                 title={item.title}
                 image={{uri: item.images?.jpg?.image_url}}
                 />
   
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>

        <DetailModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        anime={selectedSug}
      />
    </View>
  );
};

export default suggestion;
