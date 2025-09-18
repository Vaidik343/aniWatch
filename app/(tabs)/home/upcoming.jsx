import NavLinks from "@/components/NavLinks";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import AnimatedScreenWrapper from "@/components/AnimatedScreenWrapper";
import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import { useApi } from "@/context/ApiContext";
import { useState } from "react";
 
const upcoming = () => {

  const {upcomingAnime , loading } = useApi()
  const [selectedUp, setSelectedUp] = useState(null);
  const [modelVisible, setModalVisible] = useState(false);



  const openModal =  (anime) => {
    setSelectedUp(anime);
    setModalVisible(true);
  }

 
 return (
  
  <SafeAreaView className="flex-1 bg-[#020617]">
    <AnimatedScreenWrapper type="Slide">
    <View className="z-10">
      <NavLinks />
    </View>

    {loading ? (
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-center">Loading...</Text>
      </View>
    ) : (
 
          
     
          <FlatList
            data={upcomingAnime}
            keyExtractor={(item) => item.mal_id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent:"center",
              gap: 5,
            }}
             contentContainerStyle={{
            paddingBottom: 20,
            paddingTop: 10,
          }}
            renderItem={({ item }) => (
           <AnimeCard
                onPress={() => openModal(item)}
                className="w-[30%]"
                image={{uri: item.images?.jpg?.image_url}}
              />
            )}
          />
      
        
        
 
    )}


    <DetailModal
      visible={modelVisible}
      onDismiss={() => setModalVisible(false)}
      anime={selectedUp}
    />
     


    </AnimatedScreenWrapper>
  </SafeAreaView>
);

}

export default upcoming