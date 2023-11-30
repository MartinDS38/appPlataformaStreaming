import React from "react";

import { Text, Image, View, ScrollView } from "react-native";

import { useState, useEffect } from 'react';

import { format } from 'date-fns';

import styles from "../components/styles";

import config from '../config/config';
import CommentBox from "../components/CommentBox";
import VideoComponent from "../components/VideoComponent";
import FooterBar from "../components/FooterBar";

const Detalles = ({ route, navigation }) => {
    const { itemId } = route.params;
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        const res = await fetch(config.urlApi + '/documentales/' + itemId)
            .then(response => response.json()).then( // pasar respuesta de la API a json
                json => {
                    console.log('fetch.....');
                    console.log(json)
                    setData(json)
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

    const formatDate = (sqlDate) => {
        // Convierte la cadena SQL en un objeto Date
        const dateObject = new Date(sqlDate);

        // Utiliza la función format de date-fns para formatear la fecha
        const formattedDate = format(dateObject, 'dd/MM/yyyy', { awareOfUnicodeTokens: true });

        return formattedDate;
    };

    return (
        <View style={styles.containerDetalles}>
            <ScrollView style={{marginTop: 80}}>
                {isLoading ?
                    (<Text>Cargando...</Text>) :
                    (<View style={{ marginBottom: 400 }}>
                        <View style={styles.detalles}>
                            <Image
                                source={{ uri: data.img }}
                                style={styles.imgdetalles}
                            />
                            <Text style={styles.titulo}>{data.titulo}</Text>
                            <Text style={styles.descripcion}>{data.descripcion}</Text>
                            <Text style={styles.subtitle}>Fecha de estreno: {formatDate(data.fecha_estreno)}</Text>
                        </View>
                        <VideoComponent />
                        <CommentBox />
                    </View>)
                }
                
            </ScrollView>
            <FooterBar />
        </View>
    )
}

export default Detalles