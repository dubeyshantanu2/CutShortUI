import { StyleSheet, StatusBar, SafeAreaView, Image, ImageBackground, View, Dimensions, Text, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export default function RequestScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#010A43" }} >
            <StatusBar style="light" backgroundColor="#010A43" />
            <View style={styles.container}>
                <Text style={{ color: "#fff", fontSize: height * 0.022, fontWeight: "500", marginTop: 30 }}>New Request</Text>
                <View style={{ height: height * 0.3, width: height * 0.32, borderRadius: 150, backgroundColor: "#10194E", marginTop: 50, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ height: height * 0.2, width: height * 0.21, borderRadius: 150, backgroundColor: "#192259", alignItems: "center", justifyContent: "center" }}>
                        <Image style={{ height: height * 0.1, width: height * 0.12, borderRadius: 150, resizeMode: "cover" }} source={require("../../assets/pic.webp")} />
                    </View>
                </View>
                <Text style={{ color: "#fff", marginTop: "10%", fontSize: height * 0.03 }}>Adeleke Ramon</Text>
                <Text style={{ color: "#fff", marginTop: "5%", fontSize: height * 0.021 }}>is requesting for:</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: "8%" }}>
                    <MaterialCommunityIcons name="currency-ngn" size={height * 0.06} color="#fff" />
                    <Text style={{ color: "#fff", marginLeft: "2%", fontWeight: "bold", fontSize: height * 0.06 }}>200,000</Text>
                </View>
                <Pressable
                    onPress={() => navigation.navigate("Send")}
                    style={{ height: height * 0.07, width: "45%", borderRadius: 10, backgroundColor: "#FF2E63", borderColor: "#FF2E63", borderWidth: 1, alignItems: "center", justifyContent: "center", marginTop: "8%" }}>
                    <Text style={{ color: "#fff", }}>Send money</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate("Home")}
                    style={{ height: height * 0.07, width: "45%", borderRadius: 10, borderColor: "#464E8A", borderWidth: 1, alignItems: "center", justifyContent: "center", marginTop: "5%" }}>
                    <Text style={{ color: "#464E8A", fontWeight: "bold" }}>Don't send</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "flex-start", alignItems: "center"
    },
});
