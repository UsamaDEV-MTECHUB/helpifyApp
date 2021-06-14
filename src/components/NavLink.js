import React from 'react';
import { Text, StyleSheet, View,Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Colors from '../constants/Colors';
const NavLink = ({ text, linkButtonTrext, onSubmit }) => {
  return (
    <View style={{
      flexDirection: 'row', justifyContent: 'center',
    }}>
      <Text style={styles.dontHaveButton}>{text}</Text>
      <Pressable onPress={onSubmit}>
        <Text style={styles.signUpButton}>{linkButtonTrext}</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  signUpButton: {
    fontSize: RFValue(14),
    color: Colors.primaryColor,
    fontWeight: "bold",
    alignSelf: "center",
  },
  dontHaveButton: {
    fontStyle: 'normal',
    fontSize: RFValue(14),
    color: Colors.primaryColor,
    alignSelf: "center",
  },
})
export default NavLink;