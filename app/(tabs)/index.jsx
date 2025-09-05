// app/(tabs)/index.tsx
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center  bg-[#020617]">
      <View className="flex-1 justify-center mt-8 flex-row gap-3 ">
        <Text  className='color-white'    onPress={() => router.push("/")}>Home</Text>
        <Text className='color-white' onPress={() => router.push("/home/upcoming")}>Upcoming</Text>
        <Text className='color-white' onPress={() => router.push("/home/movie")}>Movies</Text>
        <Text className='color-white'  onPress={() => router.push("/home/manga")}>Manga</Text>
        <Text className='color-white'  onPress={() => router.push("/home/suggestion")}>Suggetions</Text>
      </View>
    </View>
  );
}
