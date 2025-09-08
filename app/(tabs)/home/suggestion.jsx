import NavLinks from "@/components/NavLinks";
import { FlatList, Text, View } from "react-native";

import { useApi } from "@/context/ApiContext";
import { Image } from "expo-image";
import { ScrollView } from "react-native";




const suggestion = () => {

    const {randomAnime , loading } = useApi()
  if (loading) return <Text className="color-white text-center">Loading...</Text>;

  return (
         <View className="flex-1 justify-center  bg-[#020617]">
            <NavLinks className="absolute top-5"/>
            <ScrollView>
      
      
            <View className="data">
            
           <FlatList 
        
           className="mb-4 mt-3"
           keyExtractor={(item) => item.mal_id.toString()}
           data={randomAnime }
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

export default suggestion