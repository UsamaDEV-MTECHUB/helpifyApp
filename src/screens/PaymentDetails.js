import React, { useState } from 'react'
import { StyleSheet, Modal, View, Text, TextInput, TouchableOpacity, Image, Switch, Dimensions, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconTwo from 'react-native-vector-icons/Entypo'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize'
const PaymentDetailsScreen = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [cardNum, setCardNum] = useState("Card Number");
    const [mm, setMM] = useState("MM");
    const [yy, setYY] = useState("YY");
    const [scode, setScode] = useState("Security Code");
    const [fname, setFName] = useState("First Name");
    const [lname, setLName] = useState("Last Name");
    const [password, setPassword] = useState(null);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <View>
                        <Ionicons name="chevron-back-outline"
                            color={Colors.blackColor}
                            onPress={() => navigation.goBack()}
                            size={hp("4%")} />
                    </View>
                    <View style={{ paddingLeft: hp("2%") }}>
                        <Text style={styles.bigTextStyle}>Payment Details</Text>
                    </View>

                </View>
                <View>
                    <View style={styles.customizelabelContainer}>
                        <Text style={{ ...styles.smallTextStyle, color: "#4A4B4D", fontWeight: 'bold' }}>Customize your payment method</Text>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={{ margin: wp("3%") }}>
                            <View style={{
                                ...styles.cashondeliveryContainer,
                                borderColor: '#E7E7E7', borderBottomWidth: 2,
                                height: hp("6%"),
                            }}>
                                <View>
                                    <Text style={{
                                        ...styles.smallTextStyle, color: Colors.primaryColor,
                                        fontWeight: 'bold'
                                    }}>Cash/Card on delivery</Text>
                                </View>
                                <View>
                                    <IconTwo name="check"
                                        color={Colors.primaryColor}
                                        size={hp("3%")} />
                                </View>
                            </View>
                            <View style={{
                                ...styles.cashondeliveryContainer,
                                borderColor: '#E7E7E7', borderBottomWidth: 2,
                                height: hp("8%"),
                            }}>
                                <View style={{ width: wp("10%"), height: hp("3%") }}>
                                    <Image style={{ width: "100%", height: "100%" }}
                                        source={require('../images/Group7192.png')} />
                                </View>
                                <View>
                                    <Text style={{ ...styles.smallTextStyle, color: Colors.primaryColor, fontWeight: 'bold' }}>
                                        **** ****
                                </Text>
                                </View>
                                <View>
                                    <Text style={{ ...styles.smallTextStyle, color: Colors.primaryColor, fontWeight: 'bold' }}>
                                        2187
                                </Text>
                                </View>
                                <TouchableOpacity style={styles.deleteCardButton}>
                                    <Text style={{ color: Colors.primaryColor, fontWeight: 'bold' }}>Delete Card</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ ...styles.cashondeliveryContainer, height: hp("6%"), }}>
                                <View>
                                    <Text style={{
                                        ...styles.smallTextStyle, color: Colors.primaryColor,
                                        fontWeight: 'bold'
                                    }}>Other Methods</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: hp("3%") }}>
                    <TouchableOpacity
                        onPress={() => setIsVisible(true)}
                        style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="add-outline"
                                color={Colors.whiteColor}
                                size={hp("3.5%")} />
                            <Text style={{
                                ...styles.buttonText,
                                color: Colors.whiteColor
                            }}>
                                Add Another Credit/Debit Card
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isVisible}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setIsVisible(!isVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.insideModalView}>
                                <View>
                                    <View style={styles.closeIconContainer}>
                                        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                                            <Ionicons name="close-outline"
                                                color="#7C7D7E"
                                                size={hp("4%")} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ borderBottomWidth: 1, borderColor: Colors.inputBackGround, height: hp("5%") }}>
                                        <Text style={{
                                            fontSize: RFValue(12), color: Colors.blackColor,
                                            fontWeight: 'bold'
                                        }}>Add Credit/Debit Card</Text>
                                    </View>
                                    <View style={{ ...styles.textInputContainerStyle, marginTop: hp("2%") }}>
                                        <TextInput
                                            autoCapitalize="none"
                                            onChangeText={text => setCardNum(text)}
                                            placeholder="Card Number"
                                            style={{
                                                paddingLeft: wp("8%"),
                                                paddingRight: wp("8%"),
                                                fontSize: RFValue(10), color: Colors.blackColor
                                            }}
                                        />
                                    </View>
                                    <View style={{
                                        marginTop: hp("2%"),
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}>
                                            <Text style={{ fontSize: RFValue(14), color: Colors.blackColor }}>Expiry</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <View style={{
                                                ...styles.textInputContainerStyle,
                                                alignItems: "center", justifyContent: "center", width: wp("30%"),

                                            }}>
                                                <TextInput
                                                    autoCapitalize="none"
                                                    onChangeText={text => setMM(text)}
                                                    placeholder="MM"
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: RFValue(10), color: Colors.blackColor
                                                    }}
                                                />
                                            </View>
                                            <View style={{
                                                ...styles.textInputContainerStyle,
                                                alignItems: "center", justifyContent: "center", width: wp("30%"), marginLeft: wp("5%")
                                            }}>
                                                <TextInput
                                                    autoCapitalize="none"
                                                    onChangeText={text => setYY(text)}
                                                    placeholder="YY"
                                                    style={{
                                                        textAlign: 'center',
                                                        fontSize: RFValue(10), color: Colors.blackColor
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ ...styles.textInputContainerStyle, marginTop: hp("2%") }}>
                                        <TextInput
                                            autoCapitalize="none"
                                            onChangeText={text => setScode(text)}
                                            placeholder="Security Code"
                                            style={{
                                                paddingLeft: wp("8%"),
                                                paddingRight: wp("8%"),
                                                fontSize: RFValue(10), color: Colors.blackColor
                                            }}
                                        />
                                    </View>
                                    <View style={{ ...styles.textInputContainerStyle, marginTop: hp("2%") }}>
                                        <TextInput
                                            autoCapitalize="none"
                                            onChangeText={text => setFName(text)}
                                            placeholder="First Name"
                                            style={{
                                                paddingLeft: wp("8%"),
                                                paddingRight: wp("8%"),
                                                fontSize: RFValue(10), color: Colors.blackColor
                                            }}
                                        />
                                    </View>
                                    <View style={{ ...styles.textInputContainerStyle, marginTop: hp("2%") }}>
                                        <TextInput
                                            autoCapitalize="none"
                                            onChangeText={text => setLName(text)}
                                            placeholder="Last Name"
                                            style={{
                                                paddingLeft: wp("8%"),
                                                paddingRight: wp("8%"),
                                                fontSize: RFValue(10), color: Colors.blackColor
                                            }}
                                        />
                                    </View>
                                </View>
                                <View style={{ marginTop: hp("3%") }}>
                                    <TouchableOpacity
                                        onPress={() => setIsVisible(!isVisible)}
                                        style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Ionicons name="add-outline"
                                                color={Colors.whiteColor}
                                                size={hp("3.5%")} />
                                            <Text style={{
                                                ...styles.buttonText,
                                                color: Colors.whiteColor
                                            }}>
                                                Add Card
                        </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                </Modal>
            </View>
        </View>
    )
}

