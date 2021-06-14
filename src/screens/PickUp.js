import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    View,
    Alert,
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

const PickUp = ({ navigation }) => {
    const [searchAd, setSearchAd] = useState(null)
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
                        Choose Pickup Address</Text>
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
                        onPress={() => navigation.navigate("PickOff")}
                        style={styles.signinButtonContainer}>
                        <Text style={styles.signinButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

export default PickUp

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
        margin: wp("3%"),
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
    inputFieldsContainer: {
        marginBottom: hp("2%"),
        margin: wp("4%"),
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("7%"),
        justifyContent: 'center',
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
    }
})

