import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import NavLink from '../components/NavLink';
import { CheckBox } from 'native-base'

const TermsandCondition = ({ navigation }) => {
    const [password, setPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [checked, setChecked] = useState(false);
    const checkBoxCheck = () => {
        checked === false ?
            setChecked(true)
            :
            setChecked(false)

    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.bigTextStyle}>Terms & Conditions</Text>
                </View>
                <View style={styles.termsContainer}>
                    <ScrollView style={styles.termsScrollContainer}>
                        <Text style={styles.termsTextStyle}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                        </Text>
                        <Text style={styles.termsHeadingStyle}>
                            Terms 1.0.1
                        </Text>
                        <Text style={styles.termsTextStyle}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                        </Text>
                        <Text style={styles.termsHeadingStyle}>
                            Terms 1.0.2
                        </Text>
                        <Text style={styles.termsTextStyle}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                        </Text>
                    </ScrollView>
                </View>
                <View style={{ marginTop: hp("3%"), marginLeft: wp("6%"), marginRight: wp("6%") }}>
                    <TouchableOpacity
                        style={{
                            margin: hp("2%"),
                            marginTop: 0,
                            marginBottom:  hp("3%"),
                            flexDirection: 'row',
                            alignItems: "center"
                        }}
                        onPress={checkBoxCheck}>
                        <CheckBox
                            onPress={checkBoxCheck}
                            checked={checked}
                            color={Colors.primaryColor}
                            style={styles.checkBoxButtonStyle}
                        />
                        <Text style={{
                            fontSize: RFValue(12),
                            paddingLeft: wp("5%")
                        }}>
                            I have read term and conditions
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Navigator')}
                        style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                        <Text style={{
                            ...styles.buttonText,
                            color: Colors.whiteColor
                        }}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TermsandCondition

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainContainer: {
        flex: 1,
        margin: wp("4%"),
        marginTop: hp("4%"),
        marginBottom: hp("1%"),
        justifyContent: "space-between"
    },
    labelContainer: {
        alignItems: 'center',
    },
    termsContainer: {
        marginTop: hp("3%"),
        flex: 1,
        borderRadius: hp("4%"),
        backgroundColor: "#F2F2F2"
    },
    termsScrollContainer: {
        flex: 1,
        margin: wp("5%")
    },
    termsTextStyle: {
        fontSize: RFValue(14),
        fontWeight: "300",
        color: "#4A4B4D",
    },
    termsHeadingStyle: {
        paddingTop: hp("0.7%"),
        paddingBottom: hp("0.7%"),
        fontSize: RFValue(20),
        fontWeight: "300",
        color: "#4A4B4D",
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
        marginTop: hp("5%"),
        marginBottom: hp("2%"),
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("7%"),
        justifyContent: 'center',
        borderRadius: hp("20%")
    },
    checkBoxButtonStyle: {
        width: wp("6%"), height: wp("6%"), borderRadius: wp("1%"),
        alignItems: 'center',
        justifyContent: 'center',
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
