import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import NavLinks from "@/components/NavLinks";
import { useApi } from "@/context/ApiContext";
import React, { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";

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
    <View className="flex-1 justify-center  bg-[#020617]">
      <NavLinks className="absolute top-5" />
      <ScrollView>
        <View className="data">
         
          <FlatList
            className=""
            keyExtractor={(item) => item.mal_id.toString()}
            data={mangaAnime}
               numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 5,
                
                }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={ () => openModel(item)} className="w-[30%]">
               
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
        anime={selectedManga}
      />
    </View>
  );
};

export default manga;
