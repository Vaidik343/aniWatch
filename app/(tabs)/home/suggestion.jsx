import NavLinks from "@/components/NavLinks";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";

import AnimatedScreenWrapper from "@/components/AnimatedScreenWrapper";
import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import { useApi } from "@/context/ApiContext";
import { useState } from "react";

const suggestion = () => {
  const { randomAnime, loading } = useApi();

  const [selectedSug, setSelectedSug] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (anime) => { 
    setSelectedSug(anime);
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 justify-center  bg-[#020617]">
      <AnimatedScreenWrapper type="Slide">
   <View className="z-10">
        <NavLinks />
      </View>


      { loading ? (
           <View className="flex-1 justify-center items-center">
                  <Text className="text-red-600 text-center">Loading...</Text>
                </View>
      ):(

  
          <FlatList
           
          data={randomAnime}
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
              <TouchableOpacity  className="w-[30%]" onPress={() => openModal(item)}>
              
                    <AnimeCard
                 title={item.title}
                 image={{uri: item.images?.jpg?.image_url}}
                 />
   
              </TouchableOpacity>
            )}
          />

      )}
   
        <DetailModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        anime={selectedSug}
      />
      </AnimatedScreenWrapper>
    </SafeAreaView>
  );
};

export default suggestion;
