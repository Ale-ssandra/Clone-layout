import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgb(255, 109, 0)',
        width: '100%',
        height: 225,
        marginBottom: 20

    },
    texto: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        flexDirection: 'row',
        padding: 30,
        marginTop: 7,
        fontSize: 17,
        alignContent: 'space-between',
        justifyContent: 'space-evenly',
    },
    textoP: {
        fontSize: 20,
        marginLeft: 30,
        fontWeight: 'bold',
        marginBottom: -6,
    },
    imagem: {
        height: 170,
        width: 117,
        marginBottom: 10,
        borderRadius: 3,

    },
    boxImagem: {
        zIndex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        justifyContent: 'space-evenly',
        height: 470,
        marginTop: 40,

    },
    textoAnime: {
        fontSize: 13,
        width: '107%',
        textAlign: 'left',
        fontWeight: '900',
        marginLeft: 10,
    },
    textoVideo: {
        color: '#C0C0C0',
        marginBottom: 15,
        textAlign: 'left',
        marginLeft: 7,
        fontSize: 12,
    },
    borda: {
        elevation: 1,
        shadowColor: '#4F4F4F',
        borderRadius: 3,
        height: 230,


    },
    bola: {
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'rgb(255, 109, 0)',
        width: 90,
        height: 90,
        borderRadius: 100,
        marginLeft: 280,
        marginTop: 650,

    },
    icons: {
        flexDirection: 'row',
        marginTop: 60,

    }

});