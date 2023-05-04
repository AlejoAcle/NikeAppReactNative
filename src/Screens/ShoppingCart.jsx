import { Text, FlatList, View, StyleSheet, Pressable } from "react-native";
import { useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";

const ShoppingCartTotals = () => {

  const subtotal = useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectDeliveryPrice)
  const total = useSelector(selectTotal)

  return(
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text>Subtotal</Text>
        <Text>{subtotal} €</Text>
      </View>
      <View style={styles.row}>
        <Text stlye={styles.text}>Delivery</Text>
        <Text stlye={styles.text}>{deliveryFee} €</Text>
      </View>
      <View style={styles.row}>
        <Text stlye={styles.textBold}>Total</Text>
        <Text stlye={styles.textBold}>{total} €</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items)


  return (
    <>
      <FlatList
        data={cartItems}
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
