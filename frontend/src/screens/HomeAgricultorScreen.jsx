import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FarmerTabBar from "../components/common/FarmerTabBar";
import ScreenContainer from "../components/common/ScreenContainer";

export default function HomeAgricultorScreen({ navigation }) {
  const FarmerColor = "#d25e2c";

  return (
    <ScreenContainer>
      <View style={Styles.MainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.ScrollPadding}
        >
          {/* CABECERA */}
          <View style={Styles.HeaderRow}>
            <TouchableOpacity
              style={Styles.HeaderLeft}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={22} color="#8A8A8A" />
              <Text style={Styles.HeaderText}>Inicio</Text>
            </TouchableOpacity>

            <View style={Styles.HeaderRight}>
              <TouchableOpacity style={{ marginRight: 8 }}>
                <Ionicons name="ellipsis-vertical" size={20} color="#8A8A8A" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <View
                  style={[Styles.LogoCircle, { backgroundColor: FarmerColor }]}
                >
                  <Image
                    source={require("../../assets/images/logo-harbest.png")}
                    style={Styles.TopLogo}
                    tintColor="#FFF"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* BUSCADOR */}
          <TouchableOpacity
            style={Styles.SearchBar}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SearchAgricultor")}
          >
            <Ionicons name="search" size={18} color="#B8B8B8" />
            <Text style={Styles.SearchInputText}>Buscar productos...</Text>
          </TouchableOpacity>

          {/* TÍTULO */}
          <Text style={Styles.MainTitle}>Mis Productos</Text>

          {/* CATEGORÍAS */}
          <View style={Styles.Grid}>
            <CategoryItem Color="#DE7B54" Icon="logo-apple" Title="FRUTAS" />
            <CategoryItem Color="#789A3D" Icon="leaf" Title="VERDURAS" />
            <CategoryItem Color="#E8D499" Icon="nutrition" Title="ESPECIAS" />
            <CategoryItem
              Color="#BCBCBC"
              Icon="barcode-outline"
              Title="VER TODO"
            />
          </View>

          {/* ÚLTIMOS AÑADIDOS */}
          <Text style={Styles.SectionTitle}>Últimos añadidos...</Text>

          <View style={Styles.ProductList}>
            <ProductCard
              Name="NARANJAS"
              Qty="20 kg"
              Date="Hace 11 min"
              BgImg="#FF9800"
            />
            <ProductCard
              Name="AGUACATES"
              Qty="12 kg"
              Date="Hace 45 min"
              BgImg="#4CAF50"
            />
            <ProductCard
              Name="PIMIENTA NEGRA"
              Qty="4 kg"
              Date="Hace 2 h"
              BgImg="#795548"
            />
          </View>
        </ScrollView>

        {/* BARRA DE NAVEGACIÓN INFERIOR (MOCKUP) */}
        <View style={Styles.NavBar}>
          <TouchableOpacity
            style={[Styles.NavTab, { backgroundColor: "#FCEEEE" }]}
          >
            <Ionicons name="home" size={20} color={FarmerColor} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="add-circle-outline" size={24} color="#8A8A8A" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="list-outline" size={24} color="#8A8A8A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileAgricultor')}>
            <Ionicons name="person-outline" size={22} color="#8A8A8A" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}

// SUB-COMPONENTES
const CategoryItem = ({ Color, Icon, Title }) => (
  <TouchableOpacity
    style={[Styles.CategoryBox, { backgroundColor: Color }]}
    activeOpacity={0.9}
  >
    <Ionicons name={Icon} size={24} color="#FFF" style={{ marginRight: 8 }} />
    <Text style={Styles.CategoryTitle}>{Title}</Text>
  </TouchableOpacity>
);

const ProductCard = ({ Name, Qty, Date, BgImg }) => (
  <TouchableOpacity style={Styles.Card} activeOpacity={0.8}>
    <View style={[Styles.CardImgPlaceholder, { backgroundColor: BgImg }]} />
    <View style={Styles.CardInfo}>
      <Text style={Styles.CardName}>{Name}</Text>
      <Text style={Styles.CardQty}>{Qty}</Text>
    </View>
    <Text style={Styles.CardDate}>{Date}</Text>
  </TouchableOpacity>
);

// ESTILOS
const Styles = StyleSheet.create({
  MainContainer: { flex: 1, backgroundColor: "#F8F8F8" },
  ScrollPadding: { paddingHorizontal: 25, paddingTop: 10, paddingBottom: 110 },

  HeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  HeaderLeft: { flexDirection: "row", alignItems: "center" },
  HeaderText: {
    fontSize: 18,
    color: "#8A8A8A",
    marginLeft: 10,
    fontWeight: "500",
  },
  HeaderRight: { flexDirection: "row", alignItems: "center" },
  LogoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  TopLogo: { width: 20, height: 20, resizeMode: "contain" },

  SearchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  SearchInputText: { marginLeft: 10, fontSize: 14, color: "#B8B8B8" },

  MainTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#7A7A7A",
    marginBottom: 15,
  },

  Grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  CategoryBox: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingVertical: 18,
    marginBottom: 12,
  },
  CategoryTitle: { color: "#FFF", fontWeight: "700", fontSize: 13 },

  SectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#8A8A8A",
    marginBottom: 12,
  },

  ProductList: { gap: 10 },
  Card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 10,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 5,
  },
  CardImgPlaceholder: {
    width: 55,
    height: 55,
    borderRadius: 12,
    marginRight: 15,
  },
  CardInfo: { flex: 1, justifyContent: "center" },
  CardName: {
    fontWeight: "700",
    color: "#7A7A7A",
    fontSize: 14,
    marginBottom: 4,
  },
  CardQty: { fontSize: 12, color: "#A8A8A8" },
  CardDate: {
    fontSize: 11,
    color: "#B8B8B8",
    alignSelf: "flex-end",
    marginBottom: 5,
  },
});
