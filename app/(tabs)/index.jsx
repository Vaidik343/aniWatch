// app/(tabs)/index.tsx

import NavLinks from "@/components/NavLinks";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center  bg-[#020617]">
      <Text className='color-white flex-1 justify-center '>Moveis app</Text>
     <NavLinks />
    </View>
  );
}
