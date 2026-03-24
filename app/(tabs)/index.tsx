import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
// 1. Importamos tu nuevo componente (ajusta la ruta si lo guardaste en otro lado)
import ImageViewer from "../../components/ImageViewer";

// 2. Definimos la imagen que le vamos a mandar
const BackgroundImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home</Text>
        <Link href="/about" style={styles.link}>
          Ir a Acerca de
        </Link>

        {/* 3. ¡Aquí usamos tu componente y le pasamos la imagen! */}
        <ImageViewer ImgSource={BackgroundImage} />
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
    marginBottom: 10,
  },
  link: {
    marginTop: 10,
    marginBottom: 30, // Separación antes de la imagen
    fontSize: 18,
    color: "#0a7ea4",
    textDecorationLine: "underline",
  },
});
