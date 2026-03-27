import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import Button from "@/components/Button";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

type EmojiType = {
  id: number;
  uri: string;
};

export default function Index() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [emojis, setEmojis] = useState<EmojiType[]>([]);

  const addEmoji = (uri: string) => {
    setEmojis([...emojis, { id: Date.now(), uri }]);
    setShowAppOptions(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} />

        {emojis.map((emoji) => (
          <EmojiSticker key={emoji.id} uri={emoji.uri} />
        ))}
      </View>

      <View style={styles.footer}>
        <Button
          theme="primary"
          label="Add Sticker"
          onPress={() => setShowAppOptions(true)}
        />
      </View>

      <Modal visible={showAppOptions} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modal}>
            <Text style={styles.title}>Stickers</Text>

            <EmojiList onSelect={addEmoji} />

            <Pressable onPress={() => setShowAppOptions(false)}>
              <Text style={styles.close}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Apple style
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 320,
    height: 320,
    borderRadius: 20,
    overflow: "hidden",
  },
  footer: {
    marginTop: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modal: {
    backgroundColor: "#1c1c1e",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
  close: {
    color: "#0a84ff", // Apple blue
    textAlign: "center",
    marginTop: 10,
  },
});
