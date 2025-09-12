import { ListItem } from '@/components/ListItem';
import { useApi } from '@/context/ApiContext';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { useSharedValue } from 'react-native-reanimated';

export default function Search() {
  const [query, setQuery] = useState("");
  const { searchAnime, searchAnimeByQuery, searchLoading } = useApi();
const viewableItems = useSharedValue([]);

  


  return (
    <View className='flex-1 mt-5 sticky top-5 bg-[#020617] p-1'>
      <SafeAreaView>
        <TextInput
          placeholder='Search anime here...'
          placeholderTextColor='#ccc'
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => searchAnimeByQuery(query)}
          className='bh-grey-800 text-white px-4 py-2 rounded-xl mb-4'
        />

        {
          searchLoading ? (
            <Text className='text-white text-center'>Searching....</Text>
          ) : (
            <SafeAreaView>
              <FlatList
                data={searchAnime}
                keyExtractor={(item) => item.mal_id.toString()}
              onViewableItemsChanged={({ viewableItems: vItems }) => {
  viewableItems.value = vItems;
}}

                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => router.push(`/anime/${item.mal_id}`)} >
                    
                    <ListItem item={item}
                     viewableItems={viewableItems}>
                      <Image
                        source={{ uri: item.images?.jpg?.image_url }}
                        style={{ width: 60, height: 90, borderRadius: 6 }}
                      />
                      <Text className="text-white ml-4 text-sm">{item.title}</Text>
                    </ListItem>
                  </TouchableOpacity>
                )}
              />
            </SafeAreaView>
          )
        }

      </SafeAreaView>
    </View>
  );
}
