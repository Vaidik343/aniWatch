import { useAuth } from '@/context/AuthContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';

const Login = () => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  useEffect(() => {
    if (user) {
      router.replace("/(tabs)");
    }
  }, [user]);

  return (
    <View className="flex-1 justify-center items-center bg-[#020617] px-4">
      <View className="w-full max-w-md bg-gray-900 rounded-lg p-6 shadow-md">
        <Text className="text-light-500 text-2xl font-bold mb-6 text-center">Login</Text>

        <View className="mb-4">
          <Text className="text-white text-sm font-semibold mb-2">Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            className="bg-gray-800 text-white rounded px-3 py-2"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-6">
          <Text className="text-white text-sm font-semibold mb-2">Password</Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            className="bg-gray-800 text-white rounded px-3 py-2"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          className="text-light-500 rounded py-2 mb-4"
        >
          <Button className="text-light-500 text-center font-semibold">Login</Button>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/Register")}>
          <Text className="text-blue-500 text-center">
            Don't have an account? Register here
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className=' flex-1 absolute justify-center top-12 left-8' onPress={ () => router.push("/")}>
        <Text className='text-light-400 text-xl '><MaterialIcons  className='absolute top-4'  name="keyboard-backspace" size={26}  /></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
