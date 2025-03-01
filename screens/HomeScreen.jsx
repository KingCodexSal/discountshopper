import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import electronicsImage from "../assets/electronics.png";
import fashionImage from "../assets/fashion.png";
import groceriesImage from "../assets/groceries.png";
import fitnessImage from "../assets/fitness.png";
import beautyImage from "../assets/beauty.png";
import blackCowImage from "../assets/cow.png";
import tomatoImage from "../assets/tomato.png";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSeeAll = () => {
    navigation.navigate('ProductList');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#666"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for products"
            placeholderTextColor="#999"
          />
          <TouchableOpacity>
            <Ionicons
              name="options-outline"
              size={24}
              color="#FFA500"
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bellWrapper}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#000"
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Group Shopping Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Shop in Groups. Save Together.</Text>
        <Text style={styles.bannerSubtitle}>
          Discover great products and buy as a group for exclusive deals.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.buttonText}>Create Group</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join Group</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {[
          { name: "Electronics", image: electronicsImage },
          { name: "Fashion", image: fashionImage },
          { name: "Groceries", image: groceriesImage },
          { name: "Fitness", image: fitnessImage },
          { name: "Beauty", image: beautyImage },
        ].map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Featured Products */}
      <View style={styles.featuredHeader}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <TouchableOpacity onPress={handleSeeAll}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productsContainer}>
        {[
          {
            name: "Black Cow",
            description: "High quality cow meat",
            price: "₦80,000",
            oldPrice: "₦100,000",
            minOrder: "10 units",
            image: blackCowImage,
          },
          {
            name: "Basket of Tomato",
            description: "Fresh basket of tomatoes",
            price: "₦30,000",
            oldPrice: "₦50,000",
            minOrder: "8 units",
            image: tomatoImage,
          },
        ].map((product, index) => (
          <View key={index} style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <TouchableOpacity style={styles.heartIconWrapper}>
              <Ionicons name="heart-outline" size={20} color="#FF6B00" />
            </TouchableOpacity>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <View style={styles.priceRow}>
              <Text style={styles.currentPrice}>{product.price}</Text>
              <Text style={styles.oldPrice}>{product.oldPrice}</Text>
            </View>
            <Text style={styles.minOrder}>Min order: {product.minOrder}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    marginTop: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3333330D",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flex: 1,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  filterIcon: {
    marginLeft: 8,
  },
  bellIcon: {
    padding: 4,
  },
  banner: {
    backgroundColor: "#000",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    width: "100%",
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: "#999",
    fontSize: 12,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  createButton: {
    backgroundColor: "#FF6B00",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
  },
  joinButton: {
    borderColor: "#FF6B00",
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  joinButtonText: {
    color: "#FF6B00",
    fontSize: 14,
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
    color: "#000",
  },
  categoriesContainer: {
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
  },
  categoryImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: "#333",
  },
  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  seeAll: {
    color: "#FF6B00",
    fontSize: 14,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  productCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    position: "relative",
    height: 260,
  },
  productImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
    color: "#333",
  },
  productDescription: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF6B00",
  },
  oldPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
  },
  minOrder: {
    fontSize: 12,
    color: "#000",
    marginTop: 25,
  },
  heartIconWrapper: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
  },
});

export default HomeScreen;
