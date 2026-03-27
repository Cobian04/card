import { Image, Pressable, StyleSheet, View } from "react-native";

const emojis = [
  "https://em-content.zobj.net/source/apple/391/fire_1f525.png",
  "https://em-content.zobj.net/source/apple/391/red-heart_2764-fe0f.png",
  "https://em-content.zobj.net/source/apple/391/grinning-face_1f600.png",
  "https://em-content.zobj.net/source/apple/391/smiling-face-with-sunglasses_1f60e.png",
];

export default function EmojiList({ onSelect }: any) {
  return (
    <View style={styles.container}>
      {emojis.map((emoji, index) => (
        <Pressable key={index} onPress={() => onSelect(emoji)}>
          <Image source={{ uri: emoji }} style={styles.emoji} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  emoji: {
    width: 50,
    height: 50,
    margin: 10,
  },
});
