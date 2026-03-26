import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function FarmerTabBar({ Navigation, ActiveRoute }) {
  // El color corporativo y el gris de los iconos inactivos
  const FarmerColor = "#d25e2c";
  const InactiveColor = "#8A8A8A";

  return (
    <View style={Styles.TabBarWrapper}>
      <View style={Styles.Pill}>
        {/* BUSCAR / HOME */}
        <TouchableOpacity
          style={[
            Styles.TabIcon,
            ActiveRoute === "HomeAgricultor" && Styles.ActiveTabBg,
          ]}
          onPress={() => Navigation.navigate("HomeAgricultor")}
        >
          <Ionicons
            name="search-outline"
            size={22}
            color={
              ActiveRoute === "HomeAgricultor" ? FarmerColor : InactiveColor
            }
          />
        </TouchableOpacity>

        {/* PEDIDOS (Icono de álbum/caja) */}
        <TouchableOpacity
          style={[
            Styles.TabIcon,
            ActiveRoute === "OrdersAgricultor" && Styles.ActiveTabBg,
          ]}
          onPress={() => Navigation.navigate("OrdersAgricultor")} // <-- CAMBIA ESTO
        >
          <Ionicons
            name="albums-outline"
            size={22}
            color={
              ActiveRoute === "OrdersAgricultor" ? FarmerColor : InactiveColor
            }
          />
        </TouchableOpacity>

        {/* AÑADIR (Botón central de +, aunque en el mockup es un icono normal) */}
        <TouchableOpacity
          style={[
            Styles.TabIcon,
            ActiveRoute === "AddProduct" && Styles.ActiveTabBg,
          ]}
          onPress={() => Navigation.navigate("AddProduct")}
        >
          <Ionicons
            name="add-circle-outline"
            size={24}
            color={ActiveRoute === "AddProduct" ? FarmerColor : InactiveColor}
          />
        </TouchableOpacity>

        {/* PERFIL */}
        <TouchableOpacity
          style={[
            Styles.TabIcon,
            ActiveRoute === "Profile" && Styles.ActiveTabBg,
          ]}
          onPress={() => Navigation.navigate("Profile")}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color={ActiveRoute === "Profile" ? FarmerColor : InactiveColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  TabBarWrapper: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: "center", // Centra la píldora en la pantalla
  },
  Pill: {
    backgroundColor: "#F2F2F2", // El gris clarito del mockup
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 40,
    paddingVertical: 8,
    width: "75%", // Ancho ajustado a la imagen
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  TabIcon: {
    padding: 10,
    borderRadius: 25,
  },
  ActiveTabBg: {
    backgroundColor: "#E5E5E5", // El circulito gris sutil del icono activo
  },
});
