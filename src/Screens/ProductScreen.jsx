import React from 'react'

import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import products from '../Data/products';
import { productSlice } from '../store/productSlice';
import { useSelector, useDispatch } from 'react-redux';


const ProductScreen = ({ navigation }) => {


  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products)

  return (
    <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable 
            onPress={() => {
              //update selected product
              dispatch(productSlice.actions.setSelectedProduct(item.id))

              navigation.navigate('Product Details')}}
              style={styles.itemContainer}>

          <Image source={{uri: item.image }} style={styles.image}/>
          </Pressable>
        )}
        numColumns={2}
      />
  )
}

export default ProductScreen



const styles = StyleSheet.create({
    itemContainer:{
      width:'50%',
      padding:1,
    },
    image:{
      width: "100%",
      aspectRatio:1,
    }
  });