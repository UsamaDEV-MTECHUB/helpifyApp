import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, Alert, View, Modal, TouchableOpacity, Image, ImageBackground } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from '../constants/Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MoreScreenComponent from '../components/MoreScreenComponent'
import RadioButton from '../components/RadioButton'
const More = ({ navigation }) => {
    const [balanceInquiry, setBalanceInquiry] = useState(false);
    const [languageSetting, setLanguageSetting] = useState(false);
    const [language, setLanguage] = useState("English")
    const [isLiked, setIsLiked] = useState([
        { id: 1, value: true, name: "English", selected: false },
        { id: 2, value: false, name: "Swedish", selected: false }
    ]);
    const onClickHelpifier = ()=>{
        navigation.navigate('BTermsAndConditions')
    }
    const onRadioBtnClick = (item) => {
        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
                ? { ...isLikedItem, selected: true }

                : { ...isLikedItem, selected: false }
        );
        setIsLiked(updatedState);
        if (item.id === 1) {
            setLanguage('English')
        }
        else {
            setLanguage('Swedish')
        }
    };
    const balanceBackToHome= ()=>{
        navigation.navigate('Profile')
        setBalanceInquiry(!balanceInquiry)
    }
    const languageBackToHOme = ()=>{
        navigation.navigate('Profile')
        setLanguageSetting(!languageSetting)    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.bigTextStyle}>More</Text>
                </View>
                <View style={{ marginTop: hp("2%") }}>
                    <TouchableOpacity onPress={() => navigation.navigate("PaymentDetails")}>
                        <MoreScreenComponent name="Payment Details" iconName="dollar-sign" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setBalanceInquiry(!balanceInquiry)}>
                        <MoreScreenComponent name="Balance Enquiry" iconName="balance-scale" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setLanguageSetting(!languageSetting)}>
                        <MoreScreenComponent name="Language Setting" iconName="language" />
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: hp("4%") }}>
                    <TouchableOpacity
                        onPress={() => onClickHelpifier()}
                        style={{
                            ...styles.buttonContainer,
                            elevation: hp("1%"),
                            backgroundColor: Colors.primaryColor
                        }}>
                        <Text style={{
                            ...styles.buttonText,
                            color: Colors.whiteColor
                        }}>
                            Become Helpifier
                        </Text>
                    </TouchableOpacity>
                </View>
                

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={balanceInquiry}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setBalanceInquiry(!balanceInquiry);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.insideModalView}>
                                <View>
                                    <View style={styles.closeIconContainer}>
                                        <TouchableOpacity onPress={() => setBalanceInquiry(!balanceInquiry)}>
                                            <Ionicons name="close-outline"
                                                color="#7C7D7E"
                                                size={hp("4%")} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.imageOutGround}>
                                        <View style={styles.imageContainer}>
                                            <Image
                                                resizeMode="contain"
                                                style={styles.image}
                                                source={require("../images/balanceGroup.png")} />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: hp("2%"), alignItems: 'center' }}>
                                        <Text style={styles.VerifiedTextStyle}>Balance 0</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => setBalanceInquiry(!balanceInquiry)}
                                    style={{
                                        marginTop: hp("2%"), justifyContent: 'center',
                                        flexDirection: 'row', alignItems: 'center'
                                    }}>
                                    <Ionicons name="log-out-outline"
                                        color={Colors.primaryColor}
                                        size={hp("4%")} />
                                    <Text style={styles.payoutTextStyle}>Payout: 0</Text>
                                </TouchableOpacity>
                                <View style={{ marginTop: hp("2%"), alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => setBalanceInquiry(!balanceInquiry)}>
                                        <Text style={styles.backtohomeTextStyle}>Back To Home</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={languageSetting}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        setLanguageSetting(!languageSetting);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.languageSettingModalView}>
                            <View style={styles.insideModalView}>
                                <View>
                                    <View style={{ height: hp("5%"), flexDirection: 'row', }}>
                                        <View style={{ ...styles.labelContainer, flex: 1 }}>
                                            <Text style={styles.bigTextStyle}>Language Setting</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => setLanguageSetting(!languageSetting)}>
                                            <Ionicons name="close-outline"
                                                color="#7C7D7E"
                                                size={hp("4%")} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View>
                                    {isLiked.map((item) => (

                                        <RadioButton
                                            onPress={() => onRadioBtnClick(item)}
                                            selected={item.selected}
                                            key={item.id}
                                        >
                                            {item.name}
                                        </RadioButton>
                                    ))}
                                </View>
                                <View style={{ marginTop: hp("2%"), alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => setLanguageSetting(!languageSetting)}>
                                        <Text style={styles.backtohomeTextStyle}>Back To Home</Text>
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

export default More

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
        // justifyContent: "space-between"
    },
    labelContainer: {
        alignItems: 'flex-start',
    },
    bigTextStyle: {
        fontSize: RFValue(20),
        color: "#4A4B4D",
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
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        backgroundColor: "white",
        borderTopLeftRadius: hp("2%"),
        borderTopRightRadius: hp("2%"),
        height: hp("55%")
    },
    insideModalView: {
        margin: wp("4%"),
        flex: 1,
        justifyContent: "space-between"
    },
    closeIconContainer: {
        alignItems: 'flex-end'
    },
    imageOutGround: {
        marginTop: wp("4%"),
        alignItems: "center",
        justifyContent: "center",
        height: hp("25%"),
        // width: hp("20%")
    },
    imageContainer: {
        width: hp("25%"),
        height: hp("25%"),
    },
    image: {
        width: "100%",
        height: "100%"
    },
    circleCheckContainer: {
        width: hp("10%"),
        height: hp("10%"),
    },
    VerifiedTextStyle: {
        fontSize: RFValue(30),
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    backtohomeTextStyle: {
        fontSize: RFValue(14),
        color: "#4A4B4D",
        fontWeight: 'bold'
    },
    payoutTextStyle: {
        fontSize: RFValue(14),
        color: Colors.primaryColor,
        paddingLeft: wp("1%"),
        textAlign: "center"
    },
    languageSettingModalView: {
        backgroundColor: "white",
        borderTopLeftRadius: hp("2%"),
        borderTopRightRadius: hp("2%"),
        height: hp("35%")
    },
})
