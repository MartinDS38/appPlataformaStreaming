import React from "react";

import { Text, View, FlatList } from 'react-native';

import Item from "../components/Item";

import styles from "../components/styles";

import { format } from 'date-fns';

const Agenda = ({ titulo, data, navigation }) => {

    const formatDate = (sqlDate) => {
        // Convierte la cadena SQL en un objeto Date
        const dateObject = new Date(sqlDate);

        // Utiliza la función format de date-fns para formatear la fecha
        const formattedDate = format(dateObject, 'dd/MM/yyyy', { awareOfUnicodeTokens: true });

        return formattedDate;
    };

    const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (!data) {
        console.log("Cargando lista...");
        return (<Text>Cargando lista...</Text>)
    }
    else {
        // Organizar la data por año y mes
        const dataOrganizada = [];

        data.forEach((item) => {
            const fechaEstreno = new Date(item.fecha_estreno);
            const anio = fechaEstreno.getFullYear().toString();
            const mes = fechaEstreno.toLocaleString('default', { month: 'long' });
          
            let anioExistente = dataOrganizada.find((element) => element.anio === anio);
          
            if (!anioExistente) {
              anioExistente = {
                anio,
                meses: [],
              };
              dataOrganizada.push(anioExistente);
            }
          
            let mesExistente = anioExistente.meses.find((element) => element.mes === mes);
          
            if (!mesExistente) {
              mesExistente = {
                mes,
                items: [],
              };
              anioExistente.meses.push(mesExistente);
            }
          
            mesExistente.items.push(item);
          });
          
          return (
            <View style={styles.listContainer}>
              <Text style={styles.titulo}>{titulo}</Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataOrganizada}
                renderItem={({ item }) => (
                  <View>
                    <Text style={styles.anio}>{item.anio}</Text>
                    {item.meses.map((mesData) => (
                      <View key={`${item.anio}-${mesData.mes}`}>
                        <Text style={styles.mes}>{capitalizeFirstLetter(mesData.mes)}</Text>
                        <FlatList
                          data={mesData.items}
                          renderItem={({ item }) => (
                            <Item id={item.id} title={item.titulo} image={item.img} estreno={formatDate(item.fecha_estreno)} navigation={navigation} />
                          )}
                          keyExtractor={(item) => item.id}
                        />
                      </View>
                    ))}
                  </View>
                )}
                keyExtractor={(item) => item.anio}
              />
            </View>
          );
    }
}

export default Agenda