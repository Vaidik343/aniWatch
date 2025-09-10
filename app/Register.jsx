import { useAuth } from '@/context/AuthContext';
import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Register = () => {
  const { register, user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await register(name, email, password);
    } catch (error) {
      console.log("Registration error:", error);
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
        <Text className="text-yellow-500 text-2xl font-bold mb-6 text-center">Register</Text>

        <View className="mb-4">
          <Text className="text-white text-sm font-semibold mb-2">Name</Text>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
            className="bg-gray-800 text-white rounded px-3 py-2"
            autoCapitalize="words"
          />
        </View>

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
          onPress={handleRegister}
          className="bg-yellow-500 rounded py-2 mb-4"
        >
          <Text className="text-black text-center font-semibold">Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/Login")}>
          <Text className="text-blue-500 text-center">
            Already have an account? Login here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
