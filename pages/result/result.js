import { View, Text, Image, TouchableOpacity } from 'react-native';
import Lista from '../voting/listaVotos';
import styles from './styles'

let qtdVoteAngry;
let qtdVoteNot_So_Angry;
let qtdVoteMedium;
let qtdVoteHappy;
let qtdVoteVery_Happy;
let qtdTotal;

export default function Result({ navigation }){

    qtdVoteAngry = Lista[0]['qtdVote']
    qtdVoteNot_So_Angry = Lista[1]['qtdVote']
    qtdVoteMedium = Lista[2]['qtdVote']
    qtdVoteHappy = Lista[3]['qtdVote']
    qtdVoteVery_Happy = Lista[4]['qtdVote']
    qtdTotal = qtdVoteAngry + qtdVoteNot_So_Angry + qtdVoteMedium + qtdVoteHappy + qtdVoteVery_Happy
    qtdVoteAngry = (qtdVoteAngry/qtdTotal)*100
    qtdVoteNot_So_Angry = (qtdVoteNot_So_Angry/qtdTotal)*100
    qtdVoteMedium = (qtdVoteMedium/qtdTotal)*100
    qtdVoteHappy = (qtdVoteHappy/qtdTotal)*100
    qtdVoteVery_Happy = (qtdVoteVery_Happy/qtdTotal)*100

    return(
        <View style={styles.page}>
            <View style={styles.mainContent}>
                <View>
                    <Image source={require('../../assets/angry.png')} style={styles.img} />
                    <Text style={styles.txt}>{qtdVoteAngry.toFixed(2) + '%'}</Text>
                </View>
                <View>
                    <Image source={require('../../assets/not_so_angry.png')} style={styles.img} />
                    <Text style={styles.txt}>{qtdVoteNot_So_Angry.toFixed(2) + '%'}</Text>
                </View>
                <View>
                    <Image source={require('../../assets/medium.png')} style={styles.img} />
                    <Text style={styles.txt}>{qtdVoteMedium.toFixed(2) + '%'}</Text>
                </View>
                <View>
                    <Image source={require('../../assets/happy.png')} style={styles.img} />
                    <Text style={styles.txt}>{qtdVoteHappy.toFixed(2) + '%'}</Text>
                </View>
                <View>
                    <Image source={require('../../assets/very_happy.png')} style={styles.img} />
                    <Text style={styles.txt}>{qtdVoteVery_Happy.toFixed(2) + '%'}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}><Text style={styles.btnTxt}>Home</Text></TouchableOpacity>
        </View>
    );
}