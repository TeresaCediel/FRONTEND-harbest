# Harbest – Marketplace Agrícola

Aplicación móvil desarrollada con React Native y Expo orientada a la compra de productos agrícolas directamente de productores, con backend en Node.js.

---

## Descripción

Harbest es una plataforma completa (Frontend Mobile + Backend) centrada en la visualización y compra de productos frescos como frutas, verduras y especias, con una interfaz limpia, moderna y adaptada a dispositivos móviles.

Actualmente el proyecto incluye:

**Frontend (Mobile):**
* Pantalla de Login con rol selector (Usuario/Agricultor)
* Pantalla principal (Home) con productos recomendados
* Pantalla de Perfil con opciones de usuario
* Navegación fluida entre pantallas
* Diseño moderno con tarjetas de producto
* Barra de navegación inferior

**Backend:**
* API REST con Node.js
* Base de datos conectada
* Sistem de autenticación

---

## Tecnologías utilizadas

### Frontend (Mobile)
* React Native
* Expo
* React Navigation
* JavaScript (ES6+)
* StyleSheet para estilos nativos
* Ionicons para iconografía

### Backend
* Node.js
* Express
* Base de datos (según configuración)

---

## Instalación y Ejecución

### Backend

1. **Instalar dependencias** (librerías en `package.json`):
```bash
npm install
```

2. **Iniciar el Backend**:
```bash
npm start
```

Con **nodemon** configurado, solo guardar los cambios es suficiente para recargar automáticamente.

---

### Frontend (Mobile)

1. **Acceder a la carpeta frontend**:
```bash
cd harbest_onlineShop/frontend
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Iniciar la aplicación**:
```bash
npx expo start
```

---

## Cómo probar el Frontend Mobile

### En dispositivo móvil (recomendado)

1. Descargar la aplicación **Expo Go** en el móvil
2. Escanear el código QR generado en la terminal
3. La aplicación se abrirá automáticamente

---

### En navegador (desarrollo)

Presionar:
```bash
w
```

Nota: la aplicación está diseñada para móvil. Se recomienda usar vista responsive en el navegador.

---

## Estructura del proyecto

```
harbest_onlineShop/
├── backend/                    (Node.js API)
│   ├── package.json
│   └── ...
│
├── frontend/                   (React Native + Expo)
│   ├── assets/
│   │   └── images/
│   │       ├── logo-harbest.png
│   │       ├── agricultor-logo.png
│   │       └── comida/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── common/
│   │   │
│   │   ├── screens/
│   │   │   ├── SplashScreen.jsx
│   │   │   ├── LoginScreen.jsx
│   │   │   ├── HomeScreen.jsx
│   │   │   ├── ProfileScreen.jsx
│   │   │   └── ProductDetailScreen.jsx
│   │   │
│   │   ├── navigation/
│   │   ├── styles/
│   │   ├── context/
│   │   ├── services/
│   │   └── utils/
│   │
│   ├── App.js
│   ├── app.json
│   └── package.json
│
└── README.md
```

---

## Diseño de la interfaz

La aplicación sigue una estética moderna y profesional basada en:

* Colores naturales y suaves
* Fondo claro tipo beige
* Componentes con bordes redondeados
* Espaciado amplio y limpio
* Interfaz optimizada para experiencia móvil

**Colores principales:**
* Verde (Primary): #668B0D
* Naranja (Secondary): #C45555
* Fondo: #F4EEEA
* Blanco: #FEFEFE

---

## Pantallas implementadas

### Splash Screen
* Logo de Harbest
* Selector de rol (Usuario / Agricultor)
* Mensajes de bienvenida

### Login
* Tema dinámico según rol seleccionado
* Logo personalizado (Usuario/Agricultor)
* Validación de email y contraseña

### Home
* Saludo personalizado ("Hola, [Usuario]")
* Buscador de productos
* Sección de categorías
* Tarjetas de productos recomendados con badge
* Barra de navegación inferior

### Profile
* Avatar y nombre de usuario
* Opciones: Mis datos, Favoritos, Pedidos
* Centro de ayuda
* Cerrar sesión

---

## Próximas funcionalidades

* Conexión con API del Backend
* Pantalla de detalle de producto
* Carrito de compra
* Sistema de autenticación real
* Perfil de usuario completo
* Sistema de favoritos
* Historial de pedidos

---

## Despliegue (Render)

Al conectar este repositorio a Render, es necesario configurar **dos servicios distintos**:

1. **Servicio Backend**: ejecuta `npm start` en la raíz
2. **Servicio Frontend**: ejecuta `npx expo start` en la carpeta `frontend/`

Cada commit disparará el redeploy automático de ambos servicios.

---

## Equipo

* Cristian Burgos Payá
* Teresa Cediel Campillo
* María Escribano Arce
* Pablo Romero Pérez

---

## Estado del proyecto

En desarrollo. Versión funcional con:
- ✅ Splash screen con selector de rol
- ✅ Login dinámico por rol
- ✅ Home moderno con productos
- ✅ Pantalla de Perfil
- ✅ Navegación fluida
- ⏳ Conexión Backend (próximamente)
- ⏳ Sistema de carrito y pedidos (próximamente)

