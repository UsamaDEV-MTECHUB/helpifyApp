import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Text,
    View,
    Button,
    Modal,
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
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { add } from 'react-native-reanimated'
const ChooseTime = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(new Date());
    const onChange = (event, selectedDate) => {
        setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentDate = selectedDate || new Date();
      setDate(currentDate);
      setMode('time');
      setShow(Platform.OS !== 'ios'); // to show the picker again in time mode
    } else {
      const selectedTime = selectedDate || new Date();
      setTime(selectedTime);
      console.log(time)
      setShow(Platform.OS === 'ios');
      setMode('date');
    }
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer} >
                <View style={{
                    alignItems: 'center',
                    justifyContent: "center", height: hp("5%"),
                    marginBottom: hp("2%")
                }}>
                    <Text style={{
                        fontSize: RFValue(30), color: '#515C6F',
                    }}>
                        Choose Time</Text>
                </View>
                {/* <Text>{date}</Text> */}
                <View>
                <View style={{
                    marginTop: hp("3%"),
                }}>
                    <TouchableOpacity
                        onPress={() => showTimepicker()}
                        style={styles.signinButtonContainer}>
                        <Text style={styles.signinButtonText}>Show time picker!</Text>
                    </TouchableOpacity>
                </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="clock"
                            onChange={onChange}
                        />
                    )}
                </View>
                <View style={{
                    marginTop: hp("3%"),
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PickUp")}
                        style={styles.signinButtonContainer}>
                        <Text style={styles.signinButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

export default ChooseTime

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.accentColor
    },
    mainContainer: {
        margin: wp("3%"),
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
})

