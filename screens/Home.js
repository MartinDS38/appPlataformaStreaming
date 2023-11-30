import React from "react";

import { Text, ScrollView, View } from 'react-native';

import Lista from "../components/Lista";

import FooterBar from "../components/FooterBar";

import styles from "../components/styles";

import config from '../config/config';

import { useState, useEffect } from 'react';

const Home = ({ navigation }) => {
  const [recLoading, setRecLoading] = useState(false)
  const [recientes, setRecientes] = useState(null)

  const [proxLoading, setProxLoading] = useState(false)
  const [proximos, setProximos] = useState(null)

  const fetchRecientes = async () => {
    const res = await fetch(config.urlApi + '/recientes/5')
      .then(response => response.json()).then( // pasar respuesta de la API a json
        json => {
          console.log('fetch.....');
          console.log(json.data)
          setRecientes(json.data)
          setRecLoading(false) // Ya terminó de cargar la data
        }
      ).catch(error => {
        console.error(error)
      })
  }

  const fetchProximos = async () => {
    const res = await fetch(config.urlApi + '/proximos/5')
      .then(response => response.json()).then( // pasar respuesta de la API a json
        json => {
          console.log('fetch.....');
          console.log(json.data)
          setProximos(json.data)
          setProxLoading(false) // Ya terminó de cargar la data
        }
      ).catch(error => {
        console.error(error)
      })
  }


  useEffect(() => {
    setRecLoading(true) // La data todavía no llegó
    setProxLoading(true)
    console.log('useEffect.....');
    fetchRecientes()
    fetchProximos()
  }, [])

  return (
    <View style={styles.home}>
      {console.log('render..........')}

      <ScrollView style={styles.contenidoHome}>
        <View>
        {recLoading ?
          <Text>Cargando...</Text> :
          <Lista titulo='Recientes' data={recientes} pag="Estrenados" navigation={navigation} />
        }
        </View>
        <View>
        {proxLoading ?
          (<Text>Cargando...</Text>) :
          <Lista titulo='Próximos' data={proximos} pag="Proximos" navigation={navigation} />
        }
        </View>
      </ScrollView>

      <FooterBar />
    </View>
  );
}

export default Home;