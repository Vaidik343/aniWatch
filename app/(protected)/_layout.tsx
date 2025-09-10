import { useAuth } from "@/context/AuthContext";
import { router, Slot } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

export default function ProtectedLayout() {
  const { user, authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace("/Login");
    }
  }, [authLoading, user]);

  if (authLoading) {
    return <Text className="text-white text-center">Checking auth...</Text>;
  }

  return <Slot />;
}
