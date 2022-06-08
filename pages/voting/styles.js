import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContent:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10vh',
        width: '60vw',
        justifyContent: 'space-between',
    },
    img:{
        height: 44,
        width: 44,
        borderRadius: 50,
    },
    btn:{
        width: '35vw',
        height: 30,
        backgroundColor: '#FFF',
        textAlign: 'center',
        borderRadius: 15,
        marginTop: '2.5vh',
    },
    btnTxt:{
        color: '#000',
        fontWeight: 700,
        fontSize: 20,
    },
    page:{
        marginTop:'35vh',
        height: '40vh',
        marginRight: '12.5vw',
        marginLeft: '12.5vw',
        backgroundColor: '#7F0FF7',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
});

export default styles;