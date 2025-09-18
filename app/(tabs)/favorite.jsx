import AnimatedScreenWrapper from "@/components/AnimatedScreenWrapper";
import AnimeCard from "@/components/AnimeCard";
import { useAuth } from "@/context/AuthContext";
import { getFavorites, removeFavorite } from "@/utils/favoriteStorage";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

const Favorite = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (user?.id) {
      const loadFavorites = async () => {
        const data = await getFavorites(user.id);
        console.log("🚀 ~ loadFavorites ~ data:", data)
        setFavorites(data);
      };
      loadFavorites();
    }
  }, [user]);

  const filteredFavorites = favorites.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemoveFavorite = async (mal_id) => {
    if (user?.id) {
      const updated = await removeFavorite(user.id, mal_id);
      setFavorites(updated);
    }
  };

  return (
    <AnimatedScreenWrapper >
      <LinearGradient
        colors={['#ff6b6b', '#ff4757']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="py-4 px-6 rounded-b-3xl mb-6"
      >
        <View className="flex-row items-center justify-center">
          <Ionicons name="heart" size={28} color="#fff" />
          <Text className="text-white text-3xl font-extrabold ml-3 tracking-wide">Your Favorites</Text>
        </View>
      </LinearGradient>

      <SafeAreaView className="flex-1 px-4 bg-light-600  ">
        {favorites.length === 0 ? (
          <View className="flex-1 justify-center items-center">
            <Ionicons name="heart-outline" size={64} color="#ccc" />
            <Text className="text-gray-400 text-lg mt-4">No favorites yet</Text>
            <Text className="text-gray-500 text-sm mb-6">Add some anime to your favorites!</Text>
            <TouchableOpacity
              onPress={() => router.push('/search')}
              className="bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 rounded-full"
            >
              <Text className="text-white font-semibold text-base">Browse Anime</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View className="mb-4">
              <TextInput
                placeholder="Search favorites..."
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="bg-gray-800 text-white px-4 py-3 rounded-full"
                style={{ fontSize: 16 }}
              />
            </View>
            <FlatList
              data={filteredFavorites}
              keyExtractor={(item) => (item.mal_id || item.id).toString()}
              key="favorites-grid"
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "center",
                gap: 10,
              }}
              contentContainerStyle={{
                paddingBottom: 20,
              }}
              renderItem={({ item }) => (
                <View className="w-28 h-44 mb-6 shadow-lg rounded-lg overflow-hidden">
                  <AnimeCard
                    title={item.title}
                    image={{ uri: item.images?.jpg?.image_url }}
                    onRemove={() => handleRemoveFavorite(item.mal_id)}
                    onPress={() => {}}
                  />
                </View>
              )}
            />
          </>
        )}
      </SafeAreaView>
    </AnimatedScreenWrapper>
  );
};

export default Favorite;
