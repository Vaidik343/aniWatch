import React from "react";
import { Card } from "react-native-paper";

const AnimeCard = ({ title, image }) => {
  return (
    <Card style={{ backgroundColor: "#1e293b" }}>
      <Card.Cover
        source={image}
        style={{ height: 180, borderRadius: 8 }}
        resizeMode="cover"
      />
      <Card.Title
        title={title}
        titleStyle={{ color: "#ffff", fontSize: 14 }}
      />
    </Card>
  );
};

export default AnimeCard;
