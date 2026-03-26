import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenContainer from "../components/common/ScreenContainer";
import colors from "../styles/colors";

export default function HomeAgricultorScreen({ navigation }) {
  const FarmerColor = "#C45555";

  return (
    <ScreenContainer>
      <View style={Styles.MainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={Styles.ScrollPadding}
        >
          {/* BLOQUE 1: HEADER */}
          <View style={Styles.HeaderSection}>
            <View style={Styles.HeaderInfo}>
              <Text style={Styles.HeaderLabel}>Panel de Gestión</Text>
              <Text style={Styles.HeaderUser}>Hola, Agricultor</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../../assets/images/logo-harbest.png")}
                style={Styles.TopLogo}
              />
            </TouchableOpacity>
          </View>

          {/* BLOQUE 2: BUSCADOR */}
          <View style={Styles.SearchArea}>
            <View style={Styles.SearchBar}>
              <Ionicons name="search" size={18} color={colors.textSoft} />
              <TextInput
                placeholder="Buscar en mis productos..."
                style={Styles.SearchInput}
                placeholderTextColor={colors.textSoft}
              />
            </View>
          </View>

          {/* BLOQUE 3: CATEGORÍAS */}
          <View style={Styles.SectionHeader}>
            <Text style={Styles.SectionTitle}>Mis Productos</Text>
          </View>
          <View style={Styles.Grid}>
            <CategoryItem
              Color="#E87D3E"
              Icon="nutrition"
              Title="Frutas"
              Info="12 activos"
            />
            <CategoryItem
              Color="#7D9B45"
              Icon="leaf"
              Title="Verduras"
              Info="8 activos"
            />
            <CategoryItem
              Color="#C9A46A"
              Icon="flame"
              Title="Especias"
              Info="3 activos"
            />
            <CategoryItem
              Color="#B8B8B8"
              Icon="grid"
              Title="Ver todo"
              Info="Catálogo"
            />
          </View>

          {/* BLOQUE 4: LISTADO RECIENTE */}
          <View style={Styles.SectionHeader}>
            <Text style={Styles.SectionTitle}>Últimos añadidos...</Text>
            <TouchableOpacity>
              <Text style={[Styles.EditLink, { color: FarmerColor }]}>
                Editar stock
              </Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.ProductList}>
            <ProductCard
              Name="Tomates de la huerta"
              Qty="50 kg"
              Date="Hace 2 min"
            />
            <ProductCard Name="Aguacates Hass" Qty="12 kg" Date="Hace 45 min" />
            <ProductCard Name="Pimienta Negra" Qty="4 kg" Date="Hace 2 h" />
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

// COMPONENTES AUXILIARES (CapsCase)
const CategoryItem = ({ Color, Icon, Title, Info }) => (
  <TouchableOpacity
    style={[Styles.CategoryBox, { backgroundColor: Color }]}
    activeOpacity={0.9}
  >
    <View style={Styles.IconCircle}>
      <Ionicons name={Icon} size={20} color="#fff" />
    </View>
    <View>
      <Text style={Styles.CategoryTitle}>{Title}</Text>
      <Text style={Styles.CategoryInfo}>{Info}</Text>
    </View>
  </TouchableOpacity>
);

const ProductCard = ({ Name, Qty, Date }) => (
  <TouchableOpacity style={Styles.Card} activeOpacity={0.7}>
    <View style={Styles.CardImg}>
      <Ionicons name="image-outline" size={24} color="#B8B8B8" />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={Styles.CardName}>{Name}</Text>
      <Text style={Styles.CardQty}>{Qty}</Text>
    </View>
    <Text style={Styles.CardDate}>{Date}</Text>
  </TouchableOpacity>
);

const Styles = StyleSheet.create({
  MainContainer: { flex: 1, backgroundColor: "#F7F8F4" },
  ScrollPadding: { padding: 20, paddingBottom: 120 },
  HeaderSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  HeaderInfo: { flex: 1 },
  HeaderLabel: { fontSize: 12, color: "#8A8A8A", fontWeight: "600" },
  HeaderUser: { fontSize: 24, fontWeight: "800", color: "#2D2D2D" },
  TopLogo: { width: 40, height: 40, resizeMode: "contain" },
  SearchArea: { marginBottom: 25 },
  SearchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 12,
    elevation: 3,
  },
  SearchInput: { flex: 1, marginLeft: 10, fontSize: 14 },
  SectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  SectionTitle: { fontSize: 20, fontWeight: "800", color: "#2D2D2D" },
  EditLink: { fontWeight: "700", fontSize: 13 },
  Grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  CategoryBox: {
    width: "48%",
    borderRadius: 22,
    padding: 15,
    marginBottom: 12,
    height: 120,
    justifyContent: "space-between",
  },
  IconCircle: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  CategoryTitle: { color: "#FFF", fontWeight: "800", fontSize: 16 },
  CategoryInfo: { color: "rgba(255,255,255,0.8)", fontSize: 12 },
  ProductList: { gap: 12 },
  Card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 18,
    elevation: 2,
  },
  CardImg: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  CardName: { fontWeight: "700", color: "#2D2D2D" },
  CardQty: { fontSize: 12, color: "#8A8A8A" },
  CardDate: { fontSize: 11, color: "#B8B8B8" },
  NavBar: {
    position: "absolute",
    bottom: 25,
    left: 30,
    right: 30,
    backgroundColor: "#FFF",
    borderRadius: 40,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 8,
  },
  NavTab: { padding: 10, borderRadius: 20 },
});
