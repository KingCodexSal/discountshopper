import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const groups = [
  {
    id: 1,
    name: "Meal Prep Planners",
    members: 10,
    unitsRemaining: 2,
    status: "Active",
    statusColor: "green",
    icon: "fast-food-outline",
  },
  {
    id: 2,
    name: "Parenting Circle",
    members: 15,
    unitsRemaining: 1,
    status: "Pending",
    statusColor: "orange",
    icon: "people-outline",
  },
  {
    id: 3,
    name: "Fitness Fanatics",
    members: 52,
    unitsRemaining: 4,
    status: "Active",
    statusColor: "green",
    icon: "bicycle-outline",
  },
  {
    id: 4,
    name: "Cleaning Supplies",
    members: 20,
    unitsRemaining: 7,
    status: "Active",
    statusColor: "green",
    icon: "basket-outline",
  },
  {
    id: 5,
    name: "Kitchen Essentials",
    members: 10,
    unitsRemaining: 0,
    status: "Completed",
    statusColor: "blue",
    icon: "restaurant-outline",
  },
  {
    id: 6,
    name: "Fashion Lovers",
    members: 15,
    unitsRemaining: 1,
    status: "Pending",
    statusColor: "orange",
    icon: "shirt-outline",
  },
  {
    id: 7,
    name: "Beauty Club",
    members: 20,
    unitsRemaining: 3,
    status: "Active",
    statusColor: "green",
    icon: "flower-outline",
  },
];

// Helper function to calculate filled percent
const getFilledPercent = (unitsRemaining, members) => {
  if (!members) return 0;
  const percent = 100 - (unitsRemaining / members) * 100;
  return Math.max(8, Math.round(percent));
};

const GroupsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Groups</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for groups"
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <MaterialIcons name="tune" size={24} color="#FFA500" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateGroupScreen")}
        >
          <Text style={styles.createGroupText}>Create Group</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.groupsList}>
        {groups.map((item) => (
          <View style={styles.groupItem} key={item.id}>
            <Ionicons
              name={item.icon}
              size={40}
              color="#FFA500"
              style={styles.groupIcon}
            />
            <View style={styles.groupInfo}>
              <Text style={styles.groupName}>{item.name}</Text>
              <Text style={styles.groupMembers}>{item.members} members</Text>
              <View style={styles.unitsRow}>
                <View style={styles.progressBarContainer}>
                  <View
                    style={[
                      styles.progressBarFill,
                      {
                        width: `${getFilledPercent(
                          item.unitsRemaining,
                          item.members
                        )}%`,
                      },
                    ]}
                  />
                </View>
                <Text style={styles.unitsRemaining}>
                  {item.unitsRemaining} units remaining
                </Text>
              </View>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>{item.status}</Text>
              <View
                style={[
                  styles.statusDot,
                  { backgroundColor: item.statusColor },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 16,
  },
  groupsList: {
    marginTop: 8,
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
  },
  notificationButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
    height: 44,
    borderWidth: 1,
    borderColor: "#eee",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 15,
  },
  createGroupText: {
    color: "#FFA500",
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  groupItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    marginBottom: 0,
  },
  groupIcon: {
    marginRight: 15,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222",
  },
  groupMembers: {
    fontSize: 14,
    color: "#666",
  },
  unitsRemaining: {
    fontSize: 12,
    color: "#FFA500",
    fontWeight: "600",
    marginLeft: 8,
  },
  statusContainer: {
    alignItems: "center",
  },
  statusText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
    fontWeight: "600",
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  unitsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  progressBarContainer: {
    width: 48,
    height: 7,
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#FFA500",
    borderRadius: 4,
  },
});

export default GroupsScreen;
