import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnboardingScreen");
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/cart.png")} style={styles.icon} />
      <Text style={styles.text}>Discount Shopper</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF9800",
  },
});

export default SplashScreen;
