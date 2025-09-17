import { ROUTES } from "@/constants/routes";
import { router } from "expo-router";
import { SafeAreaView, Text, View, useWindowDimensions } from "react-native";

import { usePathname } from "expo-router";

export default function NavLinks() {
  const pathname = usePathname();
  const { height } = useWindowDimensions();

  const isActive = (route) => pathname === route;

  // Calculate responsive styles based on screen height
  const containerStyle = {
    paddingVertical: height * 0.02,
    paddingHorizontal: height * 0.02,
    gap: height * 0.023,
  };



  return (
    <SafeAreaView>
      <View
        className="sticky mt-3 top-4 self-center z-10 flex-row"
        style={containerStyle}
      >
        {[
          { label: "Home", route: ROUTES.HOME },
          { label: "Upcoming", route: ROUTES.UPCOMING },
          { label: "Movies", route: ROUTES.MOVIE },
          { label: "Manga", route: ROUTES.MANGA },
          { label: "Suggestions", route: ROUTES.SUGGESTION },
        ].map(({ label, route }) => (
          <Text
            key={route}
            className={`font-bold ${
              isActive(route) ? "text-light-500" : "text-white"
            }`}
     
            onPress={() => router.push(route)}
          >
            {label}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
}
