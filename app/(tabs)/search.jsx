import AnimatedScreenWrapper from "@/components/AnimatedScreenWrapper";
import { ListItem } from '@/components/ListItem';
import NavLinks from "@/components/NavLinks";
import { useApi } from '@/context/ApiContext';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useSharedValue } from 'react-native-reanimated';

export default function Search() {
  const [query, setQuery] = useState("");
  const { searchAnime, searchAnimeByQuery, searchLoading } = useApi();
  const viewableItems = useSharedValue([]);

  return (
    <AnimatedScreenWrapper type="Slide">
      <View className='flex-1 bg-[#020617]'>
        <NavLinks />
        <View className='p-4'>
          <TextInput
            placeholder='Search anime here...'
            placeholderTextColor='#ccc'
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={() => searchAnimeByQuery(query)}
            className='bg-gray-800 text-white px-4 py-2 rounded-xl mb-4'
          />

          {
            searchLoading ? (
              <Text className='text-white text-center'>Searching....</Text>
            ) : (
              <FlatList
                data={searchAnime}
                keyExtractor={(item) => item.mal_id.toString()}
                onViewableItemsChanged={({ viewableItems: vItems }) => {
                  viewableItems.value = vItems;
                }}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => router.push(`/anime/${item.mal_id}`)} >
                    <ListItem item={item} viewableItems={viewableItems}>
                      <Image
                        source={{ uri: item.images?.jpg?.image_url }}
                        style={{ width: 60, height: 90, borderRadius: 6 }}
                      />
                      <Text className="text-white ml-4 text-sm flex-1" numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                    </ListItem>
                  </TouchableOpacity>
                )}
              />
            )
          }
        </View>
      </View>
    </AnimatedScreenWrapper>
  );
}
