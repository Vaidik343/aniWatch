// app/(tabs)/index.tsx

import NavLinks from "@/components/NavLinks";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import DetailModal from "@/components/DetailModal";
import { useApi } from "@/context/ApiContext";
import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView } from "react-native";

const Home = () => {
  const { topAnime, loading } = useApi();
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
      <NavLinks className="absolute top-5" />
      <ScrollView>
        <View className="data mt-7">
          {/* Top */}
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            className="mb-4 mt-3"
            keyExtractor={(item) => item.mal_id.toString()}
            data={topAnime}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => openModel(item)}>
                <View className="w-40 h-60 bg-gray-800 rounded-md p-2">
                  <Image
                    source={{ uri: item.images?.jpg?.image_url }}
                    style={{ width: "100%", height: 120, borderRadius: 6 }}
                  />
                  <Text className="color-white text-sm">{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          {/* now */}

          {/* <FlatList /> */}
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
