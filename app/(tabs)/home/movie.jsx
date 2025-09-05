import NavLinks from "@/components/NavLinks";
import React from 'react';
import { Text, View } from 'react-native';
const movie = () => {
  return (
       <View className="flex-1 justify-center  bg-[#020617]">
            <Text className='color-white flex-1 justify-center '>Movie</Text>
           <NavLinks />
          </View>
  )
}

export default movie