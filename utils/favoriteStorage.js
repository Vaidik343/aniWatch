import AsyncStore from '@react-native-async-storage/async-storage';

const getFavorites = async (userId) => {
    const raw = await AsyncStore.getItem(`favorites-${userId}`);
    return raw ? JSON.parse(raw) : [];
};

const addFavorite = async (userId) => {
    const current = await getFavorites(userId);
    const update = [...current, {...item, savedAt: Date.now() }];
    await AsyncStore.setItem(`favorites-${userId}`, JSON.stringify(userId));
    return update;

}
const removeFavorite = async (userId, id) => {
    const current = await getFavorites(userId);
    const updated  = current.filter( (item) => item.id !== id);
    await AsyncStore.setItem(`favorites-${userId}`, JSON.stringify(updated ))
    return updated; 
}


export { addFavorite, getFavorites, removeFavorite };
