import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas Comunes
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SplashScreen from "../screens/SplashScreen";

// Pantallas del Cliente
import CartScreen from "../screens/CartScreen";
import CategoryAllScreen from "../screens/CategoryAllScreen";
import CategoryFruitsScreen from "../screens/CategoryFruitsScreen";
import CategorySpicesScreen from "../screens/CategorySpicesScreen";
import CategoryVegetablesScreen from "../screens/CategoryVegetablesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import SearchScreen from "../screens/SearchScreen";

// Pantallas del Agricultor (Tus nuevas creaciones)
import AddProductScreen from "../screens/AddProductScreen";
import HomeAgricultorScreen from "../screens/HomeAgricultorScreen";
import OrdersAgricultorScreen from "../screens/OrdersAgricultorScreen";
import SearchAgricultorScreen from "../screens/SearchAgricultorScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeAgricultor"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="CategoryFruits" component={CategoryFruitsScreen} />
        <Stack.Screen
          name="CategoryVegetables"
          component={CategoryVegetablesScreen}
        />
        <Stack.Screen name="CategorySpices" component={CategorySpicesScreen} />
        <Stack.Screen name="CategoryAll" component={CategoryAllScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Orders" component={OrdersScreen} />

        <Stack.Screen name="HomeAgricultor" component={HomeAgricultorScreen} />
        <Stack.Screen name="AddProduct" component={AddProductScreen} />
        <Stack.Screen
          name="SearchAgricultor"
          component={SearchAgricultorScreen}
        />
        <Stack.Screen
          name="OrdersAgricultor"
          component={OrdersAgricultorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
