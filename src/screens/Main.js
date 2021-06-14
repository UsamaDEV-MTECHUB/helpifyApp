import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from '../constants/Colors'
const Main = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                // borderWidth: 1,
                width: "100%",
            }}>
                <ImageBackground
                    resizeMode="contain"
                    style={{
                        height: "100%",
                        width: "100%",
                        alignItems: 'center'
                    }}
                    source={require('../images/Subtraction2.png')}>
                    <View style={{ height: "90%", width: '100%' }}>
                        <Image
                            resizeMode="contain"
                            style={styles.image}
                            source={require('../images/Shapedsubtraction.png')} />
                    </View>
                    <View style={styles.logoContainer}>
                        <Image style={styles.image}
                            resizeMode="contain"
                            source={require("../images/Logo.png")} />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.credentialsContainer}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txtStyle}>Add your details here</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signin')}
                        style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                        <Text style={{
                            ...styles.buttonText,
                            color: Colors.whiteColor
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={{
                            ...styles.buttonContainer,
                            backgroundColor: Colors.whiteColor,
                            borderWidth: 1,
                            borderColor: Colors.primaryColor,
                            marginTop: hp("2%"),
                        }}>
                        <Text style={{
                            ...styles.buttonText,
                            color: Colors.primaryColor
                        }}>
                            Create an Account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    logoContainer: {
        bottom: hp("7.5%"),
        alignItems: 'center',
        justifyContent: 'center',
        height: hp("19%"),
        width: hp("19%"),
        borderRadius: hp("19%") / 2,
        overflow: 'hidden',
    },
    txtStyle: {
        color: "#7C7D7E",
        fontSize: RFValue(14)
    },
    image: {
        height: '100%',
        width: '100%',
    },
    credentialsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        margin: wp("8%"),
        // marginTop: hp("15%"),
        backgroundColor: Colors.whiteColor
    },
    txtContainer: {
        alignItems: 'center',
        top: hp("4.5%")
    },
    buttonContainer: {
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp("20%")
    },
    buttonText: {
        fontSize: RFValue(18)
    }
})
