import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, View, Dimensions, Text, Pressable } from 'react-native';

const { height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
    return (
        <ImageBackground style={styles.container} source={require("../../assets/splashone.png")}>
            <StatusBar style="inverted" />
            <View style={styles.bottomContainer}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ height: 10, width: 20, backgroundColor: "#FDD590", borderRadius: 20 }} />
                    <View style={{ height: 10, width: 40, backgroundColor: "#FFB129", borderRadius: 20, marginLeft: "1.5%" }} />
                    <View style={{ height: 10, width: 20, backgroundColor: "#FDD590", borderRadius: 20, marginLeft: "1.5%" }} />
                </View>
                <Text style={{ color: "white", marginTop: "6%", fontSize: height * 0.025, fontWeight: 'bold' }}>Transfer That Is Safe</Text>
                <Text style={{ color: "white", marginTop: "3%", fontSize: height * 0.02, }}>You have nothing to be scared about, we got you covered.</Text>
                <Pressable style={{ height: "25%", width: "50%", backgroundColor: "white", justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: "4%" }}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={{ color: "#17288E" }}>Start Banking</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexDirection: "column",
    },
    bottomContainer: {
        height: height * 0.27,
        width: "85%",
        backgroundColor: "#17288E",
        borderTopRightRadius: 70,
        padding: "8%",
    }
});
