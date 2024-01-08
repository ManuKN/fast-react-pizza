import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    cart:[] 
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            //cartItem
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
            state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
        },
        increaseQuantity(state,action){
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity++
            item.totalPrice = item.unitPrice * item.quantity 
        },
        decreaseQuantity(state,action){
            const item = state.cart.find((item)=> item.pizzaId === action.payload)
            item.quantity--
            item.totalPrice = item.unitPrice * item.quantity 

            if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state , action)
        },
        clearCart(state){
            state.cart =[] 
        },
    }
})

export const {addItem , deleteItem , increaseQuantity , decreaseQuantity , clearCart} = cartSlice.actions
export default cartSlice.reducer

export const getTotalcartQuantity = (state) => state.cart.cart.reduce((sum , item)=> sum+item.quantity ,0)
export const getTotalcartPrice = (state) => state.cart.cart.reduce((sum , item) => sum+item.totalPrice , 0)
export const getCart = (state)=> state.cart.cart
export const getUsername = (state => state.user.username)
export const getCartItemquanity = (id) => (state => state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0)
