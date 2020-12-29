import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute, useIsFocused } from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import styles from '../styles/styles';
import colors from '../styles/colors';

import api from '../services/api';

export default function ListCharacters({ navigation }) {

    const route = useRoute();
    const isFocused = useIsFocused();

    const specie = route.params.specie;

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);

    useEffect(() => {
        loadData();
    }, [loading, isFocused]);

    async function loadData() {
        //load characters from api
        const response = await api.get('all.json', {});
        setData(response.data);

        setLoading(true);

        //filter humans
        function filterHuman(item) {
            if (item.species == "human") {
                return true;
            }
            return false;
        }

        //filter droids
        function filterDroids(item) {
            if (item.species == "droid") {
                return true;
            }
            return false;
        }

        //filter others
        function filterOthers(item) {
            if (item.species == "droid" || item.species == "human") {
                return false;
            }
            return true;
        }

        //filter specie
        switch (specie) {
            case "Humans":
                setDataFilter(data.filter(filterHuman));
                break;
            case "Droids":
                setDataFilter(data.filter(filterDroids));
                break;
            case "Others":
                setDataFilter(data.filter(filterOthers));
                break;
            default:
                break;
        }

    }

    function navigateToCharacter(id) {
        navigation.navigate('Character', { id: id });
    }

    function navigateToHome() {
        navigation.navigate('Home');
    }
    

    if (!loading) {
        return (
            <View style={[styles.container]}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>STAR WARS</Text>
                    <Text style={styles.headerSubtitle}>CHARACTERS</Text>
                </View>

                <ScrollView
                    style={styles.scrollListCharacters}
                >

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{specie}</Text>

                        <RectButton style={styles.viewAllButton} onPress={navigateToHome}>
                            <Text style={styles.sectionTitle}>Home </Text>
                            <FontAwesome name="home" size={18} color={colors.white} />
                        </RectButton>
                    </View>

                    <View style={styles.listCharacters}>
                        <ShimmerPlaceHolder autoRun={true} visible={true} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card, styles.cardSmall]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card, styles.cardSmall]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card, styles.cardSmall]} colorShimmer={colors.shimmer} />

                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card, styles.cardSmall]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card, styles.cardSmall]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card, styles.cardSmall]} colorShimmer={colors.shimmer} />

                    </View>

                    <View style={{ paddingBottom: 30 }}></View>
                </ScrollView>
            </View>
        )

    } else {
        return (
            <View style={[styles.container]}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>STAR WARS</Text>
                    <Text style={styles.headerSubtitle}>CHARACTERS</Text>
                </View>

                <ScrollView
                    style={styles.scrollListCharacters}
                >

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{specie}</Text>

                        <RectButton style={styles.viewAllButton} onPress={navigateToHome}>
                            <Text style={styles.sectionTitle}>Home </Text>
                            <FontAwesome name="home" size={18} color={colors.white} />
                        </RectButton>
                    </View>

                    <View style={styles.listCharacters}>
                        {dataFilter.map(character => {
                            return (
                                <RectButton style={[styles.card, styles.cardSmall]} key={character.id} onPress={() => navigateToCharacter(character.id)}>
                                    <Image style={[styles.cardImage, styles.cardSmallImage]} resizeMode={specie == "Droids" ? 'contain' : 'cover'} source={{ uri: character.image }}></Image>
                                    <Text style={[styles.cardTitle]}>{character.name}</Text>
                                    <Text style={[styles.cardSubtitle]}>{character.affiliations[character.affiliations.length - 1]}</Text>
                                </RectButton>
                            )
                        })}
                    </View>

                    <View style={{ paddingBottom: 30 }}></View>
                </ScrollView>
            </View>
        )
    }
}

