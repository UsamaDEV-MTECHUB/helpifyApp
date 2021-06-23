import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import NavLink from '../components/NavLink';
import {loginApi} from '../api/api';
import {useDispatch} from 'react-redux';
import {login} from '../Redux/Actions/Auth';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const loginFunc = () => {
    var ema = String(email).toLowerCase().trim();
    loginApi({email: ema, username: ema, password}).then(res => {
      if (res?.success) {
        dispatch(login(res?.user));
        navigation.navigate('SearchAd');
      } else {
        alert(res?.message || res?.error || 'Network error');
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.mainCotainer}>
        <View>
          <View style={styles.credentialsContainer}>
            <View style={styles.labelContainer}>
              <Text style={styles.bigTextStyle}>Login</Text>
              <Text style={{...styles.smallTextStyle, paddingTop: hp('0.5%')}}>
                Add your details to login
              </Text>
            </View>
          </View>
          <View style={styles.inputFieldsContainer}>
            <View style={styles.textInputContainerStyle}>
              <TextInput
                value={email}
                autoCapitalize="none"
                onChangeText={text => setEmail(text)}
                placeholder="Your Email"
                placeholderTextColor="lightgray"
                style={{
                  paddingLeft: wp('8%'),
                  paddingRight: wp('8%'),
                  color: Colors.blackColor,
                }}
              />
            </View>
            <View
              style={{...styles.textInputContainerStyle, marginTop: hp('3%')}}>
              <TextInput
                value={password}
                autoCapitalize="none"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                placeholderTextColor="lightgray"
                style={{
                  paddingLeft: wp('8%'),
                  paddingRight: wp('8%'),
                  color: Colors.blackColor,
                }}
              />
            </View>
            <View style={{marginTop: hp('3%')}}>
              <TouchableOpacity
                onPress={loginFunc}
                style={{
                  ...styles.buttonContainer,
                  backgroundColor: Colors.primaryColor,
                }}>
                <Text
                  style={{
                    ...styles.buttonText,
                    color: Colors.whiteColor,
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{...styles.labelContainer, marginTop: hp('3%')}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{...styles.smallTextStyle}}>
                  Forgot your password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <NavLink
            routeName="Signin"
            text="Don't have an Account? "
            linkButtonTrext="Sign Up"
            onSubmit={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  mainCotainer: {
    flex: 1,
    margin: wp('8%'),
    marginBottom: hp('1%'),
    justifyContent: 'space-between',
  },
  labelContainer: {
    alignItems: 'center',
  },
  bigTextStyle: {
    fontSize: RFValue(30),
    color: '#4A4B4D',
  },
  smallTextStyle: {
    fontSize: RFValue(12),
    fontWeight: '300',
    color: '#4A4B4D',
  },
  inputFieldsContainer: {
    marginTop: hp('5%'),
    marginBottom: hp('2%'),
  },
  textInputContainerStyle: {
    backgroundColor: Colors.inputBackGround,
    height: hp('7%'),
    justifyContent: 'center',
    borderRadius: hp('20%'),
  },
  buttonContainer: {
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp('20%'),
  },
  buttonText: {
    fontSize: RFValue(18),
  },
});
