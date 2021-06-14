import React, { useState } from 'react'
import { FlatList, ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'

const AdButtons = ({ navigation }) => {
    const [listItem, setListItem] = useState([
        { id: "1", title: "More Item" },
        { id: "2", title: "More Item" },
        { id: "3", title: "More Item" },
        { id: "4", title: "More Item" },
        { id: "5", title: "More Item" },
        { id: "6", title: "More Item" },
        { id: "7", title: "More Item" },
        { id: "8", title: "More Item" },
        { id: "9", title: "More Item" },
        { id: "10", title: "More Item" },
        { id: "11", title: "More Item" },
    ])
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.header}>
                        <Ionicons
                            onPress={() => navigation.goBack()}
                            name="chevron-back-outline"
                            color={Colors.blackColor}
                            size={hp("3%")} />
                        <Text style={{ ...styles.bigTextStyle, paddingLeft: hp("2%") }}>More</Text>
                    </View>
                </View>
                <FlatList
                    data={listItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Delivery')}
                                style={{
                                    ...styles.bButton,
                                    height: hp("13%"),
                                }}>
                                <View style={styles.insideBButton}>
                                    <View style={styles.iconContainer}>
                                        <Image
                                            style={{ height: '100%', width: '100%', resizeMode: "contain" }}
                                            source={require('../images/createAddIcons/Iconsitemap.png')} />
                                    </View>
                                    <Text style={styles.buttonText}>{item.title} </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        </View>
    )
}

export default AdButtons

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainContainer: {
        flex: 1,
        margin: wp("4%"),
        marginBottom: hp("1%"),
        // justifyContent: "space-between"
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
    bButton: {
        backgroundColor: '#ffff',
        elevation: hp("1%"),
        shadowColor: 'black',
        borderRadius: hp("1.5%"),
        marginBottom: hp("2%"),
        margin: wp("2%")
    },
    insideBButton: {
        flex: 1,
        margin: wp("5%"),
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        fontSize: RFValue(14),
        fontWeight: "bold",
        paddingLeft: wp("5%")
    },
    iconContainer: {
        height: hp("3%"),
        width: hp("3%"),
        alignItems: 'center',
        justifyContent: 'center',
    }
})
