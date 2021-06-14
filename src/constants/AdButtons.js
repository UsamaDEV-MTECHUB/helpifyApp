import React, { useEffect, useState } from 'react'
import { ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
const AdButtons = ({ buttonText, onPress, width, height }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.bButton,
                height: hp(height),
                width: hp(width),
            }}>
            <View style={styles.insideBButton}>
                <View style={styles.iconContainer}>
                    {
                        buttonText === "Exchange and Donate" ?
                            <Icon
                                name="exchange"
                                size={hp("5%")}
                                color={Colors.primaryColor} />
                            :
                            <Image
                                style={{ height: '100%', width: '100%', resizeMode: "contain" }}
                                source={
                                    buttonText == "Move and deliver" ?
                                        require('../images/createAddIcons/Iconcar.png')
                                        :
                                        buttonText == "home and garden" ?
                                            require('../images/createAddIcons/Iconhome.png')
                                            :
                                            buttonText == "Cleaning" ?
                                                require('../images/createAddIcons/Iconpaintbrush.png')
                                                :
                                                buttonText == "electrician" ?
                                                    require('../images/createAddIcons/Iconelectrician.png')
                                                    :
                                                    buttonText == "hammer" ?
                                                        require('../images/createAddIcons/Iconhammer.png')
                                                        :
                                                        buttonText == "painter" ?
                                                            require('../images/createAddIcons/Iconpaintroller.png')
                                                                :
                                                        buttonText == "barber" ?
                                                            require('../images/createAddIcons/Iconcut.png')
                                                                :
                                                                require('../images/createAddIcons/Iconmore.png')
                                }
                            />
                    }

                </View>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AdButtons

const styles = StyleSheet.create({
    bButton: {
        backgroundColor: '#ffff',
        elevation: hp("1%"),
        shadowColor: 'black',
        borderRadius: hp("1.5%"),
        marginBottom: hp("2%")
    },
    insideBButton: {
        flex: 1,
        margin: wp("1%"),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        paddingTop: hp("1%"),
        fontSize: RFValue(12),
        fontWeight: "bold",
        textAlign: 'center',
        textTransform: "uppercase"
    },
    iconContainer: {
        height: hp("5%"),
        width: hp("5%"),
        alignItems: 'center',
        justifyContent: 'center',
    }
})
