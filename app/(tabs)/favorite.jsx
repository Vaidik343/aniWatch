import { useAuth } from "@/context/AuthContext";
import { getFavorites } from "@/utils/favoriteStorage";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import AnimeCard from "@/components/AnimeCard";

const Favorite = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user?.id) {
      const loadFavorites = async () => {
        const data = await getFavorites(user.id);
        setFavorites(data);
      };
      loadFavorites();
    }
  }, [user]);
 
  return (
    <View className="flex-1 bg-[#020617] p-4">
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
            keyExtractor={(item) => (item.mal_id || item.id).toString()}
            key="favorites-grid"
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "center",
              gap: 5,
            }}
            renderItem={({ item }) => (
              <View className="w-32 h-40 mb-4">
                <AnimeCard
                  title={item.title}
                  image={{ uri: item.images?.jpg?.image_url }}
                />
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export default Favorite;
