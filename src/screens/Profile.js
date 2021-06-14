import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, TextInput, Dimensions, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Colors from '../constants/Colors'
import { Form, Item, Input, Label } from 'native-base';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { navigate } from '../screens/navigationRef'
import ImagePicker from 'react-native-image-crop-picker';
const Profile = ({ navigation }) => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [image, setImage] = useState(null);
    const pickImage = () => {
        Alert.alert(
            'choose an option ',
            null,
            [
                {
                    text: 'Open Camera',
                    onPress: openCamera,
                },
                {
                    text: 'Choose From Gallery',
                    onPress: openPiker,
                },
            ],
            {
                cancelable: true,
                onDismiss: () => { },
            },
        );
    };
    const openCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then((image) => {
            var obj = {
                uri: `data:${image.mime};base64,` + image.data,
                name: image.path.split('/').pop(),
                type: image.mime,
            };
            setImage(obj.uri);
        });

    }
    const openPiker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then((image) => {
            var obj = {
                uri: `data:${image.mime};base64,` + image.data,
                name: image.path.split('/').pop(),
                type: image.mime,
            };
            setImage(obj.uri);
        });
    };
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.headerContainer}>
                        <View style={styles.header}>
                            <Ionicons
                                onPress={() => navigation.goBack()}
                                name="chevron-back-outline"
                                color={Colors.blackColor}
                                size={hp("3%")} />
                            <Text style={{ ...styles.bigTextStyle, paddingLeft: hp("2%") }}>Edit Profile</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.profileImageContainer}>
                            <View style={styles.editButtonContainer}>
                                <TouchableOpacity onPress={() => pickImage()}
                                    style={styles.cameraButton}>
                                    <Ionicons name="camera" color="grey" size={24} />
                                </TouchableOpacity>
                            </View>
                            <Image
                                resizeMode="cover"
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                                source={image === null ?
                                    require('../images/profileImage.png')
                                    :
                                    { uri: image }} />
                        </View>
                        {/* <View style={{ marginTop: hp("2%") }} >
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <FontAwesome name="pencil" color={Colors.primaryColor} size={hp("2%")} />
                                <Text style={{ color: Colors.primaryColor, marginLeft: wp("1%") }}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View> */}
                        <View style={{ marginTop: hp("2%") }} >
                            <Text style={{ color: "#4A4B4D", fontSize: RFValue(14), fontWeight: 'bold', marginLeft: wp("1%"), }}>
                                Hi there Emilia!</Text>
                        </View>
                        <View style={{ marginTop: hp("2%") }} >
                            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                                <Text style={{ color: "#7C7D7E", marginLeft: wp("1%") }}>Sign Out</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ ...styles.textInputContainerStyle, marginTop: hp("3%") }}>
                    <Item floatingLabel style={{ borderBottomWidth: 0, marginLeft: wp("10%")  }}>
                                <Label>Name</Label>
                                <Input
                                    value={name}
                                    onChangeText={text => setName(text)}
                                    style={{color: Colors.blackColor}}
                                />
                            </Item>
                    </View>
                    <View style={{ ...styles.textInputContainerStyle, marginTop: hp("3%") }}>
                            <Item floatingLabel style={{ borderBottomWidth: 0, marginLeft: wp("10%")  }}>
                                <Label>Email</Label>
                                <Input
                                    placeholder={email}
                                    onChangeText={text => setEmail(text)}
                                    style={{color: Colors.blackColor}}
                                />
                            </Item>
                    </View>
                    <View style={{
                        ...styles.textInputContainerStyle,
                        marginTop: hp("3%")
                    }}>
                       <Item floatingLabel style={{ borderBottomWidth: 0, marginLeft: wp("10%")  }}>
                                <Label>Password</Label>
                                <Input
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    style={{color: Colors.blackColor}}
                                />
                            </Item>
                    </View>
                    <View style={{ marginTop: hp("3%") }}>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('Signin')}
                            style={{
                                ...styles.buttonContainer,
                                elevation: 8,
                                backgroundColor: Colors.primaryColor
                            }}>
                            <Text style={{
                                ...styles.buttonText,
                                color: Colors.whiteColor
                            }}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('More')}
                    style={{
                        ...styles.buttonContainer,
                        backgroundColor: Colors.whiteColor,
                        borderWidth: 1,
                        borderColor: Colors.primaryColor,
                        marginTop: hp("2%"),
                    }}>
                    <Text style={{
                        ...styles.buttonText,
                        color: Colors.primaryColor
                    }}>
                        More
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

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
        justifyContent: "space-between"
    },
    headerContainer: {
        margin: wp("0%"),
    },
    header: {
        height: hp("5%"), flexDirection: 'row', alignItems: 'center',
    },
    labelContainer: {
        alignItems: 'flex-start',
    },
    bigTextStyle: {
        fontSize: RFValue(20),
        color: "#4A4B4D",
    },
    profileImageContainer: {
        height: hp("14%"),
        width: hp("14%"),
        borderRadius: hp("14%") / 2,
        justifyContent: 'center', alignItems: 'center',
        overflow: 'hidden'
    },
    cameraButton: {
        width: '100%', height: '30%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center'
    },
    editButtonContainer: {
        height: hp("14%"),
        width: hp("14%"), zIndex: 2,
        position: 'absolute', justifyContent: 'flex-end',
        borderRadius: hp("14%") / 2, overflow: 'hidden'
    },

    inputFieldsContainer: {
        marginTop: hp("5%"),
        marginBottom: hp("2%"),
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("8%"),
        justifyContent: 'center',
        borderRadius: hp("20%")
    },
    nameLabel: {
        fontSize: RFValue(12),
        color: "#B6B7B7"
    },
    nameText: {
        fontSize: RFValue(14),
    },
    buttonContainer: {
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp("20%")
    },
    buttonText: {
        fontSize: RFValue(18)
    }
})
