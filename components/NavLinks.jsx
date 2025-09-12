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
  paddingVertical : height * 0.02,
  paddingHorizontal: height * 0.03,
  gap: height * 0.01,
 };

 const textStyle = {
  fontSize: height * 0.02,
 };

  return (
    <SafeAreaView>
      <View
        className="sticky top-1 self-center z-10 flex-row"
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
            style={textStyle}
            onPress={() => router.push(route)}
          >
            {label}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
}
