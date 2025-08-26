import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function Banner() {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>Artesanato Online</Text>
      <Text style={styles.subtitle}>Descubra produtos únicos e feitos à mão</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: Platform.OS === "web" ? 160 : 120,
    backgroundColor: "#FF7FA9", // tom rosa suave
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 15,
    paddingHorizontal: 20,
    ...Platform.select({
      web: {
        boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
      },
      default: {
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
    }),
  },
  title: {
    color: "#fff",
    fontSize: Platform.OS === "web" ? 32 : 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    color: "#fff",
    fontSize: Platform.OS === "web" ? 18 : 14,
    textAlign: "center",
    fontStyle: "italic",
  },
});
