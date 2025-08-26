import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native"; // <- Platform é opcional

export default function TopMenu() {
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.item}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.item}>Categorias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.item}>Novidades</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.item}>Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.item}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: Platform.OS === "web" ? 80 : 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FF7FA9",
    borderRadius: 12,
    marginHorizontal: Platform.OS === "web" ? 30 : 0,
    marginVertical: 10,
    paddingHorizontal: 10,
    ...Platform.select({
      web: {
        boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
      },
      default: {
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
    }),
  },
  menuItem: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.25)",
    maxWidth: 120,
    flexShrink: 1,
    ...Platform.select({
      web: {
        cursor: "pointer",
      },
    }),
  },
  item: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: Platform.OS === "web" ? 14 : 14,
    textAlign: "center",
  },
});
