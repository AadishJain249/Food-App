import { Fragment, useState } from "react";
import Layout from "./Componets/Layout/Layout";
import Meals from "./Componets/Meals/Meals";
import CartItem from "./Componets/Cart/CartItem";
import CartProvider from "./Componets/Store/CartProvider";
function App() {
  const [showState,hideState]=useState(false)
  const show=()=>{
    hideState(true)
  }
  const hide=()=>{
    hideState(false)
  }
  return <CartProvider>
    { showState && <CartItem onClose={hide}/>}
    <Layout onShowCart={show}/>
    <main>
      <Meals></Meals>
    </main>
    </CartProvider>
 
}

export default App;
