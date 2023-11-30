import React from "react";

import { Text, View } from "react-native";

import { useState, useEffect } from 'react';

import Agenda from "../components/Agenda";

import styles from "../components/styles";

import config from '../config/config';
import FooterBar from "../components/FooterBar";

const Proximos = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        const res = await fetch(config.urlApi + '/proximos')
            .then(response => response.json()).then( // pasar respuesta de la API a json
                json => {
                    console.log('fetch.....');
                    console.log(json.data)
                    setData(json.data)
                    setIsLoading(false) // Ya terminó de cargar la data
                }
            ).catch(error => {
                console.error(error)
            })
    }

    useEffect(() => {
        setIsLoading(true) // La data todavía no llegó
        console.log('useEffect.....');
        fetchData()
    }, [])

    return (
        <View style={styles.container}>
            {isLoading ?
                (<Text>Cargando...</Text>) :
                (<View style={styles.pantallaAgenda}>
                    <Agenda titulo="Próximos estrenos" data={data} navigation={navigation} />
                    <FooterBar/>
                </View>)
            }
        </View>
    )
}

export default Proximos