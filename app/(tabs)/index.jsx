// app/(tabs)/index.tsx

import NavLinks from "@/components/NavLinks";
import { FlatList, SafeAreaView, Text, View } from "react-native";

import AnimatedScreenWrapper from "@/components/AnimatedScreenWrapper";
import AnimeCard from "@/components/AnimeCard";
import DetailModal from "@/components/DetailModal";
import { useApi } from "@/context/ApiContext";
import { useCallback, useState } from "react";

const Home = () => {
  const { topAnime, nowAnime, loading } = useApi();
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
      console.log("Modal visible:", modalVisible);
  const openModel = useCallback((anime) => {
    setSelectedAnime(anime);
    setModalVisible(true);
  }, []);

  if (loading)
    return <Text className="color-white text-center">Loading...</Text>;

  return (
        <SafeAreaView className="flex-1 bg-[#020617]"> 
     <AnimatedScreenWrapper type="Slide">
    
      
     <View className="z-10">
                 <NavLinks />
               </View>
   

   {loading ? (
    <View className="flex-1 justify-center items-center">
                  <Text className="text-red-600 text-center">Loading...</Text>
                </View>
   ) : (
<>
   
     <View className="data  ">
            <Text className="text-light-400">Top anime</Text>
         
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}

           
            data={topAnime}
            keyExtractor={(item) => item.mal_id.toString()}
 contentContainerStyle={{
            paddingBottom: 20,
            paddingTop: 10,
          }}
            renderItem={({ item }) => (
           
                <View className="w-40 h-50  ">
                 <AnimeCard
               onPress={() => openModel(item)}
                 image={{uri: item.images?.jpg?.image_url}}
                 />
                </View>
           

            )}
          />


        </View>
    
    


    <View className="data  ">
        <Text className="text-light-400 sticky z-1">Now streaming</Text>
       
          <FlatList
            data={nowAnime}
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
              <AnimeCard
                onPress={() => openModel(item)}
                className="w-[30%]"
                image={{uri: item.images?.jpg?.image_url}}
              />

            )}
          />


        </View>
        </>
     
   )}
        


    
     

  
    
       <DetailModal
        visible={modalVisible}
        
        onDismiss={() => setModalVisible(false)}
        anime={selectedAnime}
      />
     </AnimatedScreenWrapper>


     </SafeAreaView>
  );
};

export default Home;
