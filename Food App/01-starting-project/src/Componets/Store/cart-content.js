import React  from "react"
const CartContext=React.createContext(
    {
    items:[],
    TotalAmount:0,
    additem:(item)=>{},
    removeitem:(id)=>{}
    })
export default CartContext