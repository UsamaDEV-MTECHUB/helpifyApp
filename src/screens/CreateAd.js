import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AdButtons from '../constants/AdButtons'
const CreateAd = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <Ionicons
                            onPress={() => navigation.goBack()}
                            name="chevron-back-outline"
                            color={Colors.blackColor}
                            size={hp("3%")} />
                        <Text style={{...styles.bigTextStyle, paddingLeft: hp("2%")}}>Create Ad</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('Delivery')} buttonText="Move and deliver" />
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('Delivery')} buttonText="Cleaning" />
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('Delivery')} buttonText="home and garden" />
                </View>
                <View style={styles.buttonContainer}>
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('Delivery')} buttonText="electrician" />
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('Delivery')} buttonText="hammer" />
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('Delivery')} buttonText="painter" />
                </View>
                <View style={styles.buttonContainer}>
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('Delivery')} buttonText="Exchange and Donate" />
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('Delivery')} buttonText="barber" />
                    <AdButtons width="13%" height="13%" onPress={() => navigation.navigate('MoreItem')} buttonText="others"
                        onPress={() => navigation.navigate('MoreItem')} />

                </View>
            </View>
        </ScrollView>
    )
}

export default CreateAd

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainContainer: {
        flex: 1,
        margin: wp("4%"),
        marginBottom: hp("1%"),
        justifyContent: "space-between"
    },
    headerContainer: {
        margin: wp("0%"),
    },
    header: {
        height: hp("5%"), flexDirection: 'row', alignItems: 'center',
    },
    bigTextStyle: {
        fontSize: RFValue(30),
        color: "#4A4B4D",
    },
    buttonContainer: {
        height: hp("15%"),
        marginTop: hp("10%"),
        flexDirection: "row",
        justifyContent: 'space-between',
        flex: 1
    },

})
