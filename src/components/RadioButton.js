import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Colors from '../constants/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
const RadioButton = ({ onPress, selected, children }) => {
  return (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View style={{
        margin: hp("1%"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default RadioButton
const styles = StyleSheet.create({
  radioButtonContainer: {
    height: hp("6%"),
    borderRadius: hp("0.5%"),
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#EDEDED",
    marginTop: hp("2%"),
    justifyContent: 'center'
  },
  radioButton: {
    height: hp("2%"),
    width: hp("2%"),
    borderRadius:hp("2%") / 2,
    backgroundColor: "#F8F8F8",
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    height: hp("2%"),
    width: hp("2%"),
    borderRadius:hp("2%") / 2,
    backgroundColor: Colors.primaryColor
  },
  radioButtonText: {
    fontSize: RFValue(14),
    color: "#2D2D2D"
  }
})
