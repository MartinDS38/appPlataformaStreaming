import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import config from '../config/config';

import FooterBar from '../components/FooterBar';

import styles from '../components/styles';
import ListaV from '../components/ListaV';

const Busqueda = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(config.urlApi + '/buscar/' + searchQuery);
                const json = await response.json();
                console.log('fetch.....');
                console.log(json.data);
                setData(json.data);
                setIsLoading(false); // Ya terminó de cargar la data
            } catch (error) {
                console.error(error);
                setIsLoading(false); // Marcar como cargado incluso en caso de error
            }
        };

        if (searchQuery !== '') {
            setIsLoading(true); // Iniciar carga al realizar la búsqueda
            fetchData();
        }
    }, [searchQuery]);

    return (
        <View style={styles.busquedaContainer}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Ingresa tu búsqueda"
                    onChangeText={(text) => setSearchQuery(text)}
                    value={searchQuery}
                />
            </View>
            {(isLoading || searchQuery == "") ? (
                <View style={styles.container}>
                    <Text>No se buscó nada</Text>
                </View>
            ) : (
                <View style={styles.containerListav2}>
                    <ListaV titulo={'Resultados para: "' + searchQuery + '"'} data={data}></ListaV>
                </View>
            )}
            <FooterBar/>
        </View>
    );
};

export default Busqueda;