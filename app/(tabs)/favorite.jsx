import { useAuth } from "@/context/AuthContext";
import { getFavorites } from "@/utils/favoriteStorage";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

const Favorite = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const data = await getFavorites(user.id);
      setFavorites(data);
    };
    loadFavorites();
  }, []);

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-4 text-white">Your Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="mb-4 flex-row items-center">
            {item.image && (
            <Image source={{ uri: item.image }} className="w-16 h-16 rounded mr-4" />

            )}
            <View>
              <Text className="text-white text-lg">{item.title}</Text>
              {item.type && (
                <Text className="text-gray-400 text-sm">{item.type}</Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Favorite;
