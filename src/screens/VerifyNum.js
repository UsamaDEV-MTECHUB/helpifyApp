import React, { useState, useRef } from 'react'
import { StatusBar,Modal,ImageBackground, SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
const CELL_COUNT = 4;
const VerifyNum = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={styles.container}>
            <View style={styles.mainCotainer}>


                <View style={styles.credentialsContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.bigTextStyle}>VERIFY</Text>
                        <Text style={{ ...styles.smallTextStyle, paddingTop: hp("0.5%") }}>Check your Email and Type code here</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp("6%") }}>
                    <View style={{ width: wp("70"), }}>
                        <CodeField
                            ref={ref}
                            {...props}
                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />

                    </View>
                </View>
                <View style={{ marginTop: hp("5%") }}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                        <Text style={{
                            ...styles.buttonText,
                            color: Colors.whiteColor
                        }}>
                            Verify
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.insideModalView}>
                            <View>
                                <View style={styles.closeIconContainer}>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <Ionicons name="close-outline"
                                            color="#7C7D7E"
                                            size={hp("4%")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.imageOutGround}>
                                    <View style={styles.imageContainer}>
                                        <ImageBackground
                                            resizeMode="contain"
                                            style={{ ...styles.image, alignItems: "center", justifyContent: "center" }}
                                            source={require("../images/Group8154.png")}>
                                            <View style={styles.circleCheckContainer}>
                                                <Image
                                                    resizeMode="contain"
                                                    style={styles.image}
                                                    source={require("../images/iconCheckCircle.png")} />
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </View>
                                <TouchableOpacity 
                                onPress={()=> navigation.navigate('SearchAd')}
                                style={{ marginTop: hp("2%"), alignItems: 'center' }}>
                                    <Text style={styles.VerifiedTextStyle}>Verified</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: hp("2%"), alignItems: 'center' }}>
                                <TouchableOpacity onPress={() =>  navigation.navigate('SearchAd')}>
                                    <Text style={styles.backtohomeTextStyle}>Back To Home</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor,
    },
    mainCotainer: {
        flex: 1,
        margin: wp("8%"),
        marginBottom: hp("1%"),
        // justifyContent: "space-between"
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
    // root: { padding: 10 },
    // title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: hp("8%"),
        color: Colors.blackColor,
        height: hp("8%"),
        lineHeight: hp("8%"),
        borderRadius: hp("8%"),
        fontSize: RFValue(24),
        backgroundColor: "#F2F2F2",
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
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

export default VerifyNum