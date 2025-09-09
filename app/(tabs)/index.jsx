// app/(tabs)/index.tsx

import NavLinks from "@/components/NavLinks";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import { useApi } from "@/context/ApiContext";
import { useState } from "react";
import { ScrollView } from "react-native";

const Home = () => {
  const { topAnime, nowAnime, loading } = useApi();
  const [slectedAnime, setSelectedAnime] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModel = (anime) => {
    setSelectedAnime(anime);
    setModalVisible(true);
  };

  if (loading)
    return <Text className="color-white text-center">Loading...</Text>;

  return (
    <View className="flex-1 justify-center  bg-[#020617]">
      
      <NavLinks  />
    
      <ScrollView>
            <Text className="text-yellow-500">Top anime</Text>
        <View className="data mt-5 ">
          {/* Top */}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
      
            className=""
            keyExtractor={(item) => item.mal_id.toString()}
            data={topAnime}
            
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => openModel(item)}>
                <View className="w-40 h-50  ">
                 <AnimeCard
                 title={item.title}
                 image={{uri: item.images?.jpg?.image_url}}
                 />
                </View>
              </TouchableOpacity>
              
            )}
          />

          
        </View>
      </ScrollView>
{/* now */}

          {/* <FlatList /> */}
      <ScrollView>
        <Text className="text-yellow-500">Now streaming</Text>
           <View className="data mt-5 ">
          {/* Top */}
          <FlatList
          
      
            className=""
            keyExtractor={(item) => item.mal_id.toString()}
            data={nowAnime}
                  numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "center",
                  gap: 5,
                
                }}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => openModel(item)}>
                <View className="w-40 h-50  ">
                 <AnimeCard
                 title={item.title}
                 image={{uri: item.images?.jpg?.image_url}}
                 />
                </View>
              </TouchableOpacity>
              
            )}
          />

          
        </View>
      </ScrollView>

      <DetailModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        anime={slectedAnime}
      />
    </View>
  );
};

export default Home;
