// components/NavLinks.tsx
import { ROUTES } from "@/constants/routes";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function NavLinks() {
  return (
 <View className="flex-1 justify-center mt-8 flex-row gap-3 ">
        <Text  className='color-white'    onPress={() => router.push(ROUTES.HOME)}>Home</Text>
        <Text className='color-white' onPress={() => router.push(ROUTES.UPCOMING)}>Upcoming</Text>
        <Text className='color-white' onPress={() => router.push(ROUTES.MOVIE)}>Movies</Text>
        <Text className='color-white'  onPress={() => router.push(ROUTES.MANGA)}>Manga</Text>
        <Text className='color-white'  onPress={() => router.push(ROUTES.SUGGESTION)}>Suggetions</Text>
      </View>
  );
}









