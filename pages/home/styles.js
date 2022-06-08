import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContent:{
        marginTop:'35vh',
        height: '40vh',
        marginRight: '12.5vw',
        marginLeft: '12.5vw',
        backgroundColor: '#24C7E8',
        padding: 10,
        borderRadius: 10,
    },
    header:{
        textAlign: 'center',
    },  
    title:{
        fontWeight: 700,
        fontSize: 26,
        marginBottom: '5vh',
        fontWeight: 700,
        color: 'white'
    },  
    btn:{
        backgroundColor: '#85F989',
        width: '35vw',
        borderRadius:40,
        textAlign: 'center',
        marginLeft: '17.5vw',
        marginRight: '17.5vw',
        marginTop: '5vh',
        paddingBottom: '2vh',
        paddingTop: '2vh',
    },
    btnTxt:{
        color: '#FFF',
        fontWeight: 600,
        fontSize: 18,
    },
    paragraph:{
        color: 'white',
        fontWeight: 600,
    },
});

export default styles;