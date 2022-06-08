import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles'
import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import Lista from './listaVotos'

export default function Voting({ navigation }) {

    const [checked, setChecked] = React.useState('');

    function setVote(){
        if(checked === 'first'){
            Lista[0]['qtdVote'] += 1
            navigation.navigate('Result')
        }
        else if(checked === 'second'){
            Lista[1]['qtdVote'] += 1
            navigation.navigate('Result')
        }
        else if(checked === 'third'){
            Lista[2]['qtdVote'] += 1
            navigation.navigate('Result')
        }
        else if(checked === 'fourth'){
            Lista[3]['qtdVote'] += 1
            navigation.navigate('Result')
        }
        else if(checked === 'fifth'){
            Lista[4]['qtdVote'] += 1
            navigation.navigate('Result')
        }
        else{
            console.log('erro')
        }
    }

    return (
        <View style={styles.page}>
            <View style={styles.mainContent}>
                <View>
                    <Image source={require('../../assets/angry.png')} style={styles.img} />
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                    />
                </View>
                <View>
                    <Image source={require('../../assets/not_so_angry.png')} style={styles.img} />
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                    />
                </View>
                <View>
                    <Image source={require('../../assets/medium.png')} style={styles.img} />
                    <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')}
                    />
                </View>
                <View>
                    <Image source={require('../../assets/happy.png')} style={styles.img} />
                    <RadioButton
                        value="fourth"
                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('fourth')}
                    />
                </View>
                <View>
                    <Image source={require('../../assets/very_happy.png')} style={styles.img} />
                    <RadioButton
                        value="fifth"
                        status={checked === 'fifth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('fifth')}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={setVote}><Text style={styles.btnTxt}>Confirmar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}><Text style={styles.btnTxt}>Voltar</Text></TouchableOpacity>
        </View>
    );
}