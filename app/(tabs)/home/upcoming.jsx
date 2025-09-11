import NavLinks from "@/components/NavLinks";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import { useApi } from "@/context/ApiContext";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { ScrollView } from "react-native";

const upcoming = () => {

  const {upcomingAnime , loading } = useApi()
  const [selectedUp, setSelectedUp] = useState(null);
  const [modelVisible, setModalVisible] = useState(false);
 const { user} = useAuth();


  const openModal =  (anime) => {
    setSelectedUp(anime);
    setModalVisible(true);
  }

 
 return (
  <View className="flex-1 bg-[#020617]">
    <View className="z-10">
      <NavLinks />
    </View>

    {loading ? (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-600 text-center">Loading...</Text>
      </View>
    ) : (
      <ScrollView>
            <SafeAreaView>
        <View className="data mt-5">
          <FlatList
            data={upcomingAnime}
            keyExtractor={(item) => item.mal_id.toString()}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent:"center",
              gap: 10,
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => openModal(item)}
                className="w-[40%]"
              >
                <AnimeCard
                  image={item.images?.jpg?.image_url} 
                 

                  // title={item.title}
                />
              </TouchableOpacity>
            )}
          />
      
        </View>
        </SafeAreaView>
      </ScrollView>
    )}console.log("Image URL:", item.images?.jpg?.image_url);


    <DetailModal
      visible={modelVisible}
      onDismiss={() => setModalVisible(false)}
      anime={selectedUp}
    >
     

    </DetailModal>
  </View>
);

}

export default upcoming