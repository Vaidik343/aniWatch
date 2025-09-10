import { ROUTES } from "@/constants/routes";
import { router } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";


import { usePathname } from "expo-router";
// import * as Animatable from "react-native-animatable";

export default function NavLinks() {

  const pathname = usePathname();

  const isActive = (route) => pathname === route;
  return (
    <SafeAreaView>
     <View  className="sticky  top-5 self-center z-10 p-7 flex-row gap-5">
      {[
        { label: "Home", route: ROUTES.HOME},
        { label: "Upcomig", route: ROUTES.UPCOMING},
        { label: "Movies", route: ROUTES.MOVIE},
        { label: "Manga", route: ROUTES.MANGA},
        { label: "Suggestions", route: ROUTES.SUGGESTION},
      ].map( ({label, route}) =>(
        <Text
        key={route}
        className={`text-sm ${isActive(route) ? "text-yellow-400 font-bold" : "text-white font-bold"}`}
        onPress= { () => router.push(route)}
        >
          {label}

        </Text>
      ))}

    </View>
    </SafeAreaView>
  );
}
