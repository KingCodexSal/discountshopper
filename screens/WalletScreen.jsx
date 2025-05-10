import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const WalletScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Wallet</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceCard}>
        <View style={styles.balanceTopSection}>
          <View>
            <View style={styles.availableBalanceRow}>
              <Text style={styles.availableBalanceText}>Available Balance</Text>
              <Ionicons
                name="eye-outline"
                size={18}
                color="white"
                style={styles.eyeIcon}
              />
            </View>
            <Text style={styles.balanceAmount}>₦30,000</Text>
          </View>
          <TouchableOpacity
            style={styles.addMoneyButton}
            onPress={() => navigation.navigate("Topup")}
          >
            <Text style={styles.addMoneyButtonText}>Add Money</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceNote}>
          ₦30,000 for the purchase of 1 basket of tomato
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={styles.actionItem}
          onPress={() => navigation.navigate("Topup")}
        >
          <View style={styles.actionIconContainer}>
            <Ionicons name="wallet-outline" size={24} color="#FF9800" />
          </View>
          <Text style={styles.actionText}>Top-up Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionItem}
          onPress={() => navigation.navigate("TransactionScreen")}
        >
          <View style={styles.actionIconContainer}>
            <Ionicons name="time-outline" size={24} color="#FF9800" />
          </View>
          <Text style={styles.actionText}>Transaction History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <View style={styles.actionIconContainer}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#FF9800"
            />
          </View>
          <Text style={styles.actionText}>Refund Information</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rewardsCard}>
        <View style={styles.rewardsTextContainer}>
          <Text style={styles.rewardsTitle}>Your Rewards Await</Text>
          <Text style={styles.rewardsDescription}>
            ₦15 Bonus Credit - Apply this to your next purchase
          </Text>
          <Text style={styles.rewardsExpiry}>Expires in 7 days</Text>
        </View>
        <TouchableOpacity style={styles.claimButton}>
          <Text style={styles.claimButtonText}>Claim Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsTitle}>Recent Transactions</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("TransactionScreen")}
        >
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.transactionsList}>
        <View style={styles.transactionItem}>
          <View style={styles.transactionIconContainer}>
            <Ionicons name="arrow-up-circle-outline" size={24} color="green" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Top-up</Text>
            <Text style={styles.transactionStatus}>Completed</Text>
          </View>
          <View style={styles.transactionAmount}>
            <Text style={styles.amountPositive}>+₦500</Text>
            <Text style={styles.transactionTime}>1 hour ago</Text>
          </View>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.transactionIconContainer}>
            <Ionicons name="gift-outline" size={24} color="purple" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Bonus Credit</Text>
            <Text style={styles.transactionStatus}>Applied</Text>
          </View>
          <View style={styles.transactionAmount}>
            <Text style={styles.amountPositive}>+₦500</Text>
            <Text style={styles.transactionTime}>2 days ago</Text>
          </View>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.transactionIconContainer}>
            <Ionicons name="return-down-back-outline" size={24} color="red" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Refund for Order</Text>
            <Text style={styles.transactionStatus}>Refunded</Text>
          </View>
          <View style={styles.transactionAmount}>
            <Text style={styles.amountPositive}>+₦1500</Text>
            <Text style={styles.transactionTime}>10 hours ago</Text>
          </View>
        </View>

        <View style={styles.transactionItem}>
          <View style={styles.transactionIconContainer}>
            <Ionicons name="gift-outline" size={24} color="purple" />
          </View>
          <View style={styles.transactionDetails}>
            <Text style={styles.transactionTitle}>Bonus Credit</Text>
            <Text style={styles.transactionStatus}>Applied</Text>
          </View>
          <View style={styles.transactionAmount}>
            <Text style={styles.amountPositive}>+₦500</Text>
            <Text style={styles.transactionTime}>3 days ago</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  notificationButton: {
    padding: 5,
  },
  balanceCard: {
    backgroundColor: "#000",
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
  },
  balanceTopSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  availableBalanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  availableBalanceText: {
    color: "#FFF",
    fontSize: 14,
    marginRight: 5,
  },
  eyeIcon: {
    marginTop: 1,
  },
  balanceAmount: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  balanceNote: {
    color: "#AAA",
    fontSize: 12,
  },
  addMoneyButton: {
    marginTop: 30,
    backgroundColor: "#FF9800",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addMoneyButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionItem: {
    alignItems: "center",
    flex: 1,
  },
  actionIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
  },
  rewardsCard: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rewardsTextContainer: {
    flex: 1,
  },
  rewardsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  rewardsDescription: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  rewardsExpiry: {
    fontSize: 10,
    color: "#999",
  },
  claimButton: {
    backgroundColor: "#FF9800",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  claimButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#FF9800",
    fontSize: 14,
  },
  transactionsList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  transactionStatus: {
    fontSize: 12,
    color: "#999",
  },
  transactionAmount: {
    alignItems: "flex-end",
  },
  amountPositive: {
    color: "green",
    fontWeight: "bold",
    fontSize: 14,
  },
  amountNegative: {
    color: "red",
    fontWeight: "bold",
    fontSize: 14,
  },
  transactionTime: {
    fontSize: 10,
    color: "#999",
    marginTop: 2,
  },
});

export default WalletScreen;
