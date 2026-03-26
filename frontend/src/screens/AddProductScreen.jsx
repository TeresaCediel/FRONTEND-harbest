import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FarmerTabBar from "../components/common/FarmerTabBar";
import ScreenContainer from "../components/common/ScreenContainer";

export default function AddProductScreen({ navigation }) {
  const FarmerColor = "#d25e2c";

  return (
    <ScreenContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={Styles.MainContainer}>
          <ScrollView
            contentContainerStyle={Styles.ScrollPadding}
            showsVerticalScrollIndicator={false}
          >
            {/* CABECERA */}
            <View style={Styles.HeaderRow}>
              <TouchableOpacity
                style={Styles.HeaderLeft}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={22} color="#8A8A8A" />
                <Text style={Styles.HeaderText}>Añadir nuevo producto</Text>
              </TouchableOpacity>

              <View style={Styles.HeaderRight}>
                <TouchableOpacity style={{ marginRight: 8 }}>
                  <Ionicons
                    name="ellipsis-vertical"
                    size={20}
                    color="#8A8A8A"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Profile")}
                >
                  <View
                    style={[
                      Styles.LogoCircle,
                      { backgroundColor: FarmerColor },
                    ]}
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

            {/* FOTO Y GUARDAR */}
            <View style={Styles.TopActionsRow}>
              <View style={Styles.UploadBox}>
                <Ionicons
                  name="camera-outline"
                  size={36}
                  color={FarmerColor}
                  style={{ marginBottom: 10 }}
                />
                <TouchableOpacity
                  style={[
                    Styles.UploadButton,
                    { backgroundColor: FarmerColor },
                  ]}
                >
                  <Ionicons name="add" size={16} color="#FFF" />
                  <Text style={Styles.UploadButtonText}>Subir foto</Text>
                </TouchableOpacity>
                <Text style={Styles.UploadSubtext}>
                  Añade una imagen del{"\n"}producto
                </Text>
              </View>

              <TouchableOpacity
                style={[Styles.SaveButton, { backgroundColor: FarmerColor }]}
              >
                <Text style={Styles.SaveButtonText}>GUARDAR</Text>
              </TouchableOpacity>
            </View>

            {/* FORMULARIO */}
            <View style={Styles.FormArea}>
              <View style={Styles.InputGroup}>
                <Text style={Styles.InputLabel}>Nombre</Text>
                <View style={Styles.InputContainer}>
                  <TextInput
                    style={Styles.Input}
                    placeholder="Ej. Patatas"
                    placeholderTextColor="#B8B8B8"
                  />
                </View>
              </View>

              <View style={Styles.InputGroup}>
                <Text style={Styles.InputLabel}>Categoría</Text>
                <View style={Styles.InputContainer}>
                  <Ionicons
                    name="bookmark-outline"
                    size={18}
                    color={FarmerColor}
                    style={{ marginRight: 8 }}
                  />
                  <TextInput
                    style={Styles.Input}
                    placeholder="Seleccionar"
                    placeholderTextColor="#B8B8B8"
                  />
                  <Ionicons name="chevron-forward" size={18} color="#C4C4C4" />
                </View>
              </View>

              <View style={Styles.InputGroup}>
                <Text style={Styles.InputLabel}>Descripción</Text>
                <View style={Styles.InputContainer}>
                  <TextInput
                    style={Styles.Input}
                    placeholder="Opcional"
                    placeholderTextColor="#B8B8B8"
                  />
                </View>
              </View>

              <View style={Styles.InputGroup}>
                <Text style={Styles.InputLabel}>Cantidad Disponible</Text>
                <View style={[Styles.InputContainer, { paddingRight: 0 }]}>
                  <TextInput
                    style={Styles.Input}
                    placeholder="0"
                    placeholderTextColor="#B8B8B8"
                    keyboardType="numeric"
                  />
                  <View style={Styles.UnitBox}>
                    <Text style={Styles.UnitText}>kg</Text>
                  </View>
                </View>
              </View>

              <View style={Styles.InputGroup}>
                <Text style={Styles.InputLabel}>Precio por kg</Text>
                <View style={[Styles.InputContainer, { paddingRight: 0 }]}>
                  <Text style={Styles.CurrencyText}>€</Text>
                  <TextInput
                    style={Styles.Input}
                    placeholder="0.00"
                    placeholderTextColor="#B8B8B8"
                    keyboardType="numeric"
                  />
                  <View style={Styles.UnitBox}>
                    <Text style={Styles.UnitText}>€/kg</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

          <FarmerTabBar Navigation={navigation} ActiveRoute="AddProduct" />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const Styles = StyleSheet.create({
  MainContainer: { flex: 1, backgroundColor: "#F8F8F8" },
  ScrollPadding: { paddingHorizontal: 25, paddingTop: 10, paddingBottom: 110 },

  HeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
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

  TopActionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  UploadBox: {
    width: 150,
    backgroundColor: "#F9FAE8",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  UploadButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 8,
  },
  UploadButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
    marginLeft: 4,
  },
  UploadSubtext: {
    fontSize: 9,
    color: "#A8A8A8",
    textAlign: "center",
    lineHeight: 12,
  },

  SaveButton: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12 },
  SaveButtonText: { color: "#FFF", fontWeight: "700", fontSize: 14 },

  FormArea: { gap: 15 },
  InputGroup: { marginBottom: 5 },
  InputLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#7A7A7A",
    marginBottom: 8,
  },
  InputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
  },
  Input: { flex: 1, fontSize: 14, color: "#7A7A7A" },

  CurrencyText: { fontSize: 14, color: "#7A7A7A", marginRight: 8 },
  UnitBox: {
    backgroundColor: "#F5F5F5",
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
    paddingHorizontal: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 1,
    borderLeftColor: "#F0F0F0",
  },
  UnitText: { fontSize: 13, color: "#8A8A8A", fontWeight: "500" },
});
