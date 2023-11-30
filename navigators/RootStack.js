import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './../screens/Home';
import Login from './../screens/Login';
import Detalles from '../screens/Detalles';
import Estrenados from '../screens/Estrenados';
import Proximos from '../screens/Proximos';

const Stack = createStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled: {
                        backgroundColor: 'transparent'
                    },
                    headerTransparent: 'true',
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
                <Stack.Screen name="Detalles" component={Detalles}/>
                <Stack.Screen name="Estrenados" component={Estrenados}/>
                <Stack.Screen name="Proximos" component={Proximos}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;