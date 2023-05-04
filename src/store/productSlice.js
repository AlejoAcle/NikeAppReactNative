import { createSlice } from "@reduxjs/toolkit";
import products from '../Data/products';

const initialState = {
    products:products,
    selectedProduct:null,
};


export const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setSelectedProduct:(state, action) => {
            const productId = action.payload;
            setSelectedProduction = state.products.find((p) => p.id === productId);
        },
    },
});