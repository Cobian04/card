import { Image, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* Contenedor superior */}
      <View style={styles.content}>
        <Text style={styles.text}>Acerca de StikerSmash</Text>
      </View>

      {/* Contenedor inferior para las imágenes */}
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/emoji4.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/images/emoji5.png")}
          style={styles.image}
        />
        <Image
          source={require("@/assets/images/emoji6.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 40,
    paddingTop: 20,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
});
