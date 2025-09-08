import NavLinks from "@/components/NavLinks";
import React from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';

import { useApi } from "@/context/ApiContext";
import { Image } from "expo-image";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";


const movie = () => {

  const {moviesAnime, loading } = useApi()


  if(loading) return <Text className="color-white text-center">Loading...</Text>
  return (
  <View className="flex-1 justify-center  bg-[#020617]">
           
                 <NavLinks className="absolute top-5"/>
                <ScrollView>
                <SafeAreaView>
                 <View className="movieData">
                  <FlatList   
                  className="mb-2 mt-1"
                   keyExtractor={(item) => item.mal_id.toString()}
                   data={moviesAnime}
                   renderItem={({item}) => (
                    <View className="w-40 h-40 bg-gray-800 rounded-md p-2">
                      <Image  
                        source={{ uri: item.images?.jpg?.image_url }}
                      style={{ width: '100%', height: 120, borderRadius: 6 }}
                      />

 <Text className="color-white text-sm">{item.title}</Text>
                    </View>
                   )}
                  
                  
                  />

                
                 </View>
                 </SafeAreaView>
                 </ScrollView>
          </View>
  )
}

export default movie