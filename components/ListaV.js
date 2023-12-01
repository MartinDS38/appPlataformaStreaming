import React from "react";

import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import Item from "../components/Item";

import styles from "../components/styles";

import { format } from 'date-fns';

const ListaV = ({ titulo, data, pag, navigation }) => {

    const formatDate = (sqlDate) => {
        // Convierte la cadena SQL en un objeto Date
        const dateObject = new Date(sqlDate);

        // Utiliza la función format de date-fns para formatear la fecha
        const formattedDate = format(dateObject, 'dd/MM/yyyy', { awareOfUnicodeTokens: true });

        return formattedDate;
    };

    if (!data) {
        console.log("Cargando lista...");
        return (<Text>Cargando lista...</Text>)
    }
    else {
        return (
            <View style={styles.listContainer}>
                <TouchableOpacity onPress={() => navigation.push(pag)}>
                    <Text style={styles.titulo}>
                        {titulo}
                    </Text>
                </TouchableOpacity>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => <Item id={item.id} title={item.titulo} image={item.img} estreno={formatDate(item.fecha_estreno)} navigation={navigation} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

export default ListaV