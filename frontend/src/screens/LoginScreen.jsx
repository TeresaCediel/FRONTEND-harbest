import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import colors from '../styles/colors';
import ScreenContainer from '../components/common/ScreenContainer';

export default function LoginScreen({ navigation }) {
  const route = useRoute();
  const { role } = route.params || {};
  const isAdmin = role === 'admin';
  const themeColors = {
    primary: isAdmin ? colors.secondary : colors.primary,
    text: colors.text,
    textSoft: colors.textSoft,
    inputBg: colors.inputBg,
    border: colors.border,
    white: colors.white,
    background: colors.background,
  };
  const logoSource = isAdmin
    ? require('../../assets/images/agricultor-logo.png')
    : require('../../assets/images/logo-harbest.png');
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={logoSource}
              style={styles.logoImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Iniciar sesión</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.textSoft}
          />

          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Contraseña"
              placeholderTextColor={colors.textSoft}
              secureTextEntry
            />
            <Text style={[styles.showText, { color: themeColors.primary }]}>Mostrar</Text>
          </View>

          <Text style={[styles.successText, { color: themeColors.primary }]}>¡Validado de forma correcta!</Text>

          <TouchableOpacity
            style={[styles.mainButton, { backgroundColor: themeColors.primary }]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={[styles.mainButtonText, { color: themeColors.white }]}>Iniciar sesión</Text>
          </TouchableOpacity>

          <Text style={styles.registerText}>
            ¿No tienes cuenta?{' '}
            <Text style={[styles.registerLink, { color: themeColors.primary }]}>Regístrate</Text>
          </Text>
        </View>

        <View style={styles.landscape}>
          <View style={styles.hill1} />
          <View style={styles.hill2} />
          <View style={styles.hill3} />
        </View>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot, { backgroundColor: themeColors.primary }]} />
          <View style={styles.dot} />
        </View>
      </View>
    </ScreenContainer>
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
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: 999,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLeaf: {
    fontSize: 28,
    color: colors.white,
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