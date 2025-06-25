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
import powerbankImage from "../assets/powerbank.png";
import earbudsImage from "../assets/earbuds.png";
import { SafeAreaView } from "react-native-safe-area-context";

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
  {
    id: 5,
    name: "UltraSlim Power Bank 20000mAh",
    description:
      "High-capacity portable charger with dual USB output and digital display for all your devices.",
    price: "₦18,000",
    oldPrice: "₦25,000",
    minOrder: "5 units",
    image: powerbankImage,
  },
  {
    id: 6,
    name: "True Wireless Earbuds Pro",
    description:
      "Noise-cancelling Bluetooth earbuds with charging case and touch controls for premium sound.",
    price: "₦15,000",
    oldPrice: "₦22,000",
    minOrder: "6 units",
    image: earbudsImage,
  },
];

const ProductList = () => {
  const navigation = useNavigation();

  const handleProductPress = (product) => {
    navigation.navigate("ProductDetails", { product });
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTopRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerBottomRow}>
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
        </View>
        <View>
          <View style={styles.grid}>
            {products.map((product) => (
              <TouchableOpacity
                key={product.id}
                onPress={() => handleProductPress(product)}
                style={styles.productCard}
              >
                <View style={styles.productImageWrapper}>
                  <Image source={product.image} style={styles.productImage} />
                  <TouchableOpacity style={styles.heartButton}>
                    <Ionicons name="heart-outline" size={20} color="#FF6B00" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productDescription} numberOfLines={2}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  headerBottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    marginLeft: 0,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
  },
  notificationIcon: {
    marginLeft: 12,
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
    borderRadius: 18,
    padding: 12,
    marginBottom: 18,
    position: "relative",
    alignItems: "flex-start",
    minHeight: 270,
    borderWidth: 0.5,
    borderColor: "#f0f0f0",
  },
  productImageWrapper: {
    width: "100%",
    height: 110,
    backgroundColor: "#FFF6F0",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 8,
  },
  heartButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 2,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 4,
  },
  productName: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 2,
    color: "#222",
    marginTop: 2,
    textAlign: "left",
  },
  productDescription: {
    fontSize: 12,
    color: "#888",
    marginBottom: 6,
    height: 32,
    overflow: "hidden",
    textAlign: "left",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 4,
    gap: 8,
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FF6B00",
    marginRight: 8,
  },
  productOldPrice: {
    fontSize: 12,
    color: "#bbb",
    textDecorationLine: "line-through",
    fontWeight: "500",
  },
  productMinOrder: {
    fontSize: 12,
    color: "#FF6B00",
    marginTop: 10,
    fontWeight: "600",
    textAlign: "left",
  },
});

export default ProductList;
