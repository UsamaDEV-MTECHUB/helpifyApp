import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    View,
    Alert,
    Modal,
    ActivityIndicator,
    ScrollView,
    ToastAndroid,
    FlatList,
} from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
const PickOff = ({ navigation }) => {
    const [searchAd, setSearchAd] = useState(null)
    const [addPayment, setAddPayment] = useState(false);
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [price, setprice] = useState('')
    const [discount, setdiscount] = useState('')
    const postAd = () => {
        navigation.navigate('ItemView')
        setAddPayment(!addPayment)
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainContainer} >
                <View style={{
                    alignItems: 'center',
                    margin: wp("3%"),
                    justifyContent: "center", height: hp("5%"),
                    marginBottom: hp("2%")
                }}>
                    <Text style={{
                        fontSize: RFValue(30), color: '#515C6F',
                    }}>
                        Choose Dropoff Address</Text>
                </View>
                <View style={{
                    height: hp("15%"), elevation: 8,
                    justifyContent: 'center', backgroundColor: Colors.whiteColor
                }}>
                    <View style={{ ...styles.inputFieldsContainer, }}>
                        <View style={styles.textInputContainerStyle}>
                            <View style={styles.searchIcon}>
                                <Ionicons name="search-outline"
                                    color="lightgrey"
                                    size={hp("3%")} />
                            </View>
                            <TextInput
                                value={searchAd}
                                autoCapitalize="none"
                                placeholder="Search Address"
                                onChangeText={text => setSearchAd(text)}
                                style={{
                                    paddingLeft: wp("2%"),
                                    paddingRight: wp("2%"),
                                    flex: 1,
                                    color: Colors.blackColor,
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.mapView}>
                    <Image
                        style={{ height: "100%", width: "100%", resizeMode: 'cover' }}
                        source={require('../images/mapImage.png')}
                    />
                </View>
                <View style={{
                    marginTop: hp("3%"),
                }}>
                    <TouchableOpacity
                        onPress={() => setAddPayment(!addPayment)}
                        style={{ ...styles.signinButtonContainer, margin: wp("3%"), }}>
                        <Text style={styles.signinButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={addPayment}
                onRequestClose={() => {
                    setAddPayment(!addPayment);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.languageSettingModalView}>
                        <View style={styles.insideModalView}>
                            <View>
                                <View style={{
                                    height: hp("5%"), flexDirection: 'row',
                                    borderColor: "#F0F0F0", borderBottomWidth: 1,
                                }}>
                                    <View style={{ ...styles.labelContainer, flex: 1, }}>
                                        <Text style={styles.bigTextStyle}>Add Payment</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setAddPayment(!addPayment)}>
                                        <Ionicons name="close-outline"
                                            color="#7C7D7E"
                                            size={hp("4%")} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginTop: hp("2%"), marginBottom: hp("2%") }}>
                            <Text style={styles.backtohomeTextStyle}>Decide How much do you want to pay compensation?</Text>
                            </View>
                            <View style={styles.textInputContainerStyle}>
                                <TextInput
                                    value={number2}
                                    autoCapitalize="none"
                                    onChangeText={text => setNumber2(text)}
                                    placeholderTextColor="lightgray"
                                    style={{
                                        flex: 1,
                                        paddingLeft: wp("8%"),
                                        paddingRight: wp("8%"),
                                        color: Colors.blackColor,
                                    }}
                                />
                            </View>
                            <View style={{ marginTop: hp("2%"), flexDirection: 'row', alignItems: "center", }}>
                                <Text style={styles.descriptionTitle}>You Need to Pay </Text>
                                <Text style={styles.pkrText}>30 kr</Text>
                                <Text style={styles.descriptionTitle}> for Advertisement</Text>
                            </View>
                            <View style={{
                                marginTop: hp("2%"),
                            }}>
                                <TouchableOpacity
                                    onPress={() => postAd()}
                                    style={styles.signinButtonContainer}>
                                    <Text style={styles.signinButtonText}>Post Ad</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView>

    )
}

export default PickOff

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainContainer: {

        flex: 1,
        justifyContent: 'space-between'
    },
    signinButtonContainer: {

        height: hp("6%"),
        backgroundColor: Colors.primaryColor,
        borderRadius: hp("6%"),
        justifyContent: 'center'
    },
    signinButtonText: {
        fontSize: RFValue(16),
        color: Colors.whiteColor,
        alignSelf: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    insideModalView: {
        margin: wp("4%"),
        flex: 1,
        justifyContent: "space-between"
    },
    languageSettingModalView: {
        backgroundColor: "white",
        borderTopLeftRadius: hp("2%"),
        borderTopRightRadius: hp("2%"),
        height: hp("35%")
    },
    labelContainer: {
        alignItems: 'flex-start',
    },
    bigTextStyle: {
        fontSize: RFValue(20),
        color: "#4A4B4D",
    },
    backtohomeTextStyle: {
        fontSize: RFValue(13),
        color: "#4A4B4D",
        fontWeight: 'bold'
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("7%"),
        justifyContent: 'center',
        borderRadius: hp("20%")
    },
    inputFieldsContainer: {
        marginBottom: hp("2%"),
        margin: wp("4%"),
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("7%"),
        // justifyContent: 'center',
        borderRadius: hp("20%"),
        flexDirection: 'row',
    },
    searchIcon: {
        alignItems: "center",
        justifyContent: "center",
        width: wp("10%"),
        marginLeft: wp("2%")
    },
    mapView: {
        margin: wp("3%"),
        height: hp("50"),
    },
    descriptionTitle: {
        fontSize: RFValue(13),
        fontWeight: "bold",
        color: "#4A4B4D"
    },
    pkrText: {
        fontSize: RFValue(13),
        fontWeight: "bold",
        color: Colors.primaryColor
    },
})

