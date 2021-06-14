import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, FlatList, Image, Text, View,} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'

const Chat = ({ navigation }) => {
    const [searchAd, setSearchAd] = useState(null)
    const [itemData, setItemData] = useState([
        { id: "c1", email: 'jessica957', name: 'Jessica Miles', profileImage: require('../images/chatAvatarImage.jpg') },
        { id: "c2", email: 'julia957', name: 'Julia Petersen', profileImage: require('../images/chatAvatarImage2.jpg') },
        { id: "c3", email: 'safinaiqba658', name: 'Safina Iqbal', profileImage: require('../images/chatAvatarImage3.jpg') },
        { id: "c4", email: 'alinaali123', name: 'Alina Ali', profileImage: require('../images/chatAvatarImage4.jpg') },
        { id: "c5", email: 'prince4a4', name: 'Prince Phelps', profileImage: require('../images/chatAvatarImage5.jpg') },
        { id: "c6", email: 'josefame', name: 'Josefa Gardner', profileImage: require('../images/chatAvatarImage6.jpg') },
        { id: "c7", email: 'byrdme', name: 'Byrd Hewitt', profileImage: require('../images/chatAvatarImage7.jpg') },
        { id: "c8", email: 'marisa957', name: 'Marisa Cain', profileImage: require('../images/chatAvatarImage8.jpg') },
    ])
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Ionicons
                    onPress={()=> navigation.goBack()}
                    name="chevron-back-outline"
                        color={Colors.blackColor}
                        size={hp("3%")} />
                </View>
                {/* <View style={{ paddingLeft: hp("2%") }}> */}
                <View>
                    <Text style={styles.bigTextStyle}>Inbox</Text>
                </View>
            </View>
            <View style={styles.inputFieldsContainer}>
                <View style={styles.textInputContainerStyle}>
                    <View style={styles.searchIcon}>
                        <Ionicons name="search-outline"
                            color={Colors.primaryColor}
                            size={hp("3%")} />
                    </View>
                    <TextInput
                        value={searchAd}
                        autoCapitalize="none"
                        placeholder="Search for..."
                        onChangeText={text => setSearchAd(text)}
                        style={{
                            paddingLeft: wp("2%"),
                            paddingRight: wp("2%"),
                            flex: 1,
                            color: Colors.blackColor
                        }}
                    />
                </View>
            </View>
            <FlatList
                data={itemData}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        onPress={()=> navigation.navigate('Inbox', {
                            name: item.name
                        }
                        )}
                        style={styles.bidItemContainerStyle}>
                            <View style={styles.insideItemContainer}>
                                <View style={styles.imageContainer}>
                                    <Image
                                                    resizeMode="cover"
                                                    style={styles.imageStyle}
                                                    source={item.profileImage}
                                                />
                                </View>
                                <View style={styles.otherDetailsContainer}>
                                    <Text style={styles.itemNameStyle}>{item.name}</Text>
                                    <Text style={styles.itemIdStyle}>{item.email}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    loading: {
        flex: 1,
        backgroundColor: Colors.accentColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
    },
    headerContainer: {
        margin: wp("3%"),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bigTextStyle: {
        fontSize: RFValue(25),
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
    bidItemContainerStyle: {
        margin: wp("3%"),
        marginTop: hp("1%"),
        backgroundColor: '#ffff',
        elevation: hp("1%"),
        shadowColor: '#000',
        justifyContent: 'center',
        height: hp("12%"),
        borderRadius: hp("2%"),
        marginBottom: hp("2%"),
        overflow: 'hidden'
    },
    insideItemContainer: {
        flexDirection: 'row',
        marginLeft: wp("3%"),
        marginRight: wp("3%")
    },
    otherDetailsContainer:{
        margin: wp("1.5%"),marginLeft: wp("4%"), flex:1, justifyContent: 'space-between'},
    imageContainer: {
        width: hp("8%"),
        height: hp("8%"),
        overflow: 'hidden',
        borderRadius: hp("1%"),
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    itemNameStyle: {
        fontSize: RFValue(14),
        color: Colors.primaryColor, fontWeight: 'bold', textTransform: "capitalize"
    },
    itemIdStyle: {
        fontSize: RFValue(12),
        color: "lightgrey", textTransform: "lowercase"
    },
    viewButtonContainerStyle: {
        justifyContent: 'center',
        width: wp("20%"),
        height: hp("4%"),
        borderRadius: hp("1%"), alignItems: 'center', backgroundColor: Colors.primaryColor
    },
    viewButtonTextStyle: {
        color: "#fff",
        fontSize: RFValue(12), fontWeight: 'bold'
    },
    giftButtonContainerStyle: {
        height: hp("4%"),
        width: hp("4%"),
        borderRadius: hp("4%") / 2,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center', justifyContent: 'center'
    }
})
