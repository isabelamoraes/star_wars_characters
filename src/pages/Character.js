import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useIsFocused } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import styles from '../styles/styles';
import colors from '../styles/colors';

import api from '../services/api';

export default function Character({ navigation }) {

    const route = useRoute();
    const isFocused = useIsFocused();

    const id = route.params.id;

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, [loading, isFocused]);

    async function loadData() {
        //load characters from api
        const response = await api.get(`id/${id}.json`, {});
        setData(response.data);

        setLoading(true);

    }

    function navigateToHome() {
        navigation.navigate('Home');
    }
    

    if (!loading) {
        return (
            <View style={[styles.container]}>

                <LinearGradient
                    colors={['transparent', '#000']}
                    style={{ height: '100%', width: '100%' }}
                />

                <View style={styles.infoCharacter}>
                    <ShimmerPlaceHolder autoRun={true} visible={true} />
                    <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer]} colorShimmer={colors.shimmer} />
                    <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer]} colorShimmer={colors.shimmer} />

                    <View style={styles.boxCharacter}>
                        <View style={styles.boxCharacterInfo}>
                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Gender</Text>
                                <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer]} colorShimmer={colors.shimmer} />
                            </View>

                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Height</Text>
                                <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer]} colorShimmer={colors.shimmer} />
                            </View>

                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Mass</Text>
                                <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer]} colorShimmer={colors.shimmer} />
                            </View>
                        </View>

                        <View style={styles.boxCharacterInfo}>
                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Last affiliation</Text>
                                <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer]} colorShimmer={colors.shimmer} />
                            </View>

                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Character Species</Text>
                                <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer]} colorShimmer={colors.shimmer} />
                            </View>
                        </View>

                        <RectButton style={styles.locationItem} onPress={navigateToHome}>
                            <FontAwesome name="long-arrow-left" size={14} color={colors.yellow} />
                            <Text style={[styles.locationText, { fontFamily: 'Rubik_700Bold' }]}>BACK</Text>
                        </RectButton>
                    </View>
                </View>
            </View> 
        )

    } else {

        return (

            <View style={[styles.container]}>

                <LinearGradient
                    colors={['transparent', '#000']}
                    style={{ height: '100%', width: '100%' }}
                />

                <Image style={styles.imageCharacter} resizeMode={data.species == "droid" ? 'contain' : 'cover'} source={{ uri: data.image }} />

                <View style={styles.infoCharacter}>
                
                    <Text style={styles.characterTitle}>{data.name}</Text>

                    {data.homeworld != null ?
                        <View style={styles.locationItem} >
                            <FontAwesome name="map-marker" size={12} color={colors.yellow} />
                            <Text style={styles.locationText}>{data.homeworld}</Text>
                        </View>

                        : null}

                    <View style={styles.boxCharacter}>
                        <View style={styles.boxCharacterInfo}>
                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Gender</Text>
                                <Text style={styles.infoValue}>{data.gender}</Text>
                            </View>

                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Height</Text>
                                <Text style={styles.infoValue}>{data.height}</Text>
                            </View>

                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Mass</Text>
                                <Text style={styles.infoValue}>{data.mass}</Text>
                            </View>
                        </View>

                        <View style={styles.boxCharacterInfo}>
                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Last affiliation</Text>
                                <Text style={styles.infoValue}>{data.affiliations[data.affiliations.length - 1]}</Text>
                            </View>

                            <View styles={styles.infoItem}>
                                <Text style={styles.infoLabel}>Character Species</Text>
                                <Text style={styles.infoValue}>{data.species}</Text>
                            </View>
                        </View>

                        <RectButton style={styles.locationItem} onPress={navigateToHome}>
                            <FontAwesome name="long-arrow-left" size={14} color={colors.yellow} />
                            <Text style={[styles.locationText, { fontFamily: 'Rubik_700Bold' }]}>BACK</Text>
                        </RectButton>
                    </View>
                </View>
            </View>
        )
    }
}