import { Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { Rubik_900Black } from '@expo-google-fonts/rubik';
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from './colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    screenSplash: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    logoTitle: {
        color: colors.yellow,
        fontFamily: 'Rubik_900Black',
        fontSize: 100
    },
    logoSubtitle: {
        color: colors.white,
        fontFamily: 'Karla_700Bold',
        fontSize: 24,

        marginTop: -17,
        backgroundColor: colors.black
    },
    line: {
        width: '70%',
        height: 3,
        backgroundColor: colors.white,
        marginTop: -130,
    },
    lineOut: {
        width: '45%',
        height: 6,
        backgroundColor: colors.black,
        marginTop: -5
    },
    exploreButton: {
        marginTop: 300,
        alignContent: 'flex-end',
        flexDirection: 'row',
    },
    explore: {
        color: colors.yellow,
        fontFamily: 'Rubik_700Bold',
        fontSize: 16,
        marginRight: 10,
    },
    header: {
        paddingTop: 50,
        width: '100%',
        backgroundColor: colors.black,
        alignItems: 'center',
    },
    headerTitle: {
        color: colors.yellow,
        fontFamily: 'Rubik_900Black',
        fontSize: 20,
    },
    headerSubtitle: {
        color: colors.white,
        fontFamily: 'Karla_700Bold',
        fontSize: 16,
        paddingBottom: 10
    },
    section: {
        padding: 10,
        paddingTop: 40,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        color: colors.white,
        fontFamily: 'Karla_700Bold',
        fontSize: 16,
        alignSelf: 'flex-start'
    },
    viewAllButton: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    viewAll: {
        fontFamily: 'Karla_700Bold',
        fontSize: 14,
        color: colors.gray,
        marginRight: 10
    },
    card: {
        width: 150,
        height: 230,
        backgroundColor: colors.darkGray,
        borderRadius: 10,
        marginLeft: 10
    },
    cardImage: {
        width: 150,
        height: 170,
        backgroundColor: colors.darkGray,
        borderRadius: 10,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    cardTitle: {
        paddingTop: 8,
        paddingHorizontal: 10,
        fontFamily: 'Karla_700Bold',
        color: colors.white,
        fontSize: 14
    },
    cardSubtitle: {
        paddingHorizontal: 10,
        fontFamily: 'Karla_400Regular',
        color: colors.gray,
        fontSize: 12
    },
    cardSmall: {
        width: 115,
        marginBottom: 10,
    },
    cardSmallImage: {
        width: 115,
        height: 140
    },
    listCharacters: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imageCharacter: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        zIndex: -2
    },
    infoCharacter: {
        height: 300,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    boxCharacter: {
        height: 230,
        backgroundColor: colors.darkGray,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        bottom: 0,
        paddingTop:20,
        paddingHorizontal:40
    },
    characterTitle:{
        fontFamily: 'Karla_700Bold',
        fontSize:24,
        color:colors.white,
        flex:1,
        textAlign:'center'
    },
    locationItem: {
        alignContent: 'flex-end',
        flexDirection: 'row',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    locationText:{
        fontFamily: 'Karla_700Bold',
        fontSize:12,
        color:colors.yellow,
        marginLeft:5,
        textTransform: 'uppercase'
    },
    boxCharacterInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLabel:{
        fontFamily: 'Karla_400Regular',
        fontSize:14,
        color:colors.gray,
        textAlign:'center',    
    },
    infoValue:{
        fontFamily: 'Karla_700Bold',
        fontSize:20,
        color:colors.white,
        marginBottom:20,
        textAlign:'center',
        textTransform: 'capitalize',
        maxWidth:150
    },
    shimmer:{
        width:'90%',
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom:5,
        height:30,
        opacity:0.1
    },
})