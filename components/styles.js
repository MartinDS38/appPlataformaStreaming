import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#888',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: "hidden",
      },
      home: {
            flex: 1,
            backgroundColor: '#888',
      },
      contenidoHome: {
            marginTop: 60,
      },
      pantallaAgenda: {
            width: '100%',
            marginTop: 100,
      },
      containerDetalles: {
            flex: 1,
            overflow: "scroll",
            backgroundColor: '#888',
            alignItems: 'center',
            justifyContent: 'center',
      },
      listContainer: {
            width: '100%',
            marginBottom: 60,
            backgroundColor: '#ccc',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 10,
            overflow: 'scroll'
      },
      detalles: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#ccc',
            padding: 20,
      },
      imgdetalles: {
            width: 200,
            height: 200,
      },
      commentsContainer: {
            //flex: 1,
            position: "relative",
            padding: 10,
            //top: 100,
      },
      commentInputContainer: {
            flexDirection: 'row',
            marginBottom: 10,
      },
      commentInput: {
            flex: 1,
            marginRight: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 8,
            backgroundColor: '#ccc',
      },
      commentBox: {
            backgroundColor: '#ccc',
            padding: 10,
      },
      commentsHeader: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
      },
      commentItem: {
            padding: 20,
            fontSize: 16,
            marginBottom: 5,
      },
      titulo: {
            fontSize: 24,
      },
      campoTexto: {
            width: '70%',
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderRadius: 20
      },
      errorText: {
            color: '#f00',
            fontWeight: "bold",
      },
      image: {
            width: '100%',
            height: 180,
            marginTop: 4,
            marginBottom: 4,
      },
      // puede ser conveniente cambiar a documental
      item: {
            width: 260,
            height: 240,
            flex: 1,
            borderRadius: 10,
            margin: 20,
            marginTop: 30,
            alignContent: "space-around",
      },
      title: {
            fontSize: 18,
      },
      subtitle: {
            fontSize: 14,
            color: '#444'
      },
      descripcion: {
            fontSize: 16,
            color: '#444'
      },
      footer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#aaa', // Puedes ajustar el color de fondo según tu diseño
            height: 60,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
      },
      footerOption: {
            alignItems: 'center',
      },
      tituloAgenda: {
            fontSize: 24,
      },
      anio: {
            fontSize: 22,
            fontWeight: "bold",
      },
      mes: {
            fontSize: 20,
      },
      containerVideo: {
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
      },
      video: {
            width: '100%',
            aspectRatio: 16 / 9,
      },
})

export default styles