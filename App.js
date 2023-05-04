import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";
import Navigation from "./src/navigation";
import { Provider } from 'react-redux';
import { store } from './src/store';

// import ProductScreen from "./src/screens/ProductScreen";
// import ProductDetailsScreen from "./src/Screens/ProductDetailsScreen";
// import ShoppingCart from "./src/Screens/ShoppingCart";


export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Navigation />
      {/* <ProductScreen /> */}
      {/* <ProductDetailsScreen /> */}
      {/* <ShoppingCart /> */}

      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}





const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",

  },
});


// https://youtu.be/Gvxv6JCabA8?t=9248