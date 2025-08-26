import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";

export default function VerticalCard({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    overflow: "hidden",
    ...Platform.select({
      web: {
        boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        cursor: "pointer",
      },
      default: {
        elevation: 3,
      },
    }),
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
});
