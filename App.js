import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './pages/home/index';
import Voting from './pages/voting/index';
import Result from './pages/result/result'

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Result'>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Voting' component={Voting} />
          <Stack.Screen name='Result' component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

