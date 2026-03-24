import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = {
  ImgSource: ImageSourcePropType;
};

export default function ImageViewer({ ImgSource }: Props) {
  return (
    // Agregamos un View que use el imageContainer para darle tamaño
    <View style={styles.imageContainer}>
      <Image source={ImgSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
