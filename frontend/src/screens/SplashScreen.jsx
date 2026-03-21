import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import colors from '../styles/colors';

export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/images/logo-harbest.png')}
            style={styles.logoImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Bienvenido a Harbest Online Shop</Text>
        <Text style={styles.introText}>Descubre productos frescos y naturales. Selecciona tu rol para continuar.</Text>

        <TouchableOpacity
          style={[styles.roleButton, styles.userButton]}
          onPress={() => navigation.navigate('Login', { role: 'user' })}
        >
          <Text style={styles.roleButtonText}>Soy Usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, styles.adminButton]}
          onPress={() => navigation.navigate('Login', { role: 'admin' })}
        >
          <Text style={styles.roleButtonText}>Soy Agricultor</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.landscape}>
        <View style={styles.hill1} />
        <View style={styles.hill2} />
        <View style={styles.hill3} />
      </View>

      <View style={styles.dots}>
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 42,
    marginBottom: 28,
  },
  logoImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  content: {
    paddingHorizontal: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 18,
  },
  input: {
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 14,
    color: colors.text,
  },
  passwordWrapper: {
    backgroundColor: colors.inputBg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  showText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  successText: {
    fontSize: 12,
    color: colors.primary,
    textAlign: 'right',
    marginBottom: 14,
  },
  mainButton: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 14,
  },
  mainButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  roleButton: {
    borderRadius: 999,
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 14,
  },
  userButton: {
    backgroundColor: colors.primary, // verde
  },
  adminButton: {
    backgroundColor: colors.secondary, // naranja
  },
  roleButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  introText: {
    fontSize: 16,
    color: colors.textSoft,
    textAlign: 'center',
    marginBottom: 24,
  },
  registerText: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.textSoft,
  },
  registerLink: {
    color: colors.primary,
    fontWeight: '700',
  },
  landscape: {
    marginTop: 'auto',
    height: 120,
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  hill1: {
    position: 'absolute',
    bottom: 14,
    width: 260,
    height: 55,
    borderRadius: 999,
    backgroundColor: '#EAF1D5',
  },
  hill2: {
    position: 'absolute',
    bottom: 8,
    left: 15,
    width: 180,
    height: 45,
    borderRadius: 999,
    backgroundColor: '#EDF4DB',
    transform: [{ rotate: '-8deg' }],
  },
  hill3: {
    position: 'absolute',
    bottom: 4,
    right: 15,
    width: 180,
    height: 42,
    borderRadius: 999,
    backgroundColor: '#E3ECC8',
    transform: [{ rotate: '7deg' }],
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 18,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: colors.dotInactive,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: colors.primary,
  },
});