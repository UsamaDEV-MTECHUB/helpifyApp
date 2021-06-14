import React,{useEffect} from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import {RFValue} from 'react-native-responsive-fontsize'
import Colors from '../constants/Colors'
const Saplash = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('SearchAd')
        }, 2000)
      }, []);
    return (
        <TouchableOpacity
        onPress={()=> navigation.navigate('SearchAd')}
         style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.image} source={require("../images/Logo.png")}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Saplash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainContainer:{
        flex: 1,
        margin: wp("5%"),
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer:{
        height: hp("30%"),
        width: wp("30%")
    },
    image:{
        height: '100%',
        width: '100%'
    }

})
