import { StyleSheet, SafeAreaView, Platform, Pressable, StatusBar, View, Dimensions, Text } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../component/BottomSheet';

const { height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={{ backgroundColor: "#010A43", flex: 1 }} >
                <StatusBar style="light" backgroundColor="#010A43" />
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <View style={{ height: height * 0.06, width: height * 0.06, backgroundColor: "#212A6B", borderRadius: 40, justifyContent: "center", alignItems: "center" }}>
                                <Ionicons name="menu" size={32} color="#FF2E63" />
                            </View>
                            <Text style={{ marginLeft: "8%", color: "#fff", fontSize: height * 0.023 }}>Hello Sandra,</Text>
                        </View>
                        <Pressable style={{ backgroundColor: "#212A6B", justifyContent: "center", alignItems: "center", paddingHorizontal: height * 0.015, paddingVertical: height * 0.008, borderRadius: 8 }}>
                            <Text style={{ color: "#426DDC", fontSize: height * 0.016, lineHeight: 20 }}>Add money</Text>
                        </Pressable>
                    </View>
                    <Text style={{ color: "#fff", marginTop: "12%" }}>Your current balance is</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: "3%" }}>
                        <MaterialCommunityIcons name="currency-ngn" size={height * 0.06} color="#fff" />
                        <Text style={{ color: "#fff", marginLeft: "2%", fontWeight: "bold", fontSize: height * 0.06 }}>200,000</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-around", marginTop: "8%" }}>
                        <Pressable
                            onPress={() => navigation.navigate("Request")}
                            style={styles.button}>
                            <Text style={{ color: "#464E8A" }}>Request Money</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => navigation.navigate("Request")}
                            style={styles.button}>
                            <Text style={{ color: "#464E8A" }}>Send Money</Text>
                        </Pressable>
                    </View>
                </View>
                <BottomSheet />
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        paddingHorizontal: "4%",
        marginTop: Platform.OS === 'android' ? "10%" : 0,
    },
    topBar: {
        height: height * 0.06,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    button: {
        height: height * 0.07,
        width: "45%",
        borderRadius: 10,
        borderColor: "#464E8A",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",

    }
});
