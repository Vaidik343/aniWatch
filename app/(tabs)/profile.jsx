// app/(tabs)/profile.jsx
import { useAuth } from "@/context/AuthContext";
import { Button, Image, Text, View } from "react-native";

const profile = () => {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 bg-[#0f0D23] justify-center items-center px-6">
      <Text className="text-white text-2xl font-bold mb-4">Your Profile</Text>

      {/* Profile Picture */}
      {user?.profilePic && (
        <Image
          source={{ uri: `http://192.168.29.31:3000${user.profilePic}` }}
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
        <Text className="text-gray-700 text-lg mb-2">
          <Text className="font-semibold">Gender:</Text> {user?.gender || "N/A"}
        </Text>
        <Text className="text-gray-700 text-lg mb-2">
          <Text className="font-semibold">Anime Type:</Text> {user?.anime_type || "N/A"}
        </Text>
      </View>

      {/* Logout button */}
      <Button title="Logout" onPress={logout} color="#EF4444" />
    </View>
  );
};

export default profile;
