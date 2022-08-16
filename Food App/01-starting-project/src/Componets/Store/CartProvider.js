import CartContext from "./cart-content"
import { useReducer } from "react"
const defaultState={
    items:[],
    TotalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==='ADD')
    {
        // const updateItem=;
        const updateAmount=state.TotalAmount+action.item.price*action.item.amount
        console.log(state.items);
        // searchinf if this item already exist in array
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
          )
        //   console.log(existingItemIndex); 
        const existingItem=state.items[existingItemIndex]
        
        let updatedItems
        if(existingItem)
        {
            // const updatedItem
            const updatedItem={
                ...existingItem,
                amount:existingItem.amount+action.item.amount
            }
            updatedItems=[...state.items]
            updatedItems[existingItemIndex]=updatedItem
        }
        else
        {
            updatedItems=state.items.concat(action.item)
        }


    
    return {
        items:updatedItems,
        TotalAmount:updateAmount
        }
    }   
    if(action.type==='REMOVE')
    {
        const existCardItem=state.items.findIndex((item)=>
            item.id===action.id
        )
        //console.log(existCardItem); 
        const existingItem=state.items[existCardItem]
        const updateAmount=state.TotalAmount-existingItem.price
        let updatedItems
        if(existingItem.amount===1)
        {
            updatedItems=state.items.filter(item=>item.id!==action.id)
        }
        else
        {
            const updatedItem={
                ...existingItem,
                amount:existingItem.amount-1
            }
            updatedItems=[...state.items]
            updatedItems[existCardItem]=updatedItem

        }
        return{
            items: updatedItems,
            TotalAmount: updateAmount
        }
        
    }
    return defaultState

}
const CartProvider=(props)=>{
    const[cartState,dispatchCart]=useReducer(cartReducer,defaultState)
    const addHandler=(item)=>{
        dispatchCart({type:'ADD',item:item})
    }
    const removeHandler=(id)=>{
        dispatchCart({type:'REMOVE',id:id})
    }
    const cartContext={
        items:cartState.items,
        TotalAmount:cartState.TotalAmount,
        additem:addHandler,
        removeitem:removeHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider