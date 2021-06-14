import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/screens/Saplash'
import Main from './src/screens/Main'
import Signin from './src/screens/Signin';
import Signup from './src/screens/Signup';
import ForgotPassword from './src/screens/ForgotPassword';
import ResetPasword from './src/screens/ResetPasword';
import TermsandCondition from './src/screens/TermsandCondition';
import Navigator from './src/navigation/Navigator'
import SearchAd from './src/screens/SearchAd';
import ItemView from './src/screens/ItemView';
import VerifyNum from './src/screens/VerifyNum';
import MoreItem from './src/screens/MoreItem';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Colors from './src/constants/Colors'
import Profile from './src/screens/Profile';
import CreateAd from './src/screens/CreateAd';
import Chat from './src/screens/Chat';
import More from './src/screens/More';
import PaymentDetailsScreen from './src/screens/PaymentDetails';
import BTermsAndCondition from './src/screens/BTermsAndConditions';
import Delivery from './src/screens/Delivery';
import ChooseTime from './src/screens/ChooseTime';
import PickUp from './src/screens/PickUp';
import PickOff from './src/screens/PickOff';
import Inbox from './src/screens/Inbox';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function SearchTab() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: Colors.whiteColor,
      keyboardHidesTabBar: true,
      inactiveTintColor: '#B5B5B5',
      
      style: {
          backgroundColor: 'white',
          height: hp("7%"), borderTopLeftRadius: hp("2.5%"),
          borderTopRightRadius: hp("2.5%")
      },
  }}>
      <Tab.Screen name="SearchAd" component={SearchAd} options={{
        tabBarIcon: ({ color, focused }) =>
          focused ? (
            <View
              style={styles.selectedView}>
              <Icon
                name="home"
                size={hp("2%")}
                color={color}
              />
              <Text style={{ ...styles.tabText, color: color }}>Home</Text>
            </View>
          ) : (
            <Icon
              name="home-outline"
              size={hp("3%")}
              color={color}
            />
          ),
        title: '',
      }} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <View
                        style={styles.selectedView}>
                            <Icon
                                name="person"
                                size={hp("2%")}
                                color={color}
                            />
                            <Text style={{ ...styles.tabText, color: color }}>Profile</Text>
                        </View>
                    ) : (
                        <Icon
                            name="person-outline"
                            size={hp("3%")}
                            color={color}
                        />
                    ),
                title: '',
            }} />
            <Tab.Screen name="Ad" component={AdStackScreen} options={{
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <View
                            style={styles.selectedView}>
                            <Icon
                                name="add-circle"
                                size={hp("3%")}
                                color={color}
                            />
                            <Text style={{ ...styles.tabText, color: color }}>Ad</Text>
                        </View>
                    ) : (
                        <Icon
                            name="add-circle"
                            size={hp("3%")}
                            color={color}
                        />
                    ),
                title: '',
            }} />
            <Tab.Screen name="Messaging" component={Chat} options={{
                
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <View
                            style={styles.selectedViewRight}>
                            <Icon
                                name="mail"
                                size={hp("2%")}
                                color={color}
                            />
                            <Text style={{ ...styles.tabText, color: color }}>Chat</Text>
                        </View>
                    ) : (
                        <Icon
                            name="mail-outline"
                            size={hp("3%")}
                            color={color}
                        />
                    ),
                title: '',
            }} />
    </Tab.Navigator>
  );
}
const AdStack = createStackNavigator();
function AdStackScreen() {
    return (
      <AdStack.Navigator>
            <AdStack.Screen name="CreateAd" component={CreateAd}
                options={{ headerShown: false }} />
            <AdStack.Screen name="MoreItem" component={MoreItem}
                options={{ headerShown: false }} />
            <AdStack.Screen name="Delivery" component={Delivery}
                options={{ headerShown: false }} />
            <AdStack.Screen name="ChooseTime" component={ChooseTime}
                options={{ headerShown: false }} />
            <AdStack.Screen name="PickUp" component={PickUp}
                options={{ headerShown: false }} />
            <AdStack.Screen name="PickOff" component={PickOff}
                options={{ headerShown: false }} />
                <AdStack.Screen name="ItemView" component={ItemView}
                options={{ headerShown: false }} />
        </AdStack.Navigator>
    );
  }
  const ProfileStack = createStackNavigator();
  function ProfileStackScreen() {
      return (
          <ProfileStack.Navigator>
              <ProfileStack.Screen name="Profile" component={Profile}
                  options={{ headerShown: false }} />
              <ProfileStack.Screen name="More" component={More}
                  options={{ headerShown: false }} />
              <ProfileStack.Screen name="PaymentDetails" component={PaymentDetailsScreen}
                  options={{ headerShown: false }} />
              <ProfileStack.Screen name="BTermsAndConditions" component={BTermsAndCondition}
                  options={{ headerShown: false }} />
              <ProfileStack.Screen name="CreateAd" component={AdStackScreen}
                  options={{ headerShown: false }} />
                  
          </ProfileStack.Navigator>
      );
  }
  const SearchStack = createStackNavigator();
function SearchStackScreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="SearchAd" component={SearchAd}
                options={{ headerShown: false }} />
            
        </SearchStack.Navigator>
    );
}
function ProfileTab() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: Colors.whiteColor,
      keyboardHidesTabBar: true,
      inactiveTintColor: '#B5B5B5',
      
      style: {
          backgroundColor: 'white',
          height: hp("7%"), borderTopLeftRadius: hp("2.5%"),
          borderTopRightRadius: hp("2.5%")
      },
  }}>
      <Tab.Screen name="Profile" component={ProfileStackScreen} options={{
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <View
                        style={styles.selectedView}>
                            <Icon
                                name="person"
                                size={hp("2%")}
                                color={color}
                            />
                            <Text style={{ ...styles.tabText, color: color }}>Profile</Text>
                        </View>
                    ) : (
                        <Icon
                            name="person-outline"
                            size={hp("3%")}
                            color={color}
                        />
                    ),
                title: '',
            }} />
            <Tab.Screen name="Search" component={SearchStackScreen} options={{
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <View
                            style={styles.selectedView}>
                            <Icon
                                name="home"
                                size={hp("2%")}
                                color={color}
                            />
                            <Text style={{ ...styles.tabText, color: color }}>Home</Text>
                        </View>
                    ) : (
                        <Icon
                            name="home-outline"
                            size={hp("3%")}
                            color={color}
                        />
                    ),
                title: '',
            }} />
            <Tab.Screen name="Ad" component={AdStackScreen} options={{
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <View
                            style={styles.selectedView}>
                            <Icon
                                name="add-circle"
                                size={hp("3%")}
                                color={color}
                            />
                            <Text style={{ ...styles.tabText, color: color }}>Ad</Text>
                        </View>
                    ) : (
                        <Icon
                            name="add-circle"
                            size={hp("3%")}
                            color={color}
                        />
                    ),
                title: '',
            }} />
            <Tab.Screen name="Messaging" component={Chat} options={{
                
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <View
                            style={styles.selectedViewRight}>
                            <Icon
                                name="mail"
                                size={hp("2%")}
                                color={color}
                            />
                            <Text style={{ ...styles.tabText, color: color }}>Chat</Text>
                        </View>
                    ) : (
                        <Icon
                            name="mail-outline"
                            size={hp("3%")}
                            color={color}
                        />
                    ),
                title: '',
            }} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="SearchAd" component={SearchTab} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyNum" component={VerifyNum} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPasword" component={ResetPasword} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileTab} options={{ headerShown: false }} />
        <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
const styles = StyleSheet.create({
  selectedView: {
    height: hp("4%"),
    width: wp("22%"),
    // marginTop: hp("2%"),
    backgroundColor: '#F9675B',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp("3%"),
    marginLeft: wp("6%"),
  },
  selectedViewRight: {
    height: hp("4%"),
    width: wp("22%"),
    // marginTop: hp("2%"),
    backgroundColor: '#F9675B',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp("3%"),
    marginRight: wp("6%"),
  },
  tabText: {
    fontSize: RFValue(12),
    paddingLeft: wp("2%")
  }
})