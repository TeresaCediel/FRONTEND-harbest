import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../styles/colors";
import ScreenContainer from "../components/common/ScreenContainer";
import ClientTabBar from "../components/common/ClientTabBar"; // <-- IMPORTAMOS LA BARRA CORRECTA

export default function FavoritesScreen({ navigation }) {
  const favorites = [
    {
      id: 1,
      name: "Naranjas Valencianas",
      seller: "Granjas Jaume",
      price: "4,90 €/kg",
      badge: "Fresco",
      image: require("../../assets/images/comida/naranjas.webp"),
    },
    {
      id: 2,
      name: "Aguacates de Granada",
      seller: "Illo verdulerías",
      price: "6,20 €/kg",
      badge: "Orgánico",
      image: require("../../assets/images/comida/aguacate.webp"),
    },
    {
      id: 3,
      name: "Pimentón de la Vera",
      seller: "Antonio & Co",
      price: "3,80 €",
      badge: "Exclusivo",
      image: require("../../assets/images/comida/pimenton.jpg"),
    },
    {
      id: 4,
      name: "Fresas de temporada",
      seller: "Huerta del Sur",
      price: "5,10 €/kg",
      badge: "Popular",
      image: require("../../assets/images/comida/fresas.jpg"),
    },
  ];

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* HEADER VERDE */}
          <View style={styles.topSection}>
            <View style={styles.topRow}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={22} color="#fff" />
              </TouchableOpacity>

              {/* FUGA SELLADA: El logo ahora va al Home correcto */}
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image
                  source={require("../../assets/images/logo-harbest.png")}
                  style={styles.logoImage}
                  tintColor="#FFF"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.headerTextBlock}>
              <Text style={styles.headerMiniText}>Tu selección guardada</Text>
              <Text style={styles.headerTitle}>Favoritos</Text>
              <Text style={styles.headerSubtitle}>
                Accede rápidamente a los productos que más te interesan y vuelve
                a comprarlos cuando quieras.
              </Text>
            </View>

            <View style={styles.decorLeafOne} />
            <View style={styles.decorLeafTwo} />
          </View>

          {/* RESUMEN */}
          <View style={styles.summaryCard}>
            <View>
              <Text style={styles.summaryLabel}>Productos guardados</Text>
              <Text style={styles.summaryValue}>{favorites.length}</Text>
            </View>

            <View style={styles.summaryRight}>
              <Ionicons name="heart" size={22} color={colors.primary} />
            </View>
          </View>

          {/* CABECERA SECCIÓN */}
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>Tus favoritos</Text>
              <Text style={styles.sectionSubtitle}>
                Productos guardados recientemente
              </Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.seeAllText}>Gestionar</Text>
            </TouchableOpacity>
          </View>

          {/* LISTADO */}
          {favorites.map((item) => (
            <FavoriteCard key={item.id} item={item} navigation={navigation} />
          ))}
        </ScrollView>

        {/* BOTTOM BAR BLINDADA DEL CLIENTE */}
        <ClientTabBar Navigation={navigation} ActiveRoute="Favorites" />
      </View>
    </ScreenContainer>
  );
}

const FavoriteCard = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.card}
    activeOpacity={0.88}
    onPress={() => navigation.navigate("ProductDetail")}
  >
    <Image source={item.image} style={styles.cardImage} />

    <View style={styles.cardContent}>
      <View style={styles.cardTopRow}>
        <Text style={styles.cardBadge}>{item.badge}</Text>

        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <Ionicons name="heart" size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <Text style={styles.cardTitle} numberOfLines={2}>
        {item.name}
      </Text>

      <Text style={styles.cardSeller} numberOfLines={1}>
        {item.seller}
      </Text>

      <View style={styles.cardFooter}>
        <Text style={styles.cardPrice}>{item.price}</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Cart")}
          activeOpacity={0.85}
        >
          <Ionicons name="cart" size={15} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8F4",
  },
  scrollContent: {
    paddingBottom: 120, // Espacio para que el TabBar no tape nada
  },
  topSection: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "relative",
    overflow: "hidden",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
  },
  logoImage: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  headerTextBlock: {
    paddingRight: 32,
  },
  headerMiniText: {
    color: "rgba(255,255,255,0.82)",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 10,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 10,
  },
  headerSubtitle: {
    color: "rgba(255,255,255,0.88)",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 290,
  },
  decorLeafOne: {
    position: "absolute",
    right: 24,
    bottom: 26,
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.08)",
    transform: [{ rotate: "28deg" }],
  },
  decorLeafTwo: {
    position: "absolute",
    right: 60,
    bottom: 46,
    width: 28,
    height: 28,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.10)",
    transform: [{ rotate: "-20deg" }],
  },
  summaryCard: {
    marginHorizontal: 20,
    marginTop: -18,
    marginBottom: 24,
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 4,
  },
  summaryLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSoft,
    marginBottom: 6,
  },
  summaryValue: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.text,
  },
  summaryRight: {
    width: 48,
    height: 48,
    borderRadius: 18,
    backgroundColor: "#EEF5E3",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader: {
    marginHorizontal: 20,
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: colors.text,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: colors.textSoft,
    marginTop: 2,
  },
  seeAllText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.primary,
  },
  card: {
    marginHorizontal: 20,
    marginBottom: 14,
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#4a5f18b4",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 170,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 16,
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#EEF5E3",
    color: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: "800",
  },
  iconButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: "#F8F8F5",
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 4,
  },
  cardSeller: {
    fontSize: 13,
    color: colors.textSoft,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPrice: {
    fontSize: 15,
    fontWeight: "800",
    color: colors.text,
  },
  addButton: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
