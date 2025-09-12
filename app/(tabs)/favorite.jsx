import { useAuth } from "@/context/AuthContext";
import { getFavorites } from "@/utils/favoriteStorage";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    <View className="flex-1 bg-gradient-to-b from-[#020617] to-[#0f0d23] p-4">
      <SafeAreaView>
        <View className="mb-6">
          <View className="flex-row items-center justify-center mb-4">
            <Ionicons name="heart" size={28} color="#ff6b6b" />
            <Text className="text-white text-2xl font-bold ml-2">Your Favorites</Text>
          </View>
        </View>

        {favorites.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Ionicons name="heart-outline" size={64} color="#ccc" />
            <Text className="text-gray-400 text-lg mt-4">No favorites yet</Text>
            <Text className="text-gray-500 text-sm">Add some anime to your favorites!</Text>
          </View>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity className="mb-4">
                <View className="flex-row items-center bg-gray-800 p-4 rounded-2xl border border-gray-600">
                  {item.image && (
                    <Image source={{ uri: item.image }} className="w-16 h-16 rounded-lg mr-4" />
                  )}
                  <View className="flex-1">
                    <Text className="text-white text-lg font-semibold">{item.title}</Text>
                    {item.type && (
                      <Text className="text-gray-400 text-sm">{item.type}</Text>
                    )}
                  </View>
                  <Ionicons name="heart" size={20} color="#ff6b6b" />
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Favorite;
