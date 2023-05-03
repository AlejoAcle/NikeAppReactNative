import { Text, FlatList, View, StyleSheet, Pressable } from "react-native";
import cart from "../Data/cart";
import CartListItem from "../components/CartListItem";

const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text>Subtotal</Text>
        <Text>410,00 €</Text>
      </View>
      <View style={styles.row}>
        <Text stlye={styles.text}>Delivery</Text>
        <Text stlye={styles.text}>10,00 €</Text>
      </View>
      <View style={styles.row}>
        <Text stlye={styles.textBold}>Total</Text>
        <Text stlye={styles.textBold}>420,00 €</Text>
      </View>
    </View>
  )

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />

      <Pressable  style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gray",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button:{
    position: "absolute",
    backgroundColor: "black",
    bottom: -200,
    width: '90%',
    alignSelf: "center",
    padding:20,
    borderRadius: 100,
    alignItems: "center"
  },
  buttonText:{
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  }
});

export default ShoppingCart;
