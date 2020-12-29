import React from 'react';
import { Text, View, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import styles from '../styles/styles';
import colors from '../styles/colors';

const logoPosIni = new Animated.Value(0);

const logoAnimated = {
    opacity: logoPosIni,
}

setTimeout(function () {
    Animated.timing(logoPosIni, { toValue: 1, duration: 2000, useNativeDriver: false }).start();
}, 0)

const buttonPosIni = new Animated.Value(200);

const buttonAnimated = {
    translateY: buttonPosIni,
}


setTimeout(function () {
    Animated.timing(buttonPosIni, { toValue: 0, duration: 1000, useNativeDriver: false }).start();
}, 1000)

export default function Splash({navigation}) {

    function navigateToHome() {
        navigation.navigate('Home');
    }

    return (
        <View style={[styles.container, styles.screenSplash]}>

            <Animated.Text style={[styles.logoTitle, { ...logoAnimated }]}>STAR{'\n'}WARS</Animated.Text>
            <Animated.View style={[styles.line, { ...logoAnimated }]}></Animated.View>
            <Animated.View style={[styles.lineOut, { ...logoAnimated }]}></Animated.View>
            <Animated.Text style={[styles.logoSubtitle, { ...logoAnimated }]}>CHARACTERS</Animated.Text>

            <Animated.View style={{ ...buttonAnimated }}>
                <RectButton style={styles.exploreButton} onPress={navigateToHome}>
                    <Text style={styles.explore}>EXPLORE</Text>
                    <FontAwesome name="long-arrow-right" size={20} color={colors.yellow} />
                </RectButton>
            </Animated.View>
        </View>
    )
}