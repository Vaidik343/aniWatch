import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Movie from '../assets/animation/movie.json';
import Popcorn from '../assets/animation/Popcorn.json';

const { width, height } = Dimensions.get("window");


const OnboardingScreen = () => {
  const router = useRouter();

  const handleDone = async () => {
    await AsyncStorage.setItem("onboardingCompleted", "true");
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Onboarding
        containerStyle={{ paddingHorizontal: 15 }}
        bottomBarHeight={120}
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
          {
            backgroundColor: "#7171ff",
             image: (
               <View >
                <LottieView
                  source={Movie}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: "Welcome!!",
            subtitle: "browser you favorites anime",
          },
          {
            backgroundColor: "#7171ff",
             image: (
               <View >
                <LottieView
                  source={Popcorn}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
              title: "Your One Stop solution!!",
            subtitle: "Got Best Anime Recommendations",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  lottie: {
    width: width * 0.7,
    height: width,
  },

});
