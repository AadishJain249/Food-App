import CartContext from "./cart-content"
import { useReducer } from "react"
const defaultState={
    items:0,
    TotalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD')
    {
        const updateItem=state.items.concat(action.items);
        const updateAmount=state.TotalAmount+action.items.price*action.items.amount
    
    return {
        items:updateItem,
        TotalAmount:updateAmount
        }
    }
}
const CartProvider=(props)=>{
    const[cartState,dispatchCart]=useReducer(cartReducer,defaultState)
    const addHandler=(items)=>{
        dispatchCart({type:'ADD',items:items})
    }
    const removeHandler=(id)=>{
        dispatchCart({type:'REMOVE',id:id})
    }
    const cartContext={
        items:cartState.items,
        TotalAmount:cartState.TotalAmount,
        additem:addHandler,
        removeitem:removeHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider