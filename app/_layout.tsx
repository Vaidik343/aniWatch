import { ApiProvider } from "@/context/ApiContext";
import { AuthProvider } from "@/context/AuthContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import "./globals.css";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const checkOnboarding = async () => {
      // Temporarily force onboarding for testing
      router.replace("/OnboardingScreen");
      // const completed = await AsyncStorage.getItem("onboardingCompleted");
      // if (completed === "true") {
      //   router.replace("/(tabs)");
      // } else {
      //   router.replace("/OnboardingScreen");
      // }
    };
    checkOnboarding();
  }, []);

  return (
    <AuthProvider>
      <ApiProvider>
        <PaperProvider>
          <StatusBar hidden={true}  />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="Login" />
            <Stack.Screen name="Register" />
            <Stack.Screen name="OnboardingScreen" />
            <Stack.Screen name="(protected)" />
          </Stack>
        </PaperProvider>
      </ApiProvider>
    </AuthProvider>
  );
}
