import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

const ListItem = React.memo(({ item, viewableItems, children }) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = viewableItems.value.some(
      (token) => token.isViewable && token.item?.mal_id === item.mal_id
    );

    return {
      opacity: isVisible ? 1 : 0.3,
      transform: [{ scale: isVisible ? 1 : 0.95 }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          height: 100,
          width: "90%",
          alignSelf: "center",
          borderRadius: 15,
          marginVertical: 10,
          backgroundColor: "#1f2937",
          padding: 10,
        },
        rStyle,
      ]}
    >
      {children}
    </Animated.View>
  );
});

export { ListItem };

