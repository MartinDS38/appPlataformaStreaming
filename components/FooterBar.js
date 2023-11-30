import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener instalada la librería correspondiente

import styles from './styles';

const FooterBar = () => {
  const handleSearchPress = () => {
    // Lógica cuando se presiona la opción de búsqueda
    console.log('Buscar');
  };

  const handleFavoritesPress = () => {
    // Lógica cuando se presiona la opción de favoritos
    console.log('Favoritos');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerOption} onPress={handleSearchPress}>
        <Ionicons name="search" size={24} color="black" />
        <Text>Buscar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.footerOption} onPress={handleFavoritesPress}>
        <Ionicons name="heart" size={24} color="red" />
        <Text>Favoritos</Text>
      </TouchableOpacity>
      
      {/* Agrega más opciones según tus necesidades */}
    </View>
  );
};

export default FooterBar;