import React, { useState } from 'react'
import { StyleSheet, Image, Text, View, ScrollView, Dimensions } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
}
    from 'react-native-responsive-screen'
const { width } = Dimensions.get("window")
const height = width * 0.7; // 60%

const Slider = ({ images }) => {
    const [active, setActive] = useState(0)
    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if (slide !== active) {
            setActive(slide)
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={styles.container}>
                {
                    images.map((item, index) => (
                        <Image source={item}
                            key={index}
                            style={styles.image} />
                    ))
                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    images.map((i, k) => (
                        <Text key={k} style={k == active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                    ))
                }
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        width, height
    },
    image: { width, height, resizeMode: "cover" },
    pagination: { flexDirection: "row", position: 'absolute', bottom: 30, alignSelf: "center" },
    pagingText: { fontSize: 20, color: "#888888", margin: 3 },
    pagingActiveText: { fontSize: 20, color: "#fff", margin: 3 }
})
