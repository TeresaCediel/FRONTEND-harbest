import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../styles/colors';
import ScreenContainer from '../components/common/ScreenContainer';

export default function HomeScreen({ navigation }) {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Ionicons name="arrow-back" size={24} color={colors.text} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>Hola Teresa</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../assets/images/logo-harbest.png')}
                style={styles.logoImage}
              />
            </TouchableOpacity>
          </View>

          {/* SEARCH */}
          <View style={styles.searchWrapper}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={16} color={colors.textSoft} style={styles.searchIcon} />
              <TextInput
                placeholder="Buscar productos..."
                placeholderTextColor={colors.textSoft}
                style={styles.search}
              />
            </View>
          </View>

          {/* CATEGORÍAS */}
          <Text style={styles.sectionTitle}>Categorías</Text>

          <View style={styles.categories}>
            <Category color={colors.secondary} icon="nutrition" text="FRUTAS" />
            <Category color={colors.primary} icon="leaf" text="VERDURAS" />
            <Category color="#D7C79A" icon="flame" text="ESPECIAS" />
            <Category color="#C9C9C9" icon="cube" text="VER TODO" />
          </View>

          {/* POPULARES */}
          <Text style={styles.sectionTitleSmall}>Recomendados</Text>

          <View style={styles.productsGrid}>
            <ProductCard
              navigation={navigation}
              name="Naranjas Valencianas"
              seller="Granjas Jaume"
              time="11 min"
              image={require('../../assets/images/comida/naranjas.webp')}
              badge="Fresco"
            />
            <ProductCard
              navigation={navigation}
              name="Aguacates de Granada"
              seller="Illo verdulerías"
              time="45 min"
              image={require('../../assets/images/comida/aguacate.webp')}
              badge="Orgánico"
            />
            <ProductCard
              navigation={navigation}
              name="Pimentón de la Vera"
              seller="Antonio & Co"
              time="2 h"
              image={require('../../assets/images/comida/pimienta.webp')}
              badge="Exclusivo"
            />
          </View>

        </ScrollView>

        {/* BOTTOM BAR */}
        <View style={styles.bottomBar}>
          <Ionicons name="search" size={18} color="#8A8A8A" />
          <Ionicons name="star" size={18} color="#8A8A8A" />
          <Ionicons name="cart" size={18} color="#8A8A8A" />

          <TouchableOpacity style={styles.activeButton} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}


const Category = ({ color, icon, text }) => (
  <TouchableOpacity style={[styles.category, { backgroundColor: color }]}>
    <Ionicons name={icon} size={20} color="#fff" style={styles.categoryIcon} />
    <Text style={styles.categoryText}>{text}</Text>
  </TouchableOpacity>
);

const ProductCard = ({ navigation, name, seller, time, image, badge }) => (
  <TouchableOpacity style={styles.productCard} activeOpacity={0.8} onPress={() => navigation.navigate('ProductDetail')}>
    <Image source={image} style={styles.productCardImage} />
    <View style={styles.productCardContent}>
      <View style={styles.productCardHeader}>
        <Text style={styles.productCardBadge}>{badge}</Text>
      </View>
      <Text style={styles.productCardName}>{name}</Text>
      <Text style={styles.productCardSeller}>{seller}</Text>
      <View style={styles.productCardFooter}>
        <Text style={styles.productCardTime}>{time}</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart" size={16} color="#fff" />
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingBottom: 90,
  },

  logoImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  back: {
    fontSize: 20,
    marginRight: 10,
  },
  backIcon: {
    marginRight: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },

  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 18,
  },

  searchWrapper: {
    marginBottom: 20,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  searchIcon: {
    marginRight: 8,
  },

  search: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },

  sectionTitleSmall: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    color: colors.textSoft,
  },

  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  category: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
  },

  categoryIcon: {
    marginBottom: 6,
  },

  categoryText: {
    color: '#fff',
    fontWeight: '700',
  },

  productCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    marginBottom: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },
  productCardImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  productCardContent: {
    padding: 12,
  },
  productCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  productCardBadge: {
    backgroundColor: colors.secondary,
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontSize: 10,
    fontWeight: '700',
  },
  productCardName: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  productCardSeller: {
    color: colors.textSoft,
    fontSize: 12,
    marginBottom: 10,
  },
  productCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productCardTime: {
    fontSize: 12,
    color: colors.textSoft,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 6,
  },
  productsGrid: {
    marginTop: 8,
  },

  product: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  productImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#eee',
    overflow: 'hidden',
    marginRight: 10,
  },

  productImageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  productName: {
    fontSize: 12,
    fontWeight: '700',
  },

  productSeller: {
    fontSize: 11,
    color: colors.textSoft,
  },

  productTime: {
    fontSize: 10,
    color: colors.textSoft,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 20,
    left: 60,
    right: 60,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  activeButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});