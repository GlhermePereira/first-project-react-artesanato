import React from "react";
import { SafeAreaView, ScrollView, FlatList, Text, StyleSheet, View, Alert } from "react-native";
import Banner from "./components/Banner";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import HorizontalCard from "./components/HorizontalCard";
import VerticalCard from "./components/VerticalCard";
import CategoryCard from "./components/CategoryCard";

const featuredProducts = [
  { id: "1", title: "Vaso de Cerâmica", image: require("./assets/vaso-de-ceramica.jpg") },
  { id: "2", title: "Colar de Madeira", image: require("./assets/colar-de-madeira.jpg") },
  { id: "3", title: "Mini Escultura", image: require("./assets/Mini-Escultura.jpg") },
  { id: "4", title: "Tapete Bordado", image: require("./assets/tapete-bordado.jpg") },
  { id: "5", title: "Brincos Artesanais", image: require("./assets/brincos-artesanais.jpg") },
  { id: "6", title: "Cesto de Palha", image: require("./assets/cesto-palha.jpg") },
  { id: "7", title: "Quadro Artesanal", image: require("./assets/quadro-artesanal.jpg") },
  { id: "8", title: "Bolsa de Crochê", image: require("./assets/Bolsa-Crochê.jpg") },
  { id: "9", title: "Vela Decorativa", image: require("./assets/vela-decorativa.jpg") },
  { id: "10", title: "Porta-Retrato", image: require("./assets/Porta-Retrato.jpg") },
];


const products = [
  { id: "1", title: "Porta-Retrato", image: require("./assets/Porta-Retrato.jpg") },
  { id: "2", title: "Cesto de Palha", image: require("./assets/cesto-palha.jpg") },
  { id: "3", title: "Vela Decorativa", image: require("./assets/vela-decorativa.jpg") },
  { id: "4", title: "Bolsa de Crochê", image: require("./assets/Bolsa-Crochê.jpg") },
  { id: "5", title: "Tapete Bordado", image: require("./assets/tapete-bordado.jpg") },
  { id: "6", title: "Quadro Artesanal", image: require("./assets/quadro-artesanal.jpg") },
  { id: "7", title: "Vaso de Cerâmica", image: require("./assets/vaso-de-ceramica.jpg") },
  { id: "8", title: "Mini Escultura", image: require("./assets/Mini-Escultura.jpg") },
  { id: "9", title: "Colar de Madeira", image: require("./assets/colar-de-madeira.jpg") },
  { id: "10", title: "Brincos Artesanais", image: require("./assets/brincos-artesanais.jpg") },
];

const categories = [
  { id: "1", title: "Decoração", color: "#FF69B4" },
  { id: "2", title: "Bijuterias", color: "#FF1493" },
  { id: "3", title: "Roupas", color: "#FFB6C1" },
  { id: "4", title: "Cestas", color: "#FFC0CB" },
  { id: "5", title: "Velas", color: "#FF69B4" },
  { id: "6", title: "Quadros", color: "#FF1493" },
  { id: "7", title: "Miniaturas", color: "#FFB6C1" },
  { id: "8", title: "Bolsas", color: "#FFC0CB" },
];

export default function App() {
  const handlePress = (item) => Alert.alert("Produto clicado", item.title);

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <TopMenu />

      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              color={item.color}
              onPress={() => handlePress(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 15, paddingVertical: 10 }}
        />

        <Text style={styles.sectionTitle}>Destaques</Text>
        <FlatList
          horizontal
          data={featuredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HorizontalCard
              title={item.title}
              image={item.image}
              onPress={() => handlePress(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 15, paddingVertical: 10 }}
        />

        <Text style={styles.sectionTitle}>Produtos</Text>
        {products.map((item) => (
          <VerticalCard
            key={item.id}
            title={item.title}
            image={item.image}
            onPress={() => handlePress(item)}
          />
        ))}

        <View style={{ height: 100 }} /> {/* Espaço para rodapé */}
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },
  sectionTitle: { margin: 15, fontSize: 20, fontWeight: "bold", color: "#333" },
});
