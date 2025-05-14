import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

interface Product {
  name: string;
  description: string;
  price: string;
  oldPrice: string;
  minOrder: string;
  image: any;
}

type ProductDetailsRouteProp = RouteProp<
  { params: { product: Product } },
  "params"
>;

const ProductDetails = () => {
  const route = useRoute<ProductDetailsRouteProp>();
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState("M");
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="notifications-none" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Details</Text>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>4.0</Text>
            <MaterialIcons name="star" size={18} color="gold" />
          </View>
        </View>
        <Text style={styles.productDescription}>{product.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.productOldPrice}>{product.oldPrice}</Text>
        </View>
        <Text style={styles.minOrder}>Min order: {product.minOrder} units</Text>
        <Text style={styles.sizeLabel}>Size</Text>
        <View style={styles.sizeContainer}>
          {["S", "M", "L"].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSizeButton,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={
                  selectedSize === size
                    ? styles.selectedSizeText
                    : styles.sizeText
                }
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 16,
    marginTop: 30,
  },
  imageContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 12,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  infoContainer: {
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 16,
    marginRight: 4,
  },
  productName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 20,
    color: "#FF6B00",
    fontWeight: "bold",
  },
  productOldPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  minOrder: {
    fontSize: 12,
    color: "#333",
    marginTop: 4,
  },
  sizeLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 16,
    color: "#333",
  },
  sizeContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedSizeButton: {
    backgroundColor: "black",
  },
  sizeText: {
    fontSize: 16,
    color: "black",
  },
  selectedSizeText: {
    fontSize: 16,
    color: "white",
  },
  paymentButton: {
    backgroundColor: "#FF9800",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  paymentButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ProductDetails;
