import { StyleSheet, TextInput, StatusBar, SafeAreaView, Image, ImageBackground, View, Dimensions, Text, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export default function RequestScreen({ navigation }) {
    return (
        <ImageBackground style={styles.container} source={require("../../assets/send.png")}>
            <StatusBar style="light" backgroundColor="#010A43" />

            <View style={{ height: "7%", width: "80%", borderColor: "#1DC7AC", borderWidth: 2, borderRadius: 8, marginTop: "15%", }} >
                <TextInput style={{ height: "100%", width: "90%", marginLeft: "5%", color: "#fff" }} />
            </View>
            <View style={{ height: height * 0.05, width: height * 0.05, marginTop: 50, borderWidth: 2, borderRadius: 40, borderColor: "#fff" }}>
                <Image style={{ height: "100%", width: "100%", resizeMode: "center", borderRadius: 40 }} source={require("../../assets/image.jpeg")} />
            </View>
            <Text style={{ marginTop: 15, color: "#fff", fontSize: height * 0.017 }}>Adedoyin Leke</Text>
            <View style={{ height: height * 0.05, width: height * 0.05, marginTop: 10, borderWidth: 2, borderRadius: 40, borderColor: "#fff", left: -90 }}>
                <Image style={{ height: "100%", width: "100%", resizeMode: "center", borderRadius: 40 }} source={require("../../assets/image.jpeg")} />
            </View>
            <Text style={{ marginTop: 15, color: "#fff", fontSize: height * 0.017, left: -90 }}>Adelaide Uti (son)</Text>
            <View style={{ height: height * 0.1, width: height * 0.1, marginTop: -40, borderWidth: 3, borderRadius: 40, borderColor: "#1DC76B", right: -100 }}>
                <Image style={{ height: "100%", width: "100%", resizeMode: "center", borderRadius: 40 }} source={require("../../assets/image.jpeg")} />
            </View>
            <Text style={{ marginTop: 15, color: "#fff", fontSize: height * 0.02, right: -100 }}>Adeleke Adeyanju</Text>
            <View style={{ height: height * 0.05, width: height * 0.05, marginTop: -20, borderWidth: 2, borderRadius: 40, borderColor: "#fff", left: -100 }}>
                <Image style={{ height: "100%", width: "100%", resizeMode: "center", borderRadius: 40 }} source={require("../../assets/image.jpeg")} />
            </View>
            <Text style={{ marginTop: 15, color: "#fff", fontSize: height * 0.017, left: -100 }}>Adolph colleague</Text>
            <View style={{ height: height * 0.05, width: height * 0.05, marginTop: -20, borderWidth: 2, borderRadius: 40, borderColor: "#fff", left: 130 }}>
                <Image style={{ height: "100%", width: "100%", resizeMode: "center", borderRadius: 40 }} source={require("../../assets/image.jpeg")} />
            </View>
            <Text style={{ marginTop: 15, color: "#fff", fontSize: height * 0.017, left: 130 }}>Adolph colleague</Text>
            <View style={{ height: height * 0.05, width: height * 0.05, borderWidth: 2, borderRadius: 40, borderColor: "#fff" }}>
                <Image style={{ height: "100%", width: "100%", resizeMode: "center", borderRadius: 40 }} source={require("../../assets/image.jpeg")} />
            </View>
            <Text style={{ marginTop: 15, color: "#fff", fontSize: height * 0.017 }}>Adedoyin Leke</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "#010A43"
    },
});
