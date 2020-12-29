import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import styles from '../styles/styles';
import colors from '../styles/colors';

import api from '../services/api';

export default function Home({ navigation }) {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [dataHumans, setDataHumans] = useState([]);
    const [dataDroids, setDataDroids] = useState([]);
    const [dataOthers, setDataOthers] = useState([]);

    useEffect(() => {
        loadData();
    }, [loading]);

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

        setDataHumans(data.filter(filterHuman));

        //filter droids
        function filterDroids(item) {
            if (item.species == "droid") {
                return true;
            }
            return false;
        }

        setDataDroids(data.filter(filterDroids));

        //filter others
        function filterOthers(item) {
            if (item.species == "droid" || item.species == "human") {
                return false;
            }
            return true;
        }

        setDataOthers(data.filter(filterOthers));
    }

    function navigateToViewAll(specie) {
        navigation.navigate('ListCharacters', { specie: specie });
    }

    function navigateToCharacter(id) {
        navigation.navigate('Character', { id: id });
    }


    if (!loading) {
        return (
            <View style={[styles.container]}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>STAR WARS</Text>
                    <Text style={styles.headerSubtitle}>CHARACTERS</Text>
                </View>

                <ScrollView>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Humans</Text>

                        <RectButton style={styles.viewAllButton} onPress={() => navigateToViewAll("Humans")}>
                            <Text style={styles.viewAll}>View all</Text>
                            <FontAwesome name="long-arrow-right" size={14} color={colors.gray} />
                        </RectButton>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 10 }}
                    >

                        <ShimmerPlaceHolder autoRun={true} visible={true} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />

                    </ScrollView>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Droids</Text>

                        <RectButton style={styles.viewAllButton} onPress={() => navigateToViewAll("Droids")}>
                            <Text style={styles.viewAll}>View all</Text>
                            <FontAwesome name="long-arrow-right" size={14} color={colors.gray} />
                        </RectButton>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 10 }}
                    >

                        <ShimmerPlaceHolder autoRun={true} visible={true} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />

                    </ScrollView>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Others</Text>

                        <RectButton style={styles.viewAllButton} onPress={() => navigateToViewAll("Others")}>
                            <Text style={styles.viewAll}>View all</Text>
                            <FontAwesome name="long-arrow-right" size={14} color={colors.gray} />
                        </RectButton>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 10 }}
                    >

                        <ShimmerPlaceHolder autoRun={true} visible={true} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />
                        <ShimmerPlaceHolder autoRun={true} visible={loading} style={[styles.shimmer, styles.card]} colorShimmer={colors.shimmer} />

                    </ScrollView>


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

                <ScrollView>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Humans</Text>

                        <RectButton style={styles.viewAllButton} onPress={() => navigateToViewAll("Humans")}>
                            <Text style={styles.viewAll}>View all</Text>
                            <FontAwesome name="long-arrow-right" size={14} color={colors.gray} />
                        </RectButton>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 10 }}
                    >

                        {dataHumans.slice(0, 6).map(character => {
                            return (
                                <RectButton style={styles.card} key={character.id} onPress={() => navigateToCharacter(character.id)}>
                                    <Image style={styles.cardImage} source={{ uri: character.image }}></Image>
                                    <Text style={styles.cardTitle}>{character.name}</Text>
                                    <Text style={styles.cardSubtitle}>{character.affiliations[character.affiliations.length - 1]}</Text>
                                </RectButton>
                            )
                        })}

                    </ScrollView>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Droids</Text>

                        <RectButton style={styles.viewAllButton} onPress={() => navigateToViewAll("Droids")}>
                            <Text style={styles.viewAll}>View all</Text>
                            <FontAwesome name="long-arrow-right" size={14} color={colors.gray} />
                        </RectButton>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 10 }}
                    >

                        {dataDroids.slice(0, 6).map(character => {
                            return (
                                <RectButton style={styles.card} key={character.id} onPress={() => navigateToCharacter(character.id)}>
                                    <Image style={styles.cardImage} resizeMode="contain" source={{ uri: character.image }}></Image>
                                    <Text style={styles.cardTitle}>{character.name}</Text>
                                    <Text style={styles.cardSubtitle}>{character.affiliations[character.affiliations.length - 1]}</Text>
                                </RectButton>
                            )
                        })}

                    </ScrollView>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Others</Text>

                        <RectButton style={styles.viewAllButton} onPress={() => navigateToViewAll("Others")}>
                            <Text style={styles.viewAll}>View all</Text>
                            <FontAwesome name="long-arrow-right" size={14} color={colors.gray} />
                        </RectButton>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingRight: 10 }}
                    >

                        {dataOthers.slice(0, 6).map(character => {
                            return (
                                <RectButton style={styles.card} key={character.id} onPress={() => navigateToCharacter(character.id)}>
                                    <Image style={styles.cardImage} source={{ uri: character.image }}></Image>
                                    <Text style={styles.cardTitle}>{character.name}</Text>
                                    <Text style={styles.cardSubtitle}>{character.affiliations[character.affiliations.length - 1]}</Text>
                                </RectButton>
                            )
                        })}

                    </ScrollView>


                    <View style={{ paddingBottom: 30 }}></View>

                </ScrollView>
            </View>
        )
    }
}