export default PaymentDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    mainContainer: {
        flex: 1,
        margin: wp("4%"),
        marginTop: hp("4%"),
        marginBottom: hp("1%"),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bigTextStyle: {
        fontSize: RFValue(20),
        color: "#4A4B4D",
    },
    smallTextStyle: {
        fontSize: RFValue(14),

    },
    customizelabelContainer: {
        alignItems: 'flex-start',
        height: hp("5%"),
        borderColor: "#E2E2E2",
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginTop: hp("3%")
    },
    cardContainer: {
        elevation: hp("1%"),
        backgroundColor: "#F7F7F7", marginTop: hp("3%")
    },
    cashondeliveryContainer: {
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',

    },
    deleteCardButton: {
        justifyContent: 'center',
        width: wp("25%"),
        height: hp("5%"),
        borderWidth: 1, borderRadius: hp("15%"), alignItems: 'center',
        borderColor: Colors.primaryColor
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("7%"),
        justifyContent: 'center',
        borderRadius: hp("20%")
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        backgroundColor: "white",
        borderTopLeftRadius: hp("2%"),
        borderTopRightRadius: hp("2%"),
        height: hp("68%")
    },
    insideModalView: {
        margin: wp("4%"),
        flex: 1,
        justifyContent: "space-between"
    },
    closeIconContainer: {
        alignItems: 'flex-end'
    },
    buttonContainer: {
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp("20%")
    },
    buttonText: {
        fontSize: RFValue(18)
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("7%"),
        justifyContent: 'center',
        borderRadius: hp("20%")
    },
})
