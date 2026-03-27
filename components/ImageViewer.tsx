import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imageSource: ImageSourcePropType;
};

export default function ImageViewer({ imageSource }: Props) {
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});
