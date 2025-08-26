import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";

export default function HorizontalCard({ title, image, onPress }) {
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
    marginRight: 15,
    width: Platform.OS === "web" ? 180 : 140,
    overflow: "hidden",
    ...Platform.select({
      web: {
        boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
        cursor: "pointer",
      },
      default: {
        elevation: 3,
      },
    }),
  },
  image: {
    width: "100%",
    height: Platform.OS === "web" ? 140 : 120,
    resizeMode: "cover",
  },
  title: {
    textAlign: "center",
    fontSize: Platform.OS === "web" ? 16 : 14,
    fontWeight: "bold",
    padding: 8,
  },
});
