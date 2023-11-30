import React from 'react';

import { Text, Image, Pressable } from 'react-native';

import styles from './styles';

const Item = ({id, title, image, estreno, navigation }) => (
  <Pressable style={styles.item} onPress={() => {
    navigation.push("Detalles", {itemId: id})
  }}>
    {/* LA IMAGEN NECESITA SI O SI ANCHO Y ALTO EN EL ESTILO PARA RENDERIZARSE */}
    <Image
      source={{ uri: image }}
      style={styles.image}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>Fecha de estreno: {estreno}</Text>
  </Pressable>
);

export default Item