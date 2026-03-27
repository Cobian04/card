import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  theme?: string;
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  return (
    <Pressable
      style={[styles.button, theme === "primary" && styles.primary]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  primary: {
    backgroundColor: "#007bff",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});
