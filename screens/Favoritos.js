import React from "react";

import { Text, View, Touc } from "react-native";

import { useState, useEffect } from 'react';

import styles from "../components/styles";

import config from '../config/config';
import FooterBar from "../components/FooterBar";
import ListaV from "../components/ListaV";

const Favoritos = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        const res = await fetch(config.urlApi + '/favoritos/1')
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
                (<View style={styles.containerListav}>
                    <ListaV titulo="Favoritos" data={data} pag="Favoritos" navigation={navigation} />
                </View>)
            }
            <FooterBar navigation={navigation}/>
        </View>
    )
}

export default Favoritos