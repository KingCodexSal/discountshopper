import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.blackBackground}>
          <Text style={styles.title}>
            Collaborate,{"\n"}Save, Shop {"\n"}Smart
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => navigation.navigate("SignupScreen")} // Replace with your next screen
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate("LoginScreen")} // Replace with your login screen
            >
              <Text style={styles.buttonText2}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blackBackground: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    position: "absolute",
    bottom: 0,
    height: "50%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    marginBottom: 60,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  getStartedButton: {
    backgroundColor: "#FF9800",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "transparent",
    borderColor: "#FF9800",
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#FF9800",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
