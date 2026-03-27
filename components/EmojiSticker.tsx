import { useRef } from "react";
import { Animated, Image, PanResponder } from "react-native";

type Props = {
  uri: string;
};

export default function EmojiSticker({ uri }: Props) {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;

  return (
    <Animated.View
      style={{
        position: "absolute",
        transform: pan.getTranslateTransform(),
      }}
      {...panResponder.panHandlers}
    >
      <Image source={{ uri }} style={{ width: 80, height: 80 }} />
    </Animated.View>
  );
}
