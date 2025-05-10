import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
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

const GroupsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Groups</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="black" />
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
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.groupItem}>
            <Ionicons
              name={item.icon}
              size={40}
              color="#666"
              style={styles.groupIcon}
            />
            <View style={styles.groupInfo}>
              <Text style={styles.groupName}>{item.name}</Text>
              <Text style={styles.groupMembers}>{item.members} members</Text>
              <Text style={styles.unitsRemaining}>
                {item.unitsRemaining} units remaining
              </Text>
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
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  notificationButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  createGroupText: {
    color: "#FFA500",
    fontWeight: "bold",
  },
  groupItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 10,
  },
  groupIcon: {
    marginRight: 15,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  groupMembers: {
    fontSize: 14,
    color: "#666",
  },
  unitsRemaining: {
    fontSize: 12,
    color: "#FFA500",
  },
  statusContainer: {
    alignItems: "center",
  },
  statusText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default GroupsScreen;
