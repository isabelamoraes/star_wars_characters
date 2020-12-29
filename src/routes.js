import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './pages/Splash';
import Home from './pages/Home';
import ListCharacters from './pages/ListCharacters';
import Character from './pages/Character';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' }}}>
                <Screen
                    name="Splash"
                    component={Splash}
                />

                <Screen
                    name="Home"
                    component={Home}
                />

                <Screen
                    name="ListCharacters"
                    component={ListCharacters}
                />

                <Screen
                    name="Character"
                    component={Character}
                />
            </Navigator>
        </NavigationContainer>
    );
}