import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from '../constants/Colors'
const Main = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoHeaderContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.image}
                        source={require("../images/Logo.png")} />
                </View>
            </View>
            <View style={styles.credentialsContainer}>
                <View style={styles.txtContainer}>
                    <Text style={styles.txtStyle}>Add your details here</Text>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('Signin')}
                    style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                        <Text style={{
                            ...styles.buttonText,
                            color: Colors.whiteColor
                        }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
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
    logoHeaderContainer: {
        flex: 1,
        zIndex: 0,
        alignItems: 'center',
        justifyContent: "flex-end",
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: hp("3%"),
        borderBottomRightRadius: hp("3%"),
        elevation: 20,
        shadowColor: Colors.primaryColor
    },
    logoContainer: {
        top: hp("7%"),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.whiteColor,
        height: hp("15%"),
        width: hp("15%"),
        borderRadius: hp("15%") / 2,
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
