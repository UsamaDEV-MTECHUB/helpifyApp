import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import Profile from '../screens/Profile'
import Dashboard from '../screens/Dashboard'
import SearchAd from '../screens/SearchAd'
import CreateAd from '../screens/CreateAd'
import Chat from '../screens/Chat'
import ItemView from '../screens/ItemView'
import PaymentDetails from '../screens/PaymentDetails'
import More from '../screens/More'
import MoreItem from '../screens/MoreItem'
import Delivery from '../screens/Delivery'
import ChooseTime from '../screens/ChooseTime'
import PickUp from '../screens/PickUp'
import PickOff from '../screens/PickOff'
import Inbox from '../screens/Inbox'
import BTermsAndConditions from '../screens/BTermsAndConditions'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import Main from '../screens/Main';
const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Dashboard" component={Dashboard}
                options={{ headerShown: false }} />
            <HomeStack.Screen name="BTermsAndConditions" component={BTermsAndConditions}
                options={{ headerShown: false }} />
            <HomeStack.Screen name="CreateAd" component={AdStackScreen}
                options={{ headerShown: false }} />
                 {/* <HomeStack.Screen name="MoreItem" component={MoreItem}
                options={{ headerShown: false }} />
                 <HomeStack.Screen name="ItemView" component={ItemView}
                options={{ headerShown: false }} /> */}
        </HomeStack.Navigator>
    );
}
const SearchStack = createStackNavigator();
function SearchStackScreen() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="SearchAd" component={SearchAd}
                options={{ headerShown: false }} />
            <SearchStack.Screen name="ItemView" component={ItemView}
                options={{ headerShown: false }} />
        </SearchStack.Navigator>
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
        </AdStack.Navigator>
    );
}
const MessagingStack = createStackNavigator();
function MessagingStackScreen() {
    return (
        <MessagingStack.Navigator>
            <MessagingStack.Screen name="Chat" component={Chat}
                options={{ headerShown: false }} />
            <MessagingStack.Screen name="Inbox" component={Inbox}
                options={{ headerShown: false, tabBarVisible:false }} />
        </MessagingStack.Navigator>
    );
}
const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile}
                options={{ headerShown: false }} />
            <ProfileStack.Screen name="Main" component={Main}
                options={{ headerShown: false,  }} />
            <ProfileStack.Screen name="More" component={More}
                options={{ headerShown: false }} />
            <ProfileStack.Screen name="PaymentDetails" component={PaymentDetails}
                options={{ headerShown: false }} />
            <ProfileStack.Screen name="BTermsAndConditions" component={BTermsAndConditions}
                options={{ headerShown: false }} />
            <ProfileStack.Screen name="CreateAd" component={AdStackScreen}
                options={{ headerShown: false }} />
                
        </ProfileStack.Navigator>
    );
}
const Tab = createBottomTabNavigator();
const getTabBarVisibility = (route) => {
    const {routeName} = route.state
      ? route.state.routes[route.state.index].name
      : '';
  
    if (routeName === 'CameraView') {
      return false;
    }
  
    return true;
  }
const Navigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
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
            {/* <Tab.Screen name="Home" component={HomeStackScreen} options={{
               
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
             */}
            <Tab.Screen name="Search" component={SearchStackScreen} options={{
                tabBarIcon: ({ color, focused }) =>
                    focused ? (
                        <View
                            style={styles.selectedView}>
                            <Icon
                                name="search"
                                size={hp("2%")}
                                color={color}
                            />
                            <Text style={{ ...styles.tabText, color: color }}>Search</Text>
                        </View>
                    ) : (
                        <Icon
                            name="search"
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
            <Tab.Screen name="Messaging" component={MessagingStackScreen} options={{
                
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
    )
}
export default Navigator;
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