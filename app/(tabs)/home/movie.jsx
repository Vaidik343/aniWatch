import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import NavLinks from "@/components/NavLinks";
import { useApi } from "@/context/ApiContext";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

const movie = () => {
  const { moviesAnime, loading } = useApi();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModel = (anime) => {
    setSelectedMovie(anime);
    setModalVisible(true);
  };

  if (loading)
    return <Text className="color-white text-center">Loading...</Text>;
  return (
    <View className="flex-1 justify-center  bg-[#020617]">
      <NavLinks className="absolute top-5" />
      <ScrollView>
        <SafeAreaView>
          <View className="movieData">
            <FlatList
              className=""
              keyExtractor={(item) => item.mal_id.toString()}
              data={moviesAnime}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 5,
                
                }}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => openModel(item)}  className="w-[30%]">
                
                    <AnimeCard
                 title={item.title}
                 image={{uri: item.images?.jpg?.image_url}}
                 />

                    
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
 
      
            <DetailModal
              visible={modalVisible}
              onDismiss={() => setModalVisible(false)}
              anime={selectedMovie}
            />
    </View>
  );
};

export default movie;
