import NavLinks from "@/components/NavLinks";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import { useApi } from "@/context/ApiContext";
import { useState } from "react";
import { ScrollView } from "react-native";

const upcoming = () => {

  const {upcomingAnime , loading } = useApi()
  const [selectedUp, setSelectedUp] = useState(null);
  const [modelVisible, setModalVisible] = useState(false);

  const openModal =  (anime) => {
    setSelectedUp(anime);
    setModalVisible(true);
  }

   if (loading) return <Text className="color-white text-center">Loading...</Text>;

  return (
         <View className="flex-1 justify-center  bg-[#020617]">
         <View className="z-10">
    <NavLinks />
  </View>
            <ScrollView>
      
      
            <View className="data   mt-5 ">
              
                {/* Top */}
           <FlatList 
        
           className=""
           keyExtractor={(item) => item.mal_id.toString()}
           data={upcomingAnime }
             numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 5,
                
                }}
           renderItem={({ item }) => (
            <TouchableOpacity onPress={ () => openModal(item)} className="w-[30%]">
     
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
        visible={modelVisible}
        onDismiss={() => setModalVisible(false)}
        anime={selectedUp}
      />
          </View>
  )
}

export default upcoming