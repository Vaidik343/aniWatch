import AnimatedScreenWrapper from "@/components/AnimatedScreenWrapper";
import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import NavLinks from "@/components/NavLinks";
import { useApi } from "@/context/ApiContext";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View
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

  return (
    <AnimatedScreenWrapper type="fade">
     <ScrollView>
    <View className="flex-1   bg-[#020617]">
        <View className="z-10">
            <NavLinks />
          </View>

    {loading ? (
         <View className="flex-1 justify-center items-center">
              <Text className="text-red-600 text-center">Loading...</Text>
            </View>
    ) : (


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
                //  title={item.title}
                 image={{uri: item.images?.jpg?.image_url}}
                 />

                    
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
     
 

    )}

     
      
            <DetailModal
              visible={modalVisible}
              onDismiss={() => setModalVisible(false)}
              anime={selectedMovie}
            />
    </View>
     </ScrollView>
     </AnimatedScreenWrapper>
  );
};

export default movie;
