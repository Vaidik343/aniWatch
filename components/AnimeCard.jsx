import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRef, useState } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";

const AnimeCard = ({ title, image, onRemove, onPress, className = "w-full" }) => {
  const [showRemove, setShowRemove] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleLongPress = () => {
    setShowRemove(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    }
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowRemove(false));
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      onLongPress={handleLongPress}
      className={`rounded-lg overflow-hidden p-1 ${className}`}
    >
      <Image
        source={image}
        style={{ width: "100%", height: 200, borderRadius: 5, marginBottom: 8 }}
        contentFit="cover"
      />
      <Text className="text-white text-sm font-semibold text-justify">{title}</Text>

      {showRemove && (
        <Animated.View
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            opacity: fadeAnim,
          }}
        >
          <TouchableOpacity
            onPress={handleRemove}
            className="bg-red-600 rounded-full p-1"
          >
            <Ionicons name="heart-dislike" size={24} color="#fff" />
          </TouchableOpacity>
        </Animated.View>
      )}
    </TouchableOpacity>
  );
};

export default AnimeCard;


//  return (
//     <Card style={{ backgroundColor: "#1e293b" }}>
//       <Card.Cover
//         source={image}
//         style={{ height: 180, borderRadius: 8 }}
//         resizeMode="cover"
//       />
//       <Card.Title
//         title={title}
//         titleStyle={{ color: "#ffff", fontSize: 14 }}
//       />
//     </Card>
//   );











