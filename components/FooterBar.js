import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const FooterBar = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate("Busqueda");
  };

  const handleFavoritesPress = () => {
    navigation.navigate("Favoritos");
  };

  const handleVistosPress = () => {
    navigation.navigate("Vistos");
  }

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

      <TouchableOpacity style={styles.footerOption} onPress={handleVistosPress}>
        <Ionicons name="eye" size={24} color="blue" />
        <Text>Vistos</Text>
      </TouchableOpacity>

    </View>
  );
};

export default FooterBar;