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
    ImageBackground,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import ImagePicker from 'react-native-image-crop-picker';
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";
const AddDetailInputScreen = ({ navigation }) => {
    const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [iPrice, setIPrice] = useState(null)
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [email, setUserEmail] = useState(null)
    const [timeModal, setTimeModal] = useState(false)
    const [dateModal, setDateModal] = useState(false)
    const [eTime, setETime] = useState(moment().format('hh:mm A'))
    const [eDate, setEDate] = useState(moment().format('YYYY-MM-DD'))
    const [list, setList] = useState([
    ])
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
            setList([...list, obj.uri]);
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
            setList([...list, obj.uri]);
        });
    };
    const removePic = (id) => {
        const newList = list.filter((item) => item !== id);
        setList(newList);
    }
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const showTimepicker = () => {
        setTimeModal(true)
    }
    const handleTimeConfirm = (time) => {
        setETime(moment(time).format('hh:mm A'))
        setTimeModal(false);
    };
    const showDatePicker = () => {
        setDateModal(true)
    }
    const handleDateConfirm = (time) => {
        setEDate(moment(time).format('YYYY-MM-DD'))
        setDateModal(false);
    };
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer} >
                <View style={{marginBottom: hp("0%")}}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: "center", height: hp("5%"),
                        marginBottom: hp("2%")
                    }}>
                        <Text style={{
                            fontSize: RFValue(30), color: '#515C6F',
                        }}>
                            Ad Detail</Text>
                    </View>
                </View>
                <ScrollView style={{marginBottom: hp("2%"), flex: 1}}>
                <View style={{ ...styles.inputContainerStyle, height: hp("6%"), }}>
                        <View style={styles.mainInputContainer}>
                            <View style={styles.textInputContainerStyle}>
                                <TextInput
                                    value={title}
                                    onChangeText={setTitle}
                                    placeholder="Title"
                                    placeholderTextColor="lightgrey"
                                    style={styles.input}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.descriptionContainerStyle}>
                        <View style={styles.mainInputContainer}>
                            <View style={styles.textInputContainerStyle}>
                                <TextInput
                                    multiline
                                    value={description}
                                    onChangeText={setDescription}
                                    placeholderTextColor="lightgrey"
                                    placeholder="Description..."
                                    style={styles.descInput}
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.iPriceTitleStyle}>Choose Time</Text>
                    <View style={styles.timeinputContainerStyle}>
                        <View style={styles.mainInputContainer}>
                            <View style={styles.textInputContainerStyle}>
                                <TextInput
                                    editable={false}
                                    placeholder={eTime}
                                    style={{ ...styles.input, color: "#ccc" }} />
                            </View>
                            <TouchableOpacity
                                onPress={() => showTimepicker()}
                                style={styles.leftIconContainerStyle}
                            >
                                <Icon
                                    name='time-outline'
                                    size={hp("3%")}
                                    color={Colors.iconColor} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.iPriceTitleStyle}>Choose Date</Text>
                    <View style={styles.timeinputContainerStyle}>
                        <View style={styles.mainInputContainer}>
                            <View style={styles.textInputContainerStyle}>
                                <TextInput
                                    editable={false}
                                    placeholder={eDate}
                                    style={{ ...styles.input, color: "#ccc" }} />
                            </View>
                            <TouchableOpacity
                                onPress={() => showDatePicker()}
                                style={styles.leftIconContainerStyle}
                            >
                                <Icon
                                    name='calendar-outline'
                                    size={hp("3%")}
                                    color={Colors.iconColor} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <DateTimePickerModal
                        isVisible={timeModal}
                        mode='time'
                        is24Hour={false}
                        onConfirm={handleTimeConfirm}
                        onCancel={hideDatePicker}
                    />
                    <DateTimePickerModal
                        isVisible={dateModal}
                        mode='date'
                        is24Hour={false}
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
                    />

                    <View style={{ marginTop: hp("2%") }}>
                        <Text style={styles.iPriceTitleStyle}>How much do you want to pay the assistant?</Text>
                        <View style={{ ...styles.inputContainerStyle, height: hp("10%"), }}>
                            <View style={styles.mainInputContainer}>
                                <View style={styles.textInputContainerStyle}>
                                    <TextInput
                                        keyboardType="number-pad"
                                        value={iPrice}
                                        onChangeText={setIPrice}
                                        placeholderTextColor="lightgrey"
                                        style={styles.input}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    // onPress={() => continuePress()}
                    onPress={() => navigation.navigate("PickUp")}
                    style={styles.signinButtonContainer}>
                    {loading ? (
                        <ActivityIndicator size="small" color={Colors.accentColor} />
                    ) : (
                        <Text style={styles.signinButtonText}>Continue</Text>
                    )
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddDetailInputScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    mainContainer: {
        margin: wp("3%"),
        flex: 1,
        justifyContent: 'space-between'
    },
    buttonsContainer: {
        height: hp("5%"),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagesContainer: {
        height: hp("35%"),
    },
    cameraButon: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: wp("40%"),
        borderRadius: hp("2%"),
        borderColor: Colors.primaryColor
    },
    cameraButonText: {
        fontSize: RFValue(16),
        fontWeight: "bold",
        color: Colors.primaryColor
    },
    imageContainer: {
        justifyContent: 'space-between',
        flex: 1,
        marginRight: 5,
        height: hp("11%"),
        marginTop: hp("2%"),
        overflow: 'hidden',
        borderRadius: hp("2%"),
    },
    addimageContainer: {
        marginRight: hp("2%"),
        height: hp("13%"),
        marginTop: hp("2%"),
        overflow: 'hidden',
        width: hp("13%"),
        borderRadius: hp("2%"),
    },
    inputContainerStyle: {
        backgroundColor: "#E6E6E6",
        justifyContent: 'center',
        borderRadius: hp("3%"),
        marginTop: hp("2%")
    },
    timeinputContainerStyle: {
        backgroundColor: "#E6E6E6",
        justifyContent: 'center',
        height: hp("6%"),
        borderRadius: hp("2%"),
        marginTop: hp("2%"),
        marginBottom: hp("2%")
    },
    descriptionContainerStyle: {
        backgroundColor: "#E6E6E6",
        justifyContent: 'flex-start',
        height: hp("10%"),
        borderRadius: hp("3%"),
        marginBottom: hp("2%"),
        marginTop: hp("1%")
    },
    mainInputContainer: {
        flexDirection: 'row',
        margin: wp("2%"),
        alignItems: 'center'
    },
    rightIconContainerStyle: {
        width: wp("10%"),
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
    },
    textInputContainerStyle: {
        marginLeft: wp("2%"),
        marginRight: wp("2%"),
        flex: 1,

    },
    input: {
        fontSize: RFValue(16),
        height: hp("6%"),
        color: Colors.blackColor,
        justifyContent: 'center'
    },
    descInput: {
        fontSize: RFValue(16),
        // height: hp("20%"),
        color: Colors.blackColor,
        justifyContent: 'center'
    },
    iPriceTitleStyle: {
        fontSize: RFValue(14),
        fontWeight: 'bold',
        color: Colors.lillyColor
    },
    signinButtonContainer: {
        // elevation: 8,
        height: hp("6%"),
        backgroundColor: Colors.primaryColor,
        borderRadius: hp("6%"),
        justifyContent: 'center'
    },
    signinButtonText: {
        fontSize: RFValue(16),
        color: Colors.whiteColor,
        alignSelf: "center",
    }
})

