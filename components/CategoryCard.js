import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryCard({ title, color }) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
  },
});
