import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../styles/colors';
import ScreenContainer from '../components/common/ScreenContainer';

export default function ProductDetailScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  const pricePerKg = 1.7;

  const total = useMemo(() => {
    return (quantity * pricePerKg).toFixed(2).replace('.', ',');
  }, [quantity]);

  const increaseQuantity = () => {
    setQuantity((prev) => +(prev + 0.5).toFixed(1));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      const next = +(prev - 0.5).toFixed(1);
      return next < 0.5 ? 0.5 : next;
    });
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* HEADER */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color={colors.text}
                style={styles.backIcon}
              />
            </TouchableOpacity>

            <Text style={styles.title}>Detalle del producto</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../assets/images/logo-harbest.png')}
                style={styles.logoImage}
              />
            </TouchableOpacity>
          </View>

          {/* IMAGEN */}
          <View style={styles.imageCard}>
            <Image
              source={require('../../assets/images/comida/naranjas.webp')}
              style={styles.productImage}
            />

            <View style={styles.floatingTag}>
              <Ionicons name="leaf" size={13} color={colors.primary} />
              <Text style={styles.floatingTagText}>Ecológico</Text>
            </View>
          </View>

          {/* CONTENIDO */}
          <View style={styles.infoCard}>
            <View style={styles.topRow}>
              <View style={styles.titleBlock}>
                <Text style={styles.productTitle}>Naranjas Valencianas</Text>
                <Text style={styles.productSubtitle}>
                  Dulces, frescas y de proximidad
                </Text>
              </View>

              <View style={styles.priceBadge}>
                <Text style={styles.priceBadgeValue}>1,70€</Text>
                <Text style={styles.priceBadgeUnit}>/ kg</Text>
              </View>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.sellerBox}>
                <View style={styles.avatar}>
                  <Ionicons name="person" size={14} color="#fff" />
                </View>

                <View>
                  <Text style={styles.metaLabel}>Vendido por</Text>
                  <Text style={styles.sellerName}>Granjas Jaume</Text>
                </View>
              </View>

              <View style={styles.ratingBox}>
                <Ionicons name="star" size={14} color="#F5B301" />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Descripción</Text>
            <Text style={styles.description}>
              Naranjas de cultivo ecológico, jugosas y con un sabor natural
              intenso. Recolectadas directamente del productor para garantizar
              frescura y comercio justo.
            </Text>

            <View style={styles.extraInfoRow}>
              <View style={styles.infoPill}>
                <Ionicons
                  name="location-outline"
                  size={14}
                  color={colors.primary}
                />
                <Text style={styles.infoPillText}>Xàtiva</Text>
              </View>

              <View style={styles.infoPill}>
                <Ionicons
                  name="time-outline"
                  size={14}
                  color={colors.primary}
                />
                <Text style={styles.infoPillText}>Entrega rápida</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Cantidad</Text>

            <View style={styles.quantityRow}>
              <View style={styles.quantitySelector}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={decreaseQuantity}
                  activeOpacity={0.8}
                >
                  <Ionicons name="remove" size={18} color={colors.text} />
                </TouchableOpacity>

                <Text style={styles.quantityValue}>{quantity.toFixed(1)} kg</Text>

                <TouchableOpacity
                  style={[styles.quantityButton, styles.quantityButtonPrimary]}
                  onPress={increaseQuantity}
                  activeOpacity={0.8}
                >
                  <Ionicons name="add" size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.bottomBar}>
          <View>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>{total}€</Text>
          </View>

          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => navigation.navigate('Cart')}
            activeOpacity={0.85}
          >
            <Ionicons name="cart-outline" size={18} color="#fff" />
            <Text style={styles.addToCartText}>Añadir al carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8F4',
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 130,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  backIcon: {
    marginRight: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    color: colors.text,
  },

  logoImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },

  imageCard: {
    position: 'relative',
    marginBottom: 18,
  },

  productImage: {
    width: '100%',
    height: 260,
    borderRadius: 28,
    resizeMode: 'cover',
  },

  floatingTag: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  floatingTagText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
  },

  titleBlock: {
    flex: 1,
    paddingRight: 10,
  },

  productTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 6,
  },

  productSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textSoft,
  },

  priceBadge: {
    backgroundColor: '#EEF5E3',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 84,
  },

  priceBadgeValue: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
  },

  priceBadgeUnit: {
    fontSize: 12,
    color: colors.textSoft,
    marginTop: 2,
  },

  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sellerBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#69C6BE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  metaLabel: {
    fontSize: 11,
    color: colors.textSoft,
    marginBottom: 2,
  },

  sellerName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },

  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E6',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 999,
  },

  ratingText: {
    marginLeft: 5,
    fontSize: 13,
    fontWeight: '700',
    color: '#8B6A00',
  },

  divider: {
    height: 1,
    backgroundColor: '#F0F0F0',
    marginVertical: 18,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.textSoft,
    marginBottom: 14,
  },

  extraInfoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 18,
  },

  infoPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8F4',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 10,
    marginBottom: 8,
  },

  infoPillText: {
    marginLeft: 6,
    fontSize: 13,
    color: colors.text,
    fontWeight: '600',
  },

  quantityRow: {
    marginTop: 4,
  },

  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F8F4',
    borderRadius: 20,
    padding: 8,
  },

  quantityButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityButtonPrimary: {
    backgroundColor: colors.primary,
  },

  quantityValue: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.text,
  },

  bottomBar: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 6,
  },

  totalLabel: {
    fontSize: 12,
    color: colors.textSoft,
    marginBottom: 3,
  },

  totalPrice: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.primary,
  },

  addToCartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 18,
  },

  addToCartText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 8,
  },
});