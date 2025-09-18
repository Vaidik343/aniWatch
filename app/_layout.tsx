import { ApiProvider } from "@/context/ApiContext";
import { AuthProvider } from "@/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import "./globals.css";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await AsyncStorage.getItem("onboardingCompleted");
      if (completed === "true") {
        router.replace("/(tabs)");
      } else {
        router.replace("/OnboardingScreen");
      }
    };
    checkOnboarding();
  }, []);

  return (
    <AuthProvider>
      <ApiProvider>
        <PaperProvider>
          <StatusBar hidden={true} />
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
