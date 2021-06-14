import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'

const Inbox = ({ navigation, route, }) => {
    const { name } = route.params;
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}

                textStyle={{
                    right: {
                        color: 'white',
                        fontFamily: "CerebriSans-Book"
                    },
                    left: {
                        color: '#24204F',
                        fontFamily: "CerebriSans-Book"
                    },
                }}
                wrapperStyle={{
                    //   left: {
                    //     backgroundColor: '#E6F5F3',
                    //   },
                    right: {
                        backgroundColor: Colors.primaryColor,
                    },
                }}
            />
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Ionicons name="chevron-back-outline"
                        color={Colors.blackColor}
                        onPress={() => navigation.goBack()}
                        size={hp("3%")} />
                </View>
                <View style={{
                    marginLeft: wp("2%"),
                    height: hp("6%"),
                    width: hp("6%"),
                    borderRadius: hp("6%") / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <Image
                        style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                        source={
                            name == 'Jessica Miles' ?
                            require('../images/chatAvatarImage.jpg')
                            :
                            name == 'Julia Petersen' ?
                                require('../images/chatAvatarImage2.jpg')
                                :
                                name == 'Safina Iqbal' ?
                                    require('../images/chatAvatarImage3.jpg')
                                    :
                                    name == 'Alina Ali' ?
                                        require('../images/chatAvatarImage4.jpg')
                                        :
                                        name == 'Prince Phelps' ?
                                            require('../images/chatAvatarImage5.jpg')
                                            :
                                            name == 'Josefa Gardner' ?
                                                require('../images/chatAvatarImage7.jpg')
                                                :
                                                name == 'Marisa Cain' ?
                                                require('../images/chatAvatarImage8.jpg')
                                                    :
                                                name == 'Byrd Hewitt' ?
                                                require('../images/chatAvatarImage7.jpg')
                                                    :
                                                    'https://placeimg.com/140/140/any'
                        }
                    />
                </View>
                <View style={{ paddingLeft: hp("1%") }}>
                    <Text style={styles.bigTextStyle}>{name}</Text>
                </View>
            </View>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                    avatar:
                        name == 'Jessica Miles' ?
                            require('../images/chatAvatarImage.jpg')
                            :
                            name == 'Julia Petersen' ?
                                require('../images/chatAvatarImage2.jpg')
                                :
                                name == 'Safina Iqbal' ?
                                    require('../images/chatAvatarImage3.jpg')
                                    :
                                    name == 'Alina Ali' ?
                                        require('../images/chatAvatarImage4.jpg')
                                        :
                                        name == 'Prince Phelps' ?
                                            require('../images/chatAvatarImage5.jpg')
                                            :
                                            name == 'Josefa Gardner' ?
                                                require('../images/chatAvatarImage7.jpg')
                                                :
                                                name == 'Marisa Cain' ?
                                                require('../images/chatAvatarImage8.jpg')
                                                    :
                                                name == 'Byrd Hewitt' ?
                                                require('../images/chatAvatarImage7.jpg')
                                                    :
                                                    'https://placeimg.com/140/140/any'
                }}
                showUserAvatar={true}
                showAvatarForEveryMessage={true}
                renderBubble={props => renderBubble(props)}
            />
        </View>
    )
}

export default Inbox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.whiteColor
    },
    loading: {
        flex: 1,
        backgroundColor: Colors.accentColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        margin: wp("3%"),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bigTextStyle: {
        fontSize: RFValue(18),
        color: "#4A4B4D",
    }
})
