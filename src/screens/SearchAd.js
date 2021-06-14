import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, FlatList } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import NavLink from '../components/NavLink';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
const SearchAd = ({ navigation }) => {
    const [searchAd, setSearchAd] = useState(null)
    const [listItem, setListItem] = useState([
        { id: "c1" },
        { id: "c2" },
        { id: "c3" },
        { id: "c4" },
        { id: "c5" },
    ])
    return (
        <View style={styles.container}>
            <View style={styles.mainCotainer}>
                <View style={styles.headerContainer}>
                    <View>
                        <Ionicons name="chevron-back-outline"
                            onPress={() => navigation.goBack()}
                            color={Colors.blackColor}
                            size={hp("3%")} />
                    </View>
                    <View style={{ paddingLeft: hp("2%") }}>
                        <Text style={styles.bigTextStyle}>Search Ad</Text>
                    </View>

                </View>

                <View style={styles.inputFieldsContainer}>
                    <View style={styles.textInputContainerStyle}>
                        <TextInput
                            value={searchAd}
                            autoCapitalize="none"
                            onChangeText={text => setSearchAd(text)}
                            style={{
                                paddingLeft: wp("8%"),
                                paddingRight: wp("8%"),
                                flex: 1,
                                color: Colors.blackColor
                            }}
                        />
                        <View style={styles.searchIcon}>
                            <Ionicons name="search-outline"
                                color={Colors.primaryColor}
                                size={hp("3%")} />
                        </View>
                    </View>
                </View>
                <FlatList
                    data={listItem}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Main')}
                                style={styles.listItem}>
                                <ImageBackground
                                    resizeMode="cover"
                                    style={{
                                        width: '100%',
                                        height: '100%'

                                    }}
                                    source={require("../images/ImageGarbage.png")}>
                                    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']} style={{ flex: 1 }}
                                    >
                                        <View style={styles.insideListItemView}>
                                            <View>
                                                <Ionicons name="star"
                                                    color={Colors.primaryColor}
                                                    size={hp("3%")} />
                                            </View>
                                            <View style={{
                                                width: wp("24%"),
                                                height: hp("5%"),
                                                borderRadius: hp("20%"),
                                                backgroundColor: Colors.primaryColor
                                            }}>
                                                <View style={{ flex: 1, alignItems: 'center',margin:wp("0.5%"), borderRadius: hp("20%")}}>
                                                    <Text style={styles.titleText}>This is title</Text>
                                                    <View style={styles.ratingPlusText}>
                                                        <Ionicons name="star"
                                                            color={Colors.whiteColor}
                                                            size={hp("1.5%")} />
                                                        <Text style={styles.ratingText}>4.9</Text>
                                                        <Text style={styles.ratingText}>by Jhon</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default SearchAd

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainCotainer: {
        flex: 1,
        marginTop: hp("1%"),
        marginBottom: hp("1%"),
    },
    headerContainer: {
        margin: wp("3%"),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    labelContainer: {
        alignItems: 'center',
    },
    bigTextStyle: {
        fontSize: RFValue(20),
        color: "#4A4B4D",
    },
    smallTextStyle: {
        fontSize: RFValue(12),
        fontWeight: "300",
        color: "#4A4B4D",
    },
    inputFieldsContainer: {
        marginBottom: hp("2%"),
        margin: wp("3%"),
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
    listItem: {
        height: hp("20%"),
        marginBottom: hp("1%"),
    },
    insideListItemView: {
        // position: 'absolute',
        justifyContent: 'space-between',
        margin: wp("2.5%"),
        flex: 1
    },
    titleText: {
        fontSize: RFValue(9),
        color: Colors.whiteColor,
        fontWeight: "bold"
    },
    ratingPlusText: {
        alignItems: 'center',
        flexDirection: "row"
    },
    ratingText: {
        fontSize: RFValue(9),
        color: Colors.whiteColor,
        paddingLeft: wp("1%")
    },

})
