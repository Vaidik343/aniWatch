// app/(tabs)/index.tsx

import NavLinks from "@/components/NavLinks";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

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
        <ScrollView> 
    <View className="flex-1 bg-[#020617]">
      
     <View className="z-10">
                 <NavLinks />
               </View>
   

   {loading ? (
    <View className="flex-1 justify-center items-center">
                  <Text className="text-red-600 text-center">Loading...</Text>
                </View>
   ) : (

    <SafeAreaView>
            <Text className="text-light-400">Top anime</Text>
        <View className="data mt-5 ">
         
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
                //  title={ item.title}
                 image={{uri: item.images?.jpg?.image_url}}
                 />
                </View>
              </TouchableOpacity>

            )}
          />


        </View>
    
    


       
    
        {/* Now streaming */}
        <Text className="text-light-400 sticky z-1">Now streaming</Text>
           <View className="data mt-5 ">
       
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
                //  title={item.title_english || item.title}
                 image={{uri: item.images?.jpg?.image_url}}
                 />
                </View>
              </TouchableOpacity>

            )}
          />


        </View>
        </SafeAreaView>
   )}
        


      <DetailModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        anime={slectedAnime}
      />
     

    </View>
     </ScrollView>
  );
};

export default Home;
