import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Home({ navigation }){
    return(
    <View style={styles.mainContent}>
        <View style={styles.header}>
            <Text style={styles.title}>Pesquisa de satisfação</Text>
        </View>
        <View style={styles.mainTxt}>
            <Text style={styles.paragraph}>
                Com o intuito de melhorar os serviços que esta
                concessionária oferece, solicitamos a sua contribuição com essa pesquisa.
                O objetivo é conhecer a percepção de nossos clientes em relação ao atendimento
                e aprimorá-lo ainda mais. 
            </Text>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Voting')}><Text style={styles.btnTxt}>Continuar</Text></TouchableOpacity>
        </View>
    </View>
    );
};

