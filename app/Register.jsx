import { useAuth } from '@/context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';


const Register = () => {
  const { register, user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("")
  const [selectedGender, setSelectedGender] = useState("")
  const [type, setType] = useState("");


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync( {
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    console.log("🚀 ~ pickImage ~ result:", result)

    if(!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };
  const handleRegister = async () => {
    try {
      await register(name, email, password, profilePic, selectedGender, type);
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
        <Text className="text-light-500 text-2xl font-bold mb-6 text-center">Register</Text>

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

        <View className="mb-6">
          <Text className="text-white text-sm font-semibold mb-2">Profile</Text>
         <View style={styles.container}>
          <Button title='Pick an image' onPress={pickImage}/>
          {profilePic && <Image source={ {uri: profilePic}} style={styles.profilePic}  />}
         </View>
        </View>
        <View className="mb-6">
          <Text className="text-white text-sm font-semibold mb-2">Gender</Text>
          <RadioButton.Group onValueChange={setSelectedGender} value={selectedGender}>
            <View className="flex-row items-center mb-2">
              <RadioButton value="male" />
              <Text className="text-white ml-2">Male</Text>
            </View>
            <View className="flex-row items-center">
              <RadioButton value="female" />
              <Text className="text-white ml-2">Female</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View className="mb-6">
          <Text className="text-white text-sm font-semibold mb-2">Anime Type</Text>
          <View className="bg-gray-800 rounded">
            <Picker
              selectedValue={type}
              onValueChange={(itemValue) => setType(itemValue)}
              style={{ color: 'white' }}
            >
              <Picker.Item label="Select Anime Type" value="" />
              <Picker.Item label="Comedy" value="comedy" />
              <Picker.Item label="Drama" value="drama" />
              <Picker.Item label="Action" value="action" />
              <Picker.Item label="Thriller" value="thriller" />
              <Picker.Item label="Horror" value="horror" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleRegister}
          className="bg-light-500 rounded py-2 mb-4"
        >
          <Text className="text-white text-center font-semibold">Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/Login")}>
          <Text className="text-blue-500 text-center">
            Already have an account? Login here
          </Text>
        </TouchableOpacity>
            <TouchableOpacity className=' flex-1 absolute justify-center top-12 left-8' onPress={ () => router.push("/")}>
                <Text className='text-light-400 text-xl '><MaterialIcons  className='absolute top-4'  name="keyboard-backspace" size={26}  /></Text>
              </TouchableOpacity>
      </View>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
});
export default Register;
