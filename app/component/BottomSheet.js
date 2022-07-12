import { StyleSheet, Text, Image, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

const { height } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -height + 50;

const BottomSheet = () => {
    const translateY = useSharedValue(0);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        }).onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        });

    useEffect(() => {
        translateY.value = withSpring(-height / 40, { damping: 50 });
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        );

        return {
            borderRadius,
            transform: [{ translateY: translateY.value }],
        };
    });


    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]} >
                <View style={styles.line} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", padding: "4%", width: "100%", justifyContent: "space-between" }}>
                        <Text style={{ color: "#fff", fontSize: height * 0.02 }}>All transactions</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: "#4E589F", fontSize: height * 0.016, marginRight: "4%" }}>Sort by:</Text>
                            <Text style={{ color: "#fff", fontSize: height * 0.018 }}>Recent</Text>
                        </View>

                    </View>

                    <View style={{ height: height * 0.1, width: "100%", backgroundColor: "#192259", paddingHorizontal: "4%", flexDirection: "row" }}>
                        <View style={{ height: "100%", width: "70%", flexDirection: "row" }}>
                            <View style={{ height: "100%", width: "25%", alignItems: "center", justifyContent: "center" }}>
                                <Image style={{ height: height * 0.06, width: height * 0.06, borderRadius: 30 }} source={require("../../assets/image.jpeg")} />
                            </View>
                            <View style={{ height: "100%", width: "70%", paddingLeft: "4%", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                                <Text style={{ color: "#858EC5", fontSize: height * 0.02 }}>Mercy Popoola</Text>
                                <View style={{ height: height * 0.03, width: "50%", borderRadius: 20, backgroundColor: "#1DC7AC", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#fff" }}>Received</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: "100%", width: "30%", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                            <MaterialCommunityIcons name="currency-ngn" size={height * 0.02} color="#1DC7AC" />
                            <Text style={{ color: "#1DC7AC", marginLeft: "2%", fontWeight: "bold", fontSize: height * 0.02 }}>200,000</Text>
                        </View>
                    </View>

                    <View style={{ height: height * 0.1, width: "100%", backgroundColor: "#10194E", paddingHorizontal: "4%", flexDirection: "row" }}>
                        <View style={{ height: "100%", width: "70%", flexDirection: "row" }}>
                            <View style={{ height: "100%", width: "25%", alignItems: "center", justifyContent: "center" }}>
                                <Image style={{ height: height * 0.06, width: height * 0.06, borderRadius: 30 }} source={require("../../assets/pic.webp")} />
                            </View>
                            <View style={{ height: "100%", width: "70%", paddingLeft: "4%", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                                <Text style={{ color: "#858EC5", fontSize: height * 0.02 }}>Mercy Popoola</Text>
                                <View style={{ height: height * 0.03, width: "50%", borderRadius: 20, backgroundColor: "#FE4A54", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#fff" }}>Failed</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: "100%", width: "30%", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                            <MaterialCommunityIcons name="currency-ngn" size={height * 0.02} color="#FE4A54" />
                            <Text style={{ color: "#FE4A54", marginLeft: "2%", fontWeight: "bold", fontSize: height * 0.02 }}>110,000</Text>
                        </View>
                    </View>

                    <View style={{ height: height * 0.1, width: "100%", backgroundColor: "#192259", paddingHorizontal: "4%", flexDirection: "row" }}>
                        <View style={{ height: "100%", width: "70%", flexDirection: "row" }}>
                            <View style={{ height: "100%", width: "25%", alignItems: "center", justifyContent: "center" }}>
                                <Image style={{ height: height * 0.06, width: height * 0.06, borderRadius: 30 }} source={require("../../assets/pic.webp")} />
                            </View>
                            <View style={{ height: "100%", width: "70%", paddingLeft: "4%", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                                <Text style={{ color: "#858EC5", fontSize: height * 0.02 }}>Onome Adetayo</Text>
                                <View style={{ height: height * 0.03, width: "50%", borderRadius: 20, backgroundColor: "#FAAD39", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#fff" }}>Sent</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: "100%", width: "30%", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                            <MaterialCommunityIcons name="currency-ngn" size={height * 0.02} color="#FAAD39" />
                            <Text style={{ color: "#FAAD39", marginLeft: "2%", fontWeight: "bold", fontSize: height * 0.02 }}>10,000</Text>
                        </View>
                    </View>

                    <View style={{ height: height * 0.1, width: "100%", backgroundColor: "#10194E", paddingHorizontal: "4%", flexDirection: "row" }}>
                        <View style={{ height: "100%", width: "70%", flexDirection: "row" }}>
                            <View style={{ height: "100%", width: "25%", alignItems: "center", justifyContent: "center" }}>
                                <Image style={{ height: height * 0.06, width: height * 0.06, borderRadius: 30 }} source={require("../../assets/image.jpeg")} />
                            </View>
                            <View style={{ height: "100%", width: "70%", paddingLeft: "4%", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                                <Text style={{ color: "#858EC5", fontSize: height * 0.02 }}>Mercy Popoola</Text>
                                <View style={{ height: height * 0.03, width: "50%", borderRadius: 20, backgroundColor: "#1DC7AC", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#fff" }}>Received</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: "100%", width: "30%", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                            <MaterialCommunityIcons name="currency-ngn" size={height * 0.02} color="#1DC7AC" />
                            <Text style={{ color: "#1DC7AC", marginLeft: "2%", fontWeight: "bold", fontSize: height * 0.02 }}>200,000</Text>
                        </View>
                    </View>

                </View>

            </Animated.View>
        </GestureDetector>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: height + height,
        width: "100%",
        backgroundColor: '#10194E',
        position: 'absolute',
        top: height / 2.2,
        borderRadius: 40
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: "#4E589F",
        alignSelf: "center",
        marginVertical: 15,
        borderRadius: 2
    }
})