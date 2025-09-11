import { Image } from "expo-image";
import { Text, View } from "react-native";

const AnimeCard = ({ title, image }) => {
  return (
    <View className=" rounded-lg overflow-hidden p-1 w-full">
   <Image
  source={image}
  style={{ width: "100%", height: 200, borderRadius: 5, marginBottom: 8 }}
  contentFit="cover"
/>

      <Text className="text-white text-sm font-semibold text-justify">{title}</Text>
    </View>
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











