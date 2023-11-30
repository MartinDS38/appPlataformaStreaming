import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

import styles from '../components/styles';

import config from '../config/config';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSignInPress = async () => {
    const response = await fetch(config.urlApi + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      // El Token se guarda en result.token
      const result = await response.json();
      navigation.push("Home");
    } else {
      setLoginError('Datos incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inicio de sesión</Text>
      <TextInput
        style={styles.campoTexto}
        value={username}
        onChangeText={setUsername}
        placeholder="Nombre de usuario"
      />
      <TextInput
        style={styles.campoTexto}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
      />
      <Button
        title="Iniciar sesión"
        onPress={handleSignInPress}
      />
      <Text style={styles.errorText}>
        {loginError}
      </Text>
    </View>
  );
};

export default Login;