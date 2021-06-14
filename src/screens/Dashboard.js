import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, ImageBackground, FlatList, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = ({ navigation }) => {
    const [profileImage, setProfileImage] = useState(null)
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null)
    const [listItem, setListItem] = useState([
        { id: "c1" },
        { id: "c2" }
    ])
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    resizeMode="contain"
                    source={require("../images/Group8242.png")}
                    style={styles.image} />
            </View>
            <View style={styles.mainContainer}>
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
                <ScrollView style={{marginTop:hp("2%")}}>
                    {
                        listItem.map((item, index) => (
                            <TouchableOpacity
                            onPress={()=> navigation.navigate('ItemView')}
                                 key={index}
                             style={styles.listItem}>
                             <ImageBackground
                                 resizeMode="cover"
                                 style={{
                                     width: '100%',
                                     height: '100%'
 
                                 }}
                                 source={require("../images/ImageGarbage.png")}>
                                     <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']} style={{flex: 1}}
                                        >
                                 <View style={styles.insideListItemView}>
                                     <View>
                                         <Ionicons name="star"
                                             color={Colors.primaryColor}
                                             size={hp("3%")} />
                                     </View>
                                     <View>
                                         <Text style={styles.titleText}>This is title</Text>
                                         <View style={styles.ratingPlusText}>
                                             <Ionicons name="star"
                                                 color={Colors.primaryColor}
                                                 size={hp("2%")} />
                                             <Text style={styles.ratingText}>4.9</Text>
                                             <Text style={styles.ratingText}>by Jhon</Text>
                                         </View>
                                     </View>
                                 </View>
                                 </LinearGradient>
                             </ImageBackground>
                         </TouchableOpacity>
                        ))
                    }
                </ScrollView>


                <View style={styles.bottomButtonsContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CreateAd')}
                        style={styles.createAdbutton}>
                        <View style={styles.insideCreateAdButton}>
                            <View style={styles.adIconContainer}>
                                <Image
                                    resizeMode="contain"
                                    source={require('../images/adIcon.png')}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </View>
                            <Text style={styles.balanceButtonText}>
                                Create Ad
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BTermsAndConditions')}
                        style={styles.createAdbutton}>
                        <View style={styles.insideCreateAdButton}>
                            <View style={styles.adIconContainer}>
                                <Image
                                    resizeMode="contain"
                                    source={require('../images/shakeHandIcon.png')}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </View>
                            <Text style={styles.balanceButtonText}>
                                Become
                        </Text>
                            <Text style={styles.balanceButtonText}>
                                Helpifier
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainContainer: {
        flex: 1,
        marginTop: 0,
        margin: wp("3%"),
        marginBottom: hp("1%"),
        justifyContent: "space-between"
    },
    header: {
        height: hp("20%"),
    },
    image: {
        height: "100%",
        width: "100%"
    },
    txtStyle: {
        color: "#7C7D7E",
        fontSize: RFValue(14)
    },
    txtContainer: {
        alignItems: 'center',
        marginTop: hp("2.5%")
    },
    myProfileInfoContainerStyle: {
        marginTop: hp("3%"),
        flexDirection: 'row', alignItems: 'center'
    },
    profileImageContainer: {
        marginLeft: wp("2%"),
        height: hp("10%"),
        width: hp("10%"),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: hp("10%") / 2,
        overflow: 'hidden', elevation: 8
    },
    profileImageStyle: {
        height: "100%",
        width: "100%",
    },
    nameTextStyle: {
        fontSize: RFValue(18),
        textTransform: "capitalize",
        fontWeight: 'bold',
    },
    emailStyle: {
        fontSize: RFValue(12),
        color: '#000',
    },
    balanceContainer: {
        height: hp("16%"),
        borderRadius: hp("2%"),
        elevation: 8,
        marginTop: hp("2%"),
        marginBottom: hp("1%"),
        backgroundColor: Colors.whiteColor,
        justifyContent: 'center'
    },
    insideBalanceButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: wp("4%"),
        height: hp("10%"),
    },
    balancebookContainer: {
        height: hp("10%"),
        width: wp("10%")
    },
    balnceChevronContainer: {
        height: hp("10%"),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp("10%")

    },
    balanceButtonText: {
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: Colors.primaryColor
    },
    bottomButtonsContainer: {
        height: hp("20%"),
        marginTop: hp("3%"),
        marginBottom: hp("1%"),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    createAdbutton: {
        width: wp("45%"),
        borderRadius: hp("2%"),
        elevation: 8,
        backgroundColor: Colors.whiteColor,
        justifyContent: 'center'
    },
    insideCreateAdButton: {
        margin: wp("3%"),
        height: hp("15%"), justifyContent: 'space-between', alignItems: "center"
    },
    adIconContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: hp("7%"),
        width: wp("15%")
    },
    listItem: {
        height: hp("20%"),
        marginBottom: hp("1%"),
    },
    insideListItemView: {
        justifyContent: 'space-between',
        margin: wp("2.5%"),
        flex: 1
    },
    titleText: {
        fontSize: RFValue(12),
        color: Colors.whiteColor,
        fontWeight: "bold"
    },
    ratingPlusText: {
        alignItems: 'center',
        flexDirection: "row"
    },
    ratingText: {
        fontSize: RFValue(12),
        color: Colors.primaryColor,
        paddingLeft: wp("1%")
    },
})
