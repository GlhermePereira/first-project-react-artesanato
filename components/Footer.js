import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 Artesanato Online</Text>
      <View style={styles.links}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Linking.openURL("https://www.instagram.com")}
        >
          <Text style={styles.linkText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Linking.openURL("https://www.facebook.com")}
        >
          <Text style={styles.linkText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Linking.openURL("https://www.whatsapp.com")}
        >
          <Text style={styles.linkText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: "#FF7FA9", // tom rosa suave
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...Platform.select({
      web: {
        boxShadow: "0 -4px 10px rgba(0,0,0,0.15)",
      },
      default: {
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
    }),
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 12,
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
  linkButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    transitionDuration: "200ms", // só funciona na web
  },
  linkText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    textAlign: "center",
  },
});
