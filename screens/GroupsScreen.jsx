import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GroupsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shared Gifts</Text>
      <Text style={styles.content}>
        Here you can find gifts shared by your friends!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: "#555",
  },
});

export default GroupsScreen;
