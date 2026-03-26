import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/CartScreen";
import CategoryAllScreen from "../screens/CategoryAllScreen";
import CategoryFruitsScreen from "../screens/CategoryFruitsScreen";
import CategorySpicesScreen from "../screens/CategorySpicesScreen";
import CategoryVegetablesScreen from "../screens/CategoryVegetablesScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import HomeAgricultorScreen from "../screens/HomeAgricultorScreen"; // IMPORTADO
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeAgricultor" // PUESTO POR DEFECTO PARA TESTEAR
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeAgricultor" component={HomeAgricultorScreen} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
