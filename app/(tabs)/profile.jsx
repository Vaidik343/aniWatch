// app/(tabs)/profile.jsx
import { useAuth } from "@/context/AuthContext";
import { Button, Image, Text, View } from "react-native";

const profile = () => {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 bg-[#0f0D23] justify-center items-center px-6">
      <Text className="text-white text-2xl font-bold mb-4">Your Profile</Text>

      {/* Optional avatar */}
      {user?.avatar && (
        <Image
          source={{ uri: user.avatar }}
          className="w-24 h-24 rounded-full mb-4"
        />
      )}

      {/* Display user info */}
      <View className="bg-white rounded-xl p-4 w-full max-w-md mb-6">
        <Text className="text-gray-700 text-lg mb-2">
          <Text className="font-semibold">Name:</Text> {user?.name || "N/A"}
        </Text>
        <Text className="text-gray-700 text-lg mb-2">
          <Text className="font-semibold">Email:</Text> {user?.email || "N/A"}
        </Text>
        {/* Add more fields if needed */}
      </View>

      {/* Logout button */}
      <Button title="Logout" onPress={logout} color="#EF4444" />
    </View>
  );
};

export default profile;
