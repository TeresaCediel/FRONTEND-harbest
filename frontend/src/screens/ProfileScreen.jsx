import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../styles/colors';
import ScreenContainer from '../components/common/ScreenContainer';

export default function ProfileScreen({ navigation }) {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
          <Text style={styles.title}>Perfil</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../../assets/images/logo-harbest.png')}
              style={styles.headerLogo}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../../assets/images/pepe.jpg')}
            style={styles.avatarImage}
          />
          <Text style={styles.username}>Pepe27</Text>

          <TouchableOpacity style={styles.option}>
            <Ionicons name="person-circle-outline" size={18} color={colors.text} style={styles.optionIcon} />
            <Text style={styles.optionText}>Mis datos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.option, styles.optionActive]}>
            <Ionicons name="heart-outline" size={18} color={colors.primary} style={styles.optionIcon} />
            <Text style={[styles.optionText, styles.optionTextActive]}>Mis Favoritos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Ionicons name="receipt-outline" size={18} color={colors.text} style={styles.optionIcon} />
            <Text style={styles.optionText}>Mis Pedidos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle-outline" size={18} color={colors.text} style={styles.optionIcon} />
            <Text style={styles.helpText}>Centro de Ayuda</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Login')}>
            <Ionicons name="log-out-outline" size={18} color={colors.primary} />
            <Text style={styles.logoutText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="search" size={18} color="#8A8A8A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="star" size={18} color="#8A8A8A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="cart" size={18} color="#8A8A8A" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.activeButton} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 16,
  },
  headerLogo: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 14,
  },
  avatarText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '700',
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginBottom: 14,

    borderWidth: 3,
    borderColor: '#fff',

    shadowColor: colors.primaryLight,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  username: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  optionActive: {
    backgroundColor: '#E7F0D9',
    borderColor: '#D8E6BD',
  },
  optionText: {
    color: colors.text,
    fontWeight: '600',
  },
  optionTextActive: {
    color: colors.primary,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginTop: 16,
  },
  helpText: {
    color: colors.text,
    fontWeight: '600',
  },
  optionIcon: {
    marginRight: 10,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  logoutText: {
    marginLeft: 8,
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },

  bottomBar: {
    position: 'absolute',
    bottom: 20,
    left: 60,
    right: 60,
    backgroundColor: '#fff',
    borderRadius: 74,
    padding: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  activeButton: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 92,
    justifyContent: 'center',
    alignItems: 'center',
  },
});