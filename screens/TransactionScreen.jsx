import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Sample transaction data
const transactions = [
  {
    id: "1",
    type: "Top-up",
    status: "Completed",
    amount: "+₦500",
    time: "1 hour ago",
    icon: "arrow-up-circle-outline",
    iconColor: "green",
    bgColor: "#E8F5E9",
  },
  {
    id: "2",
    type: "Refund for Order",
    status: "Refunded",
    amount: "+₦1500",
    time: "10 hours ago",
    icon: "chatbubble-outline",
    iconColor: "red",
    bgColor: "#FFEBEE",
  },
  {
    id: "3",
    type: "Top-up",
    status: "Completed",
    amount: "+₦500",
    time: "1 hour ago",
    icon: "arrow-up-circle-outline",
    iconColor: "green",
    bgColor: "#E8F5E9",
  },
  {
    id: "4",
    type: "Bonus Credit",
    status: "Applied",
    amount: "+₦500",
    time: "2 days ago",
    icon: "gift-outline",
    iconColor: "purple",
    bgColor: "#E8F5E9",
  },
  {
    id: "5",
    type: "Refund for Order",
    status: "Refunded",
    amount: "+₦1500",
    time: "10 hours ago",
    icon: "chatbubble-outline",
    iconColor: "red",
    bgColor: "#FFEBEE",
  },
  {
    id: "6",
    type: "Bonus Credit",
    status: "Applied",
    amount: "+₦500",
    time: "2 days ago",
    icon: "gift-outline",
    iconColor: "purple",
    bgColor: "#E8F5E9",
  },
  {
    id: "7",
    type: "Top-up",
    status: "Completed",
    amount: "+₦500",
    time: "1 hour ago",
    icon: "arrow-up-circle-outline",
    iconColor: "green",
    bgColor: "#E8F5E9",
  },
  {
    id: "8",
    type: "Bonus Credit",
    status: "Applied",
    amount: "+₦500",
    time: "2 days ago",
    icon: "gift-outline",
    iconColor: "purple",
    bgColor: "#E8F5E9",
  },
  {
    id: "9",
    type: "Refund for Order",
    status: "Refunded",
    amount: "+₦1500",
    time: "10 hours ago",
    icon: "chatbubble-outline",
    iconColor: "red",
    bgColor: "#FFEBEE",
  },
];

const TransactionScreen = ({ navigation }) => {
  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View
        style={[
          styles.transactionIconContainer,
          { backgroundColor: item.bgColor },
        ]}
      >
        <Ionicons name={item.icon} size={24} color={item.iconColor} />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionTitle}>{item.type}</Text>
        <Text style={styles.transactionStatus}>{item.status}</Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text style={styles.amountText}>{item.amount}</Text>
        <Text style={styles.transactionTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>Transaction History</Text>

      <FlatList
        data={transactions}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationButton: {
    padding: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  transactionStatus: {
    fontSize: 14,
    color: "#888888",
  },
  transactionAmount: {
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 4,
  },
  transactionTime: {
    fontSize: 12,
    color: "#888888",
  },
});

export default TransactionScreen;
