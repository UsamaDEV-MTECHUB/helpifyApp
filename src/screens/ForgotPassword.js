import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import NavLink from '../components/NavLink';

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    return (
        <View style={styles.container}>
            <View style={styles.mainCotainer}>
                <View>
                    <View style={styles.credentialsContainer}>
                        <View style={styles.labelContainer}>
                            <Text style={styles.bigTextStyle}>Reset Password</Text>
                            <Text style={{ ...styles.smallTextStyle, paddingTop: hp("0.5%") }}>Please enter your email to receive a</Text>
                            <Text style={{ ...styles.smallTextStyle, paddingTop: hp("0%") }}>link to  create a new password via email</Text>
                        </View>
                    </View>
                    <View style={styles.inputFieldsContainer}>
                        <View style={styles.textInputContainerStyle}>
                            <TextInput
                                value={email}
                                autoCapitalize="none"
                                onChangeText={text => setEmail(text)}
                                placeholder="Email"
                                placeholderTextColor="lightgray"
                                style={{
                                    paddingLeft: wp("8%"),
                                    paddingRight: wp("8%"),
                                    flex: 1,
                                    color: Colors.blackColor,
                                }}
                            />
                        </View>
                        <View style={{ marginTop: hp("5%") }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ResetPasword')}
                                style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                                <Text style={{
                                    ...styles.buttonText,
                                    color: Colors.whiteColor
                                }}>
                                    Send
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainCotainer: {
        flex: 1,
        margin: wp("8%"),
        marginBottom: hp("1%"),
        justifyContent: "space-between"
    },
    labelContainer: {
        alignItems: 'center',
    },
    bigTextStyle: {
        fontSize: RFValue(30),
        color: "#4A4B4D",
    },
    smallTextStyle: {
        fontSize: RFValue(12),
        fontWeight: "300",
        color: "#4A4B4D",
    },
    inputFieldsContainer: {
        marginTop: hp("10%"),
        marginBottom: hp("2%"),
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("7%"),
        justifyContent: 'center',
        borderRadius: hp("20%")
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
