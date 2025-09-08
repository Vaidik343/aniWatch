import NavLinks from "@/components/NavLinks";
import { useApi } from "@/context/ApiContext";
import { Image } from "expo-image";
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

const manga = () => {


    const {mangaAnime , loading } = useApi()
   if (loading) return <Text className="color-white text-center">Loading...</Text>;

  return (
     <View className="flex-1 justify-center  bg-[#020617]">
                 <NavLinks className="absolute top-5"/>
                 <ScrollView>
           
           
                 <View className="data">
                   
                     {/* Top */}
                <FlatList 
             
                className="mb-4 mt-3"
                keyExtractor={(item) => item.mal_id.toString()}
                data={mangaAnime }
                renderItem={({ item }) => (
             <View className="w-40 h-60 bg-gray-800 rounded-md p-2">
                  <Image
                           source={{ uri: item.images?.jpg?.image_url }}
                           style={{ width: '100%', height: 120, borderRadius: 6 }}
                         />
               <Text className="color-white text-sm">{item.title}</Text>
             </View>
           )}
           
                />
           
     
                 </View>
                 </ScrollView>
               </View>
  )
}

export default manga