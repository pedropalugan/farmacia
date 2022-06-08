import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContent:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10vh',
        justifyContent: 'space-between',
        marginLeft: '1vw',
        marginRight: '1vw',
        width: '73vw',
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
        marginTop: '10vh',
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
    txt:{
        fontWeight: 700,
        fontSize: 14,
    },
});

export default styles;