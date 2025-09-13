import { useAuth } from "@/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { router, Tabs, useSegments } from "expo-router";
import { useEffect } from "react";
import { Text, useWindowDimensions } from "react-native";

const TabLayout = () => {
  const { user, authLoading } = useAuth();
  const segments = useSegments();
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const currentTab = segments[1]; 
    const protectedTabs = [ "favorite", "movie", "upcoming", "manga", "suggestions"];


    if (!authLoading && !user && protectedTabs.includes(currentTab)) {
      router.replace("/Login");
    }
  }, [authLoading, user, segments]);

  if (authLoading) {
    return <Text className="text-white text-center">Checking auth...</Text>;
  }
  return (
  
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        
        tabBarItemStyle : {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        },

        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 30,

          height: 60,
          width: width - 40,
          position: 'absolute',
          overflow: 'hidden',
                  borderWidth: 1,
        borderColor:'0f0d23'

        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline" }
              color="#B69DE3"
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search-sharp" : "search-outline"}
            color="#B69DE3"
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "bookmark-sharp" : "bookmark-outline"}
        color="#B69DE3"
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-sharp" : "person-outline"}
          color="#B69DE3"
              size={24}
            />
          ),
        }}
      />
 <Tabs.Screen
        name="home"
        options={{
          href: null, // <-- this prevents it from being a tab
        }}
      />

    </Tabs>
 
  );
};

export default TabLayout;
