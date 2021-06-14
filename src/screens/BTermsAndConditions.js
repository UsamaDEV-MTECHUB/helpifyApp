import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity, ImageBackground, TextInput, ScrollView, Touchable, TouchableOpacityBase } from 'react-native'
import Colors from '../constants/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { RFValue } from 'react-native-responsive-fontsize'
import NavLink from '../components/NavLink';
import { CheckBox } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
const BTermsAndCondition = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [password, setPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [checked, setChecked] = useState(false);
    const checkBoxCheck = () => {
        checked === false ?
            setChecked(true)
            :
            setChecked(false)

    }
    const backToHome = () => {
        navigation.navigate('Profile')
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.labelContainer}>
                    <Text style={styles.bigTextStyle}>Terms & Conditions</Text>
                </View>
                <View style={styles.termsContainer}>
                    <ScrollView style={styles.termsScrollContainer}>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.termsHeadingStyle}>
                                General terms and conditions
                        </Text>
                            <Text style={styles.termsHeadingStyle}>
                                Please read general terms and conditions before using Helpify services
                        </Text>
                            <Text style={styles.termsHeadingStyle}>
                                Generally
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>1-</Text>
                                <Text style={styles.termsTextStyle}>You agree that Helpify uses third-party service providers to
                                enable some aspects of the Service – such as data storage, synchronization,
                                verification and communication, and communications, and communications
                                related to mobile devices through mobile operating system providers and mobile
                            operators.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>2-</Text>
                                <Text style={styles.termsTextStyle}>You also agree that you
                                are responsible for complying with all applicable agreements,
                             terms of use/service and other principles.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>3-</Text>
                                <Text style={styles.termsTextStyle}>To use the Services, you must register for a user account
                                and provide certain information about yourself according to the instructions for the
                                current registration form. You agree that the
                                information you provide is truthful and accurate and that
                             you will ensure that the information is up to date.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>4-</Text>
                                <Text style={styles.termsTextStyle}>You agree to use "strong" passwords
                                (passwords that use a combination of uppercase and lowercase letters, numbers and symbols)
                              to your account.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>5-</Text>
                                <Text style={styles.termsTextStyle}>You are responsible for ensuring that your login details
                                remain secret and for all activities that take place under your account.
                                If you suspect that your account may have been misused, you agree to contact us directly
                              on Helpify to inform us.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                Your right to use the Services.
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>1-</Text>
                                <Text style={styles.termsTextStyle}>The right to use the Services is personal to you and you may not grant this right to another person or sell, donate or transfer your account to another person.
                            Your right to use the Service does not prevent us from allowing other people to use the Service.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>1-</Text>
                                <Text style={styles.termsTextStyle}>You are not entitled to use the name Helpify or any of the trademarks, logos or domain names of
                            Helpify or other pronounced brand characteristics, other than as permitted by these Terms of Service.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: hp("3%"), marginBottom: 0 }}>
                                <Text style={styles.listnumtext}>{'\u2022'}</Text>
                                <Text style={styles.termsTextStyle}>you agree to keep up to
                             date with the content of the Terms and Conditions of all use of Helpify Services.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: hp("3%"), marginTop: 0, marginBottom: 0 }}>
                                <Text style={styles.listnumtext}>{'\u2022'}</Text>
                                <Text style={styles.termsTextStyle}>you accept Helpify rights and do not render our service elsewhere.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: hp("3%"), marginTop: 0, marginBottom: 0 }}>
                                <Text style={styles.listnumtext}>{'\u2022'}</Text>
                                <Text style={styles.termsTextStyle}>We assume that you have the right to post all information when you
                             create ads in the service and not include anything that may be illegal.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: hp("3%"), marginTop: 0, marginBottom: 0 }}>
                                <Text style={styles.listnumtext}>{'\u2022'}</Text>
                                <Text style={styles.termsTextStyle}>you should be aware that Helpify uses the third-party provider to broker payments between the Service's users and that you, in order to make or receive payments for advertisements in the Service.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: hp("3%"), marginTop: 0, marginBottom: 0 }}>
                                <Text style={styles.listnumtext}>{'\u2022'}</Text>
                                <Text style={styles.termsTextStyle}>you must know and understand that Helpify has limited responsibility for the availability of the service and the provision of accurate information.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', margin: hp("3%"), marginTop: 0, marginBottom: 0 }}>
                                <Text style={styles.listnumtext}>{'\u2022'}</Text>
                                <Text style={styles.termsTextStyle}>you must understand and accept that we process your personal data in accordance with our Personal Data Policy.</Text>
                            </View>
                            <Text style={styles.termsTextStyle}>By using the Services on the Website and in the App, you agree to these Terms and Conditions and agree to comply with them.</Text>
                            <Text style={styles.termsTextStyle}>-Helpify has the right to change these Terms and Conditions from time to time and will then publish the amended Terms and Conditions on the Website and in the App. The amended terms and conditions will apply to new users from the date they are published on the Website or in the App. Existing users will be bound by the changed terms 30 days after notification by email or by publication on the Website and in the App.</Text>
                            <Text style={styles.termsHeadingStyle}>
                                personal data
                        </Text>
                            <Text style={styles.termsTextStyle}>Helpify processes your personal data in accordance with Helpify at any given time regarding the Personal Data Policy.</Text>
                            <Text style={styles.termsHeadingStyle}>
                                General about the service and registration
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>A-</Text>
                                <Text style={styles.termsTextStyle}>must be at least 18 years old. Only natural persons can register as users of the Service.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>B-</Text>
                                <Text style={styles.termsTextStyle}>The Service is not provided to persons who have previously violated the Terms and Conditions, previously provided by Helpify or applicable law.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>C-</Text>
                                <Text style={styles.termsTextStyle}>Helpify also reserves the right, in its sole discretion, to suspend users who use the Service in violation of the General Terms, applicable law or in a manner that otherwise appears unacceptable to Helpify.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                Intellectual property rights
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>A-</Text>
                                <Text style={styles.termsTextStyle}>All materials in the Service, including the layout of the Website and the App, are subject to copyright, trademark law, patents or other intellectual property rights. Unless otherwise stated, all material on the Website and in the Helpify App is protected property.</Text>
                            </View>
                            <Text style={styles.termsTextStyle}>Any unauthorized use of Helpify intellectual property rights may result in liability and/or criminal liability.</Text>
                            <Text style={styles.termsHeadingStyle}>
                                Withdrawal
                        </Text>
                            <Text style={styles.termsTextStyle}>You are aware that there is no right of withdrawal if you take part in or start using the Service. However, this does not limit any changes you may wish to make to the services advertised and to be performed between users of the Service.</Text>
                            <Text style={styles.termsHeadingStyle}>
                                User-generated content
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>1-</Text>
                                <Text style={styles.termsTextStyle}>User-generated content refers to all such content that a user of the Service creates or posts on the Website or in the App, such as images, movies and ad texts  User-generated  Content. Helpify does not claim any ownership of the User Generated Content.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>2-</Text>
                                <Text style={styles.termsTextStyle}>You warrant that you hold the necessary rights to the User Generated Content, either by creating it yourself (be it, for example, an image or an ad text), or that everyone who has participated has given you permission to use the User-Generated Content on the Website and in the App under the General Terms and Conditions.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>3-</Text>
                                <Text style={styles.termsTextStyle}>You warrant that the User-generated Content does not contain other people's copyrighted material, logo or other intellectual property rights that you have not been authorized to use.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>4-</Text>
                                <Text style={styles.termsTextStyle}>You warrant that you have ensured that the persons identified in the User Generated Content (for example in an image or solely by their name) are aware of how the material will be used and that they have expressly agreed to appear in the User Generated Content and that Helpify may also use the User-Generated Content for marketing purposes. By posting User Generated Content at the time of the introduction of an ad, you grant Helpify an unrestricted right to freely dispose of the User-Generated Content, for example by processing, formatting, storing or copying it and making it available to the public regardless of media channel and subscrising these rights to any partners. Helpify may also use the User Generated Content for marketing purposes. Helpify rights remain even after an ad has been removed.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>5-</Text>
                                <Text style={styles.termsTextStyle}>You hereby waive all claims for compensation from Helpify for Helpify's use of the User Generated Content.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                User's responsibility - general
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>A-</Text>
                                <Text style={styles.termsTextStyle}>As a user, you are responsible for ensuring that your registered data (first name and surname) are correct and correspond to the corresponding registered data. It is only allowed to have one account per user.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>B-</Text>
                                <Text style={styles.termsTextStyle}>It is only you who have registered as a user who can make downloads or advertise based on the registered account.  It is not allowed to let another person use your account in Helpify. You undertake to ensure that other people cannot access your account or use the Service in your name. If you have reason to suspect that someone unauthorized has access to your Account in Helpify, you undertake to contact us immediately so that we can block your account pending investigation.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>C-</Text>
                                <Text style={styles.termsTextStyle}>When you respond and are approved to perform a download or other service through the service,you are to be considered as a party in relation to the advertising party. When collecting advertised material, ownership is shifted from the advertising party to the retrieving party.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>D-</Text>
                                <Text style={styles.termsTextStyle}>Den retriever, helper, fixer party is independently responsible for ensuring that what has been collected is handled in accordance with applicable laws.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                Advertising and collection of coarse waste from households
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>1-</Text>
                                <Text style={styles.termsTextStyle}>As a user, helpers, you are responsible for ensuring that your pick-ups and shipments of coarse waste (household waste that is too large to fit among the household waste) advertised in the Service are not of such scope or duration as to constitute economic activity.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>2-</Text>
                                <Text style={styles.termsTextStyle}>coarse waste from households to be recycled shall be sorted, transported and disposed of by users collecting the waste at the recycling centres located in the municipality or elsewhere designated by the municipal reindeer keeper. When disposing of coarse waste, the user collecting the waste is obliged to follow the instructions that apply to the recycling centre.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>3-</Text>
                                <Text style={styles.termsTextStyle}>If you suspect that another user is professionally collecting and transporting coarse garbage advertised in the Service, you undertake to immediately notify Helpify so that  Helpify  can block the current user's account pending investigation.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>4-</Text>
                                <Text style={styles.termsTextStyle}>It is prohibited to use the Service for the professional collection or transport of coarse waste from households which, according to applicable environmental legislation and municipal regulations, may only be handled by the municipality or those who the municipality uses coarse garbage. Coarse waste usually refers to household waste that is so heavy or household waste that is too large to fit among the household waste. Construction and demolition waste and empty glass, plastic and paper packaging and other items that can be left at a recycling station do not count as coarse waste.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>5-</Text>
                                <Text style={styles.termsTextStyle}>In the event of suspicion that your Helpify account is used by others than yourself, that a user professionally collects and transports coarse garbage, or if the numberof downloads and shipments booked from your account is otherwise of such scope or duration that they exceed the average Helpify user’s downloads,  Helpify has the right to   suspend and without prior warning suspend you from your use of the Service.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                Taxes
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>A-</Text>
                                <Text style={styles.termsTextStyle}>You are responsible for calculating all taxes incurred or requested to be collected, reported, paid or withheld, for whatever reason, regarding the sale of your products and services and any payments you receive in connection with your use of the Services ("Taxes"). You are solely responsible for collecting, containing, reporting and paying accurate Taxes to the applicable tax authority. We are not responsible for, and we will not determine, whether Taxes are applicable, and we will not assume any liability in relation to Taxes or calculate, collect, report or pay any Taxes arising in connection with a transaction to any tax authority.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>B-</Text>
                                <Text style={styles.termsTextStyle}>You are responsible for correctly declaring to the Tax Authority the compensation you receive when you perform assignments against payment that have been advertised in the Service.  Users are responsible for any tax consequences that may arise from the use of the Service, e.g.  for the payment of any taxes and fees including social security contributions that may be paid. For further information about questions related to tax, Helpify refers to your local Tax Agency.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                Advertising rules
                                </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>1-</Text>
                                <Text style={styles.termsTextStyle}>It is forbidden to create advertisements with animals and food waste in the firstplace.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>2-</Text>
                                <Text style={styles.termsTextStyle}>It is forbidden to advertise non-reality offers. Helpify reserves the right to remove an ad or cancel an ongoing download that is considered to fall within this category.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>3-</Text>
                                <Text style={styles.termsTextStyle}>Goods that are illegal under Swedish law are prohibited by the Service. Abuse may be reported to the police.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>4-</Text>
                                <Text style={styles.termsTextStyle}>Hazardous materials such as asbestos and eternity are not allowed to advertise.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>5-</Text>
                                <Text style={styles.termsTextStyle}>It is prohibited as a downloader, helper, fixer party to ask for payment outside the platform or to ask for a higher compensation for a pickup.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>6-</Text>
                                <Text style={styles.termsTextStyle}>It is forbidden as an advertiser to take part in a transport of things to be moved.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>7-</Text>
                                <Text style={styles.termsTextStyle}>It is forbidden as an advertiser to add more items to a download after an ad has been published.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>8-</Text>
                                <Text style={styles.termsTextStyle}>You undertake to provide the information about the material or things contained in your ad that Helpify requests at any given time and warrant through your publication of the advertisement that the information provided is accurate and complete.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                The relationship between users
                                </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>A-</Text>
                                <Text style={styles.termsTextStyle}>Helpify is not a party to the Agreement between The Advertiser and The Retrieving Party. Helpify thus has no liability or liability to the Users of the Service for agreements they have entered with each other using the Service.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                Payments between users
                                </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>1-</Text>
                                <Text style={styles.termsTextStyle}>Through the Service, the Advertiser and Downloader/Fixer or Helper Party have the option to send and receive payments for the advertisement or retrieval of advertised items.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>2-</Text>
                                <Text style={styles.termsTextStyle}>The Payment Service through which the Advertiser and The Retrieving Party may send and receive payments among each other is provided by third-party provider Visa, MasterCard etc. By agreeing to these Terms and Conditions or by continuing to use the App and performing downloads for which you are paid, you will also be bound by the General Terms and Conditions of payment services, which may change from time to time.  As a condition for enabling payment services on the Website and in the App, you shall provide  payment services with accurate information about yourself through  Helpify.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>3-</Text>
                                <Text style={styles.termsTextStyle}>Payouts to the retrieving/fixer/helper user's registered bank account are activated when recovery or reuse or performing services are accounted for, reviewed and approved.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>4-</Text>
                                <Text style={styles.termsTextStyle}>Helpify charges a transaction fee for each download performed, which may vary on time and for the market. The transaction fee is 17%. The transaction fee is deducted from the retrieving, helper, fixer user's compensation which receives 83% of the amount that the advertiser sets as payment.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>5-</Text>
                                <Text style={styles.termsTextStyle}>Helpify does not charge a transaction fee for each exchange made between the parties (advertiser and recipient)</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>6-</Text>
                                <Text style={styles.termsTextStyle}>Helpify exempts itself from whether the goods between the advertiser and the recipient are broken or the wrong description of the advertiser, however, Helpify may take a stand against the party (the advertiser who waives helpify's terms and conditions.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                indemnification
                                </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>A-</Text>
                                <Text style={styles.termsTextStyle}>You as a user undertake to hold Helpify harmless if any third-party claims compensation due to User Generated Content or because you as a user have otherwise acted in violation of these Terms and Conditions or in violation of applicable law or third-party rights.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>B-</Text>
                                <Text style={styles.termsTextStyle}>We are under no circumstances liable for any of the following types of loss or damage arising during or in relation to your use of the Services, these Terms and Conditions, any Additional Terms or otherwise: a) indirect or consequential damages (including loss of profit, goodwill, contracts, revenues or expected savings, even where we have been informed of the possibility of such damages) , b) loss or destruction of data, loss or damage that is not directly the result of our breach of these Terms and Conditions loss or damage in addition to the loss or damage that is a direct result of our breach of these Terms and Conditions (whether you can prove such loss or damage or not), or e) loss or damage caused to you as a result of your or third party's act or omission or our obligation to comply with applicable law , action or failure of authority, act of war or war, accident, natural disaster, strike, blockade or other similar events whether we are the cause of the event or suffer from it.</Text>
                            </View>
                            <Text style={styles.termsHeadingStyle}>
                                Your integrity
                                </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>A-</Text>
                                <Text style={styles.termsTextStyle}>Your privacy and protection of your data is very important to us. You acknowledge that you have received and read in its entirety the terms of our Privacy Policy, incorporated into these Terms and Conditions by reference thereto and which, among other things, explain how and for what purposes we collect, use, store, disclose and protect the information you provided to us.</Text>
                            </View>
                            <Text style={styles.termsTextStyle}>We are responsible for protecting the security of personal data that we have in our possession. We have implemented administrative, technical and organizational measures to protect personal data stored on</Text>
                            <Text style={styles.termsHeadingStyle}>
                            Helpify's responsibilities
                                </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>A-</Text>
                                <Text style={styles.termsTextStyle}>Helpify provides the Service as is. Helpify reserves the right to change the Helpify Service without notice to you as a user.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>B-</Text>
                                <Text style={styles.termsTextStyle}>Helpify makes no warranties regarding the service's operation or availability and does not guarantee continuous, uninterrupted or secure access to the Service. As a user, you are aware that the operation of the Website and/or app may be disrupted by a number of factors beyond Helpify  control.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>C-</Text>
                                <Text style={styles.termsTextStyle}>Service is mainly an advertising space. Helpify has no control over or participates in the transaction between an advertising party and a retrieving party.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>D-</Text>
                                <Text style={styles.termsTextStyle}>Helpify is not liable for any damage caused by lost or delayed ad responses or to incorrect information in the advertising text, nor is it otherwise liable to you for direct or indirect damages or losses caused directly or indirectly by your use of the Service or by your inability to use the Service or its content.</Text>
                            </View>
                                <Text style={styles.termsTextStyle}>The provisions of these Terms and Conditions shall not limit Helpify's liability in the event of intentional or gross negligence or under mandatory law.</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.listnumtext}>E-</Text>
                                <Text style={styles.termsTextStyle}>Helpify reserves the right to suspend you as a user from the Service and to cease providing part or all of the Service if there is a regulatory change or through government decisions that limit  Helpify's  ability to provide the Service.</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{ marginTop: hp("3%"), marginLeft: wp("6%"), marginRight: wp("6%") }}>
                    <TouchableOpacity
                        style={{
                            margin: hp("2%"),
                            marginTop: 0,
                            marginBottom: hp("3%"),
                            flexDirection: 'row',
                            alignItems: "center"
                        }}
                        onPress={checkBoxCheck}>
                        <CheckBox
                            onPress={checkBoxCheck}
                            checked={checked}
                            color={Colors.primaryColor}
                            style={styles.checkBoxButtonStyle}
                        />
                        <Text style={{
                            fontSize: RFValue(12),
                            paddingLeft: wp("5%")
                        }}>
                            I have read term and conditions
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CreateAd")}
                        style={{ ...styles.buttonContainer, backgroundColor: Colors.primaryColor }}>
                        <Text style={{
                            ...styles.buttonText,
                            color: Colors.whiteColor
                        }}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.insideModalView}>
                            <View>
                                <View style={styles.closeIconContainer}>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <Ionicons name="close-outline"
                                            color="#7C7D7E"
                                            size={hp("4%")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.imageOutGround}>
                                    <View style={styles.imageContainer}>
                                        <ImageBackground
                                            resizeMode="contain"
                                            style={{ ...styles.image, alignItems: "center", justifyContent: "center" }}
                                            source={require("../images/Group8154.png")}>
                                            <View style={styles.circleCheckContainer}>
                                                <Image
                                                    resizeMode="contain"
                                                    style={styles.image}
                                                    source={require("../images/iconCheckCircle.png")} />
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </View>
                                <View style={{ marginTop: hp("2%"), alignItems: 'center' }}>
                                    <Text style={styles.VerifiedTextStyle}>Verified</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: hp("2%"), alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => backToHome()}>
                                    <Text style={styles.backtohomeTextStyle}>Back To Home</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default BTermsAndCondition

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
    labelContainer: {
        alignItems: 'center',
    },
    termsContainer: {
        marginTop: hp("3%"),
        flex: 1,
        borderRadius: hp("4%"),
        backgroundColor: "#F2F2F2"
    },
    termsScrollContainer: {
        flex: 1,
        margin: wp("5%")
    },
    listnumtext: {
        fontSize: RFValue(16),
        fontWeight: "300",
        color: "#4A4B4D",
    },
    termsTextStyle: {
        flex: 1, paddingLeft: 5,
        fontSize: RFValue(16),
        fontWeight: "300",
        color: "#4A4B4D",
    },
    termsHeadingStyle: {
        textTransform: 'capitalize',
        fontSize: RFValue(20),
        fontWeight: "bold",
        color: "#4A4B4D",
    },
    bigTextStyle: {
        fontSize: RFValue(30),
        color: "#4A4B4D",
    },
    smallTextStyle: {
        fontSize: RFValue(12),
        fontWeight: "300",
        color: "#4A4B4D",
    },
    inputFieldsContainer: {
        marginTop: hp("5%"),
        marginBottom: hp("2%"),
    },
    textInputContainerStyle: {
        backgroundColor: Colors.inputBackGround,
        height: hp("7%"),
        justifyContent: 'center',
        borderRadius: hp("20%")
    },
    checkBoxButtonStyle: {
        width: wp("6%"), height: wp("6%"), borderRadius: wp("1%"),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp("20%")
    },
    buttonText: {
        fontSize: RFValue(18)
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        backgroundColor: "white",
        borderTopLeftRadius: hp("2%"),
        borderTopRightRadius: hp("2%"),
        height: hp("55%")
    },
    insideModalView: {
        margin: wp("4%"),
        flex: 1,
        justifyContent: "space-between"
    },
    closeIconContainer: {
        alignItems: 'flex-end'
    },
    imageOutGround: {
        marginTop: wp("4%"),
        alignItems: "center",
        justifyContent: "center",
        height: hp("25%"),
        // width: hp("20%")
    },
    imageContainer: {
        width: hp("25%"),
        height: hp("25%"),
    },
    image: {
        width: "100%",
        height: "100%"
    },
    circleCheckContainer: {
        width: hp("10%"),
        height: hp("10%"),
    },
    VerifiedTextStyle: {
        fontSize: RFValue(30),
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    backtohomeTextStyle: {
        fontSize: RFValue(14),
        color: "#4A4B4D",
        fontWeight: 'bold'
    },
    payoutTextStyle: {
        fontSize: RFValue(14),
        color: Colors.primaryColor,
        paddingLeft: wp("1%"),
        textAlign: "center"
    },
    languageSettingModalView: {
        backgroundColor: "white",
        borderTopLeftRadius: hp("2%"),
        borderTopRightRadius: hp("2%"),
        height: hp("35%")
    },

})
