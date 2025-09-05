import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabLayout = () => {

    return(
        <Tabs
           
        >

            <Tabs.Screen 
             name="index"
             options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused}) =>(
                <Ionicons name={focused? 'home-sharp' : 'home-outline'} color={color} size={24}  />
                
                ),
             }}
            />

            <Tabs.Screen 
             name="search"
             options={{
                title: 'Search',
                                headerShown: false,
                tabBarIcon: ({ color, focused}) =>(
                <Ionicons name={focused? 'search-sharp' : 'search-outline'} color={color} size={24}  />

                ),
             }}
            />

            <Tabs.Screen 
             name="favorite"
             options={{
                title: 'Favorite',
                                headerShown: false,
                tabBarIcon: ({ color, focused}) =>(
                <Ionicons name={focused? 'bookmark-sharp' : 'bookmark-outline'} color={color} size={24}  />

                ),
             }}
            />

        </Tabs>
    )

}

export default TabLayout;
