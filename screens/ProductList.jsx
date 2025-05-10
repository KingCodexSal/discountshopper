import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const products = [
  {
    id: 1,
    name: "Black Cow",
    description: "Black cow, raised for high-quality meat.",
    price: "₦80,000",
    oldPrice: "₦100,000",
    minOrder: "10 units",
    image: require("../assets/cow.png"),
  },
  {
    id: 2,
    name: "Basket of Tomato",
    description: "Fresh basket of ripe tomatoes, perfect for cooking, salads.",
    price: "₦30,000",
    oldPrice: "₦50,000",
    minOrder: "8 units",
    image: require("../assets/tomato.png"),
  },
  {
    id: 3,
    name: "Smart LED Bulb",
    description: "Wi-Fi-enabled, color-changing, energy-saving bulb.",
    price: "₦50,000",
    oldPrice: "₦50,000",
    minOrder: "10 units",
    image: require("../assets/bulb.png"),
  },
  {
    id: 4,
    name: "Yoga Block Set",
    description: "Two foam blocks for stability and support.",
    price: "₦50,000",
    oldPrice: "₦50,000",
    minOrder: "8 units",
    image: require("../assets/yoga.png"),
  },
];

const ProductList = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetails", { product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search for products"
            placeholderTextColor="#888"
          />
        </View>
        <Ionicons
          name="notifications-outline"
          size={24}
          style={styles.notificationIcon}
        />
      </View>
      <ScrollView>
        <View style={styles.grid}>
          {products.map((product) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => handleProductPress(product)}
              style={styles.productCard}
            >
              <TouchableOpacity style={styles.heartButton}>
                <Ionicons name="heart-outline" size={20} color="#000" />
              </TouchableOpacity>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDescription}>
                {product.description}
              </Text>
              <View style={styles.priceContainer}>
                <Text style={styles.productPrice}>{product.price}</Text>
                <Text style={styles.productOldPrice}>{product.oldPrice}</Text>
              </View>
              <Text style={styles.productMinOrder}>
                Min order: {product.minOrder}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 40,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  productCard: {
    width: "46%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    position: "relative",
    alignItems: "center",
  },
  heartButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  productDescription: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#e67e22",
    fontWeight: "bold",
    marginRight: 8,
  },
  productOldPrice: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
  },
  productMinOrder: {
    fontSize: 10,
    color: "#333",
    textAlign: "center",
    marginTop: 4,
  },
});

export default ProductList;
