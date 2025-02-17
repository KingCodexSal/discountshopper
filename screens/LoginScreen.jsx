import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    Alert.alert("Login", "Login logic goes here");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="hello@example.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="********"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("HomeScreen")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fingerprintButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.fingerprintText}>Login with Fingerprint</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Don't have an account?{" "}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          Sign up
        </Text>
      </Text>

      {/* Custom Modal for Fingerprint Login */}
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalBodyText}>
            Touch the fingerprint sensor to login
          </Text>
          <Ionicons
            name="finger-print"
            size={80}
            color="gray"
            style={{ marginVertical: 10 }}
          />
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.useEmailText}>Use Email</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    color: "#000000",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#A9A9A9",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    textAlign: "right",
    color: "#FF9800",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF9800",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  fingerprintButton: {
    borderWidth: 1,
    borderColor: "#FF9800",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  fingerprintText: {
    color: "#FF9800",
    fontWeight: "bold",
  },
  footerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#000000",
  },
  link: {
    color: "#FF9800",
    fontWeight: "bold",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    height: 300, // Adjust height as needed
  },
  modalBodyText: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 16,
  },
  useEmailText: {
    color: "#FF9800", // Orange color for the text
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 30,
  },
});

export default LoginScreen;
