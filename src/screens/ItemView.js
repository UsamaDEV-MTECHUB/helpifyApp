import React, { useState } from 'react'
import { ScrollView, Image,TouchableOpacity, StyleSheet, Text, View, } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Slider from '../components/Slider'
import Ionicons from 'react-native-vector-icons/Ionicons'
const ItemView = ({navigation}) => {
    const images = [
        require("../images/xps-dpbXgTh0Lac-unsplash.jpg"),
        require("../images/emma-ou-FQZd4qNnnHw-unsplash.jpg"),
        require("../images/kalle-saarinen-o1OxpF-7XVo-unsplash.jpg"),
        require("../images/ImageGarbage.png")
    ]
    const [profileImage, setProfileImage] = useState(null)
    return (
        <ScrollView style={styles.container}>
            <Slider images={images} />
            <View style={styles.mainView}>
                <View style={styles.insideMainView}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>this is title</Text>
                        <View style={styles.starsView}>
                            <Ionicons
                                name="star"
                                color={Colors.primaryColor}
                                size={hp("2%")}
                            />
                            <Ionicons
                                name="star"
                                color={Colors.primaryColor}
                                size={hp("2%")}
                            />
                            <Ionicons
                                name="star"
                                color={Colors.primaryColor}
                                size={hp("2%")}
                            />
                            <Ionicons
                                name="star"
                                color={Colors.primaryColor}
                                size={hp("2%")}
                            />
                            <Ionicons
                                name="star-outline"
                                color={Colors.primaryColor}
                                size={hp("2%")}
                            />
                        </View>
                        <View style={{ marginTop: hp("0.5%") }}>
                            <Text style={styles.starRatingText}>4 Star Ratings</Text>
                        </View>
                        <View style={{ marginTop: hp("2%") }}>
                            <Text style={styles.descriptionTitle}>Description</Text>
                        </View>
                        <View style={{ marginTop: hp("1%") }}>
                            <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuada</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: hp("2%") }}>
                        <Text style={styles.descriptionTitle}>What I am expecting?</Text>
                    </View>
                    <View style={{ marginTop: hp("1%") }}>
                        <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Ornare leo non mollis id cursus. Eu euismod faucibus in leo malesuada</Text>
                    </View>
                    <View style={{ marginTop: hp("2%"), flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                        <Text style={styles.descriptionTitle}>You Need to Pay  :</Text>
                        <Text style={styles.pkrText}>750 kr</Text>
                    </View>
                    <View style={styles.myProfileInfoContainerStyle}>
                    <View
                        style={styles.profileImageContainer}>
                        <Image
                            resizeMode="cover"
                            style={styles.profileImageStyle}
                            source={profileImage === null ?
                                require('../images/goriImage.png')
                                :
                                {
                                    uri: profileImage
                                }}
                        />
                    </View>
                    <View style={{ marginLeft: wp("5%"), }}>
                        <Text style={styles.nameTextStyle}>John Doe </Text>
                        <Text style={styles.emailStyle}>janedoe123@email.com</Text>
                    </View>
                </View>
                    <View style={{ marginTop: hp("3%") }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SearchAd')}
                            style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                            <Text style={{
                                ...styles.buttonText,
                                color: Colors.whiteColor
                            }}>
                                Apply
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ItemView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainView: {
        flex: 1,
        borderRadius: hp("2%"),
        bottom: hp("2%"),
        backgroundColor: Colors.whiteColor
    },
    insideMainView: {
        margin: wp("3%"),
        justifyContent: "space-between",
        flex: 1
    },
    titleContainer: {
        height: hp("22%"),
        borderBottomWidth: 1,
        borderColor: "#f0f0f0"
    },
    titleText: {
        fontSize: RFValue(18),
        textTransform: "capitalize"
    },
    starsView: {
        flexDirection: "row",
        width: wp("25%"),
        justifyContent: 'space-between',
    },
    starRatingText: {
        fontSize: RFValue(10),
        color: Colors.primaryColor
    },
    descriptionTitle: {
        fontSize: RFValue(14),
        fontWeight: "bold",
        color: "#4A4B4D"
    },
    descriptionText: {
        fontSize: RFValue(12),
        color: "#7C7D7E"
    },
    pkrText: {
        fontSize: RFValue(14),
        fontWeight: "bold",
        color: Colors.primaryColor
    },
    myProfileInfoContainerStyle: {
        marginTop: hp("3%"),
        flexDirection: 'row', alignItems: 'center'
    },
    profileImageContainer: {
        height: hp("10%"),
        width: hp("10%"),
        elevation: 8,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("10%") / 2,
        overflow: 'hidden'
    },
    profileImageStyle: {
        height: "100%",
        width: "100%"
    },
    buttonContainer: {
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp("20%")
    },
    nameTextStyle: {
        fontSize: RFValue(18),
        textTransform: "capitalize",
        fontWeight: 'bold',
        color : "#4A4B4D"
    },
    emailStyle: {
        fontSize: RFValue(12),
        color: '#000',
    },
    buttonText: {
        fontSize: RFValue(18)
    }
})
