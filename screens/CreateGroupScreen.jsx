import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const locations = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Enugu",
  "Kaduna",
  "Benin City",
];

const CreateGroupScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F5F5F5" }}
      edges={["top", "bottom"]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Create Group</Text>
          <TouchableOpacity style={styles.imageContainer}>
            <View style={styles.cameraIconContainer}>
              <Ionicons name="camera-outline" size={30} color="#777" />
            </View>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Group Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Abiola Thomas"
              placeholderTextColor="#999"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>No. of Group Members</Text>
            <TextInput
              style={styles.input}
              placeholder="10"
              placeholderTextColor="#999"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Location</Text>
            <TouchableOpacity
              style={styles.dropdownContainer}
              onPress={() => setShowDropdown(true)}
            >
              <Text
                style={[
                  styles.dropdownInput,
                  !selectedLocation && styles.placeholderText,
                ]}
              >
                {selectedLocation || "Select a location"}
              </Text>
              <Ionicons
                name="chevron-down"
                size={20}
                color="#999"
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Group Description</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Abiola Thomas"
              placeholderTextColor="#999"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>
        </ScrollView>
        <Modal
          visible={showDropdown}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowDropdown(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            activeOpacity={1}
            onPress={() => setShowDropdown(false)}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Location</Text>
              <FlatList
                data={locations}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.locationItem}
                    onPress={() => handleSelectLocation(item)}
                  >
                    <Text style={styles.locationText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 5,
    zIndex: 10,
    padding: 5,
  },
  notificationButton: {
    position: "absolute",
    top: 0,
    right: 5,
    zIndex: 10,
    padding: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
    color: "#222",
  },
  imageContainer: {
    alignSelf: "center",
    backgroundColor: "#E0E0E0",
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cameraIconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: "#666",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f4f4f4",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
  dropdownContainer: {
    position: "relative",
  },
  dropdownInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  placeholderText: {
    color: "#999",
  },
  dropdownIcon: {
    position: "absolute",
    right: 15,
    top: 12,
  },
  createButton: {
    backgroundColor: "#FF9800",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
    shadowColor: "#FF9800",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  createButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    maxHeight: "70%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  locationItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  locationText: {
    fontSize: 16,
    color: "#333",
  },
});

export default CreateGroupScreen;
