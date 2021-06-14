import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Input, CheckBox } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Colors from '../constants/Colors'
import { heightPercentageToDP as hp, widthPercentageToDP as wp }
    from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'

const MoreScreenComponent = ({ name, iconName }) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.insideButtonContainer}>
                <View style={styles.iconandlabelContainer}>
                    <View style={styles.iconContainer}>
                        <FontAwesome5 name={iconName}
                            color={Colors.whiteColor}
                            size={hp("3%")} />
                    </View>
                    <View style={{ marginLeft: wp("4%"), }}>
                        <Text style={styles.smallTextStyle}
                        >{name}</Text>
                    </View>
                </View>
                <View style={{ right: -10 }}>
                    <View style={styles.chevronContainer}>
                        <Ionicons name="chevron-forward-outline"
                            color="#7C7D7E"
                            size={hp("2%")} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MoreScreenComponent

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        marginTop: hp("2%"),
        marginRight: wp("2%")
    },
    smallTextStyle: {
        fontSize: RFValue(12),
        color: "#4A4B4D",
    },
    insideButtonContainer: {
        height: hp("10%"),
        borderRadius: hp("1%"),
        backgroundColor: '#F6F6F6', flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconContainer: {
        height: hp("7%"),
        width: hp("7%"),
        borderRadius: hp("7%") / 2,
        backgroundColor: Colors.primaryColor,
        justifyContent: 'center', alignItems: 'center'
    },
    iconandlabelContainer: {
        flexDirection: 'row', margin: wp("4%"),
        alignItems: 'center',
    },
    chevronContainer: {
        height: hp("3%"),
        width: hp("3%"),
        borderRadius: hp("3%") / 2,
        backgroundColor: '#F6F6F6',
        justifyContent: 'center', alignItems: 'center'
    }
})
