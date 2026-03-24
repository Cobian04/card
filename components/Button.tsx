import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => alert("Presionaste el botón")}
        style={styles.button}
      >
        <Text style={styles.text}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
