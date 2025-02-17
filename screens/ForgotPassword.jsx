import React, { useState, useEffect } from "react";
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

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer]);

  const handleContinue = () => {
    setModalVisible(true);
    setIsTimerActive(true);
  };

  const handleResendCode = () => {
    setTimer(60);
    setIsTimerActive(true);
    Alert.alert("Code Resent", "A new code has been sent to your email.");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIcon}
      >
        <Ionicons name="arrow-back" size={24} color="gray" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.subtitle}>
          Enter your email address to receive a 4-digit code to reset your
          password.
        </Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="hello@example.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={modalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="down"
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Enter your code</Text>
          <Text style={styles.modalBodyText}>
            Enter the 4-digit code sent to your email.
          </Text>
          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            maxLength={4}
          />
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => navigation.navigate("ResetPassword")}
          >
            <Text style={styles.modalButtonText}>Continue</Text>
          </TouchableOpacity>
          {timer > 0 ? (
            <Text style={styles.timerText}>Resend code in {timer}s</Text>
          ) : (
            <TouchableOpacity onPress={handleResendCode}>
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          )}
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
  },
  backIcon: {
    paddingTop: 30,
  },
  content: {
    paddingVertical: 70,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    color: "#000000",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "left",
    color: "#000",
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
    width: "100%", // Ensure input takes full width
  },
  button: {
    backgroundColor: "#FF9800",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    width: "100%", // Ensure button takes full width
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
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
    height: 350,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalBodyText: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 16,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    width: "100%",
    height: 50,
    textAlign: "center",
    fontSize: 24,
    marginVertical: 20,
  },
  modalButton: {
    backgroundColor: "#FF9800",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
  },
  modalButtonText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  timerText: {
    marginVertical: 20,
    color: "#000",
  },
  resendText: {
    color: "#FF9800",
    fontWeight: "bold",
    marginVertical: 20,
  },
});

export default ForgotPassword;
