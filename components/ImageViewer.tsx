import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

type Props = {
  ImgSource: ImageSourcePropType;
};

export default function ImageViewer({ ImgSource }: Props) {
  return <Image source={ImgSource} style={styles.image} />;
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
