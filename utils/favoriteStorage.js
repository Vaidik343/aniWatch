import AsyncStorage from '@react-native-async-storage/async-storage';

const getFavorites = async (userId) => {
    const raw = await AsyncStorage.getItem(`favorites-${userId}`);
    return raw ? JSON.parse(raw) : [];
};

const addFavorite = async (userId, item) => {
  const current = await getFavorites(userId);
  const exists = current.some(fav => fav.mal_id === item.mal_id);
  if (exists) return current;

  const update = [...current, { ...item, savedAt: Date.now() }];
  await AsyncStorage.setItem(`favorites-${userId}`, JSON.stringify(update));
  return update;
};

const removeFavorite = async (userId, mal_id) => {
    const current = await getFavorites(userId);
    const updated  = current.filter( (item) => item.mal_id !== mal_id);
    await AsyncStorage.setItem(`favorites-${userId}`, JSON.stringify(updated ))
    return updated;
}


export { addFavorite, getFavorites, removeFavorite };

 