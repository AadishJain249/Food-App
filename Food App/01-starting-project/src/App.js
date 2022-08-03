import { Fragment, useState } from "react";
import Layout from "./Componets/Layout/Layout";
import Meals from "./Componets/Meals/Meals";
import CartItem from "./Componets/Cart/CartItem";
function App() {
  const [showState,hideState]=useState(false)
  const show=()=>{
    hideState(true)
  }
  const hide=()=>{
    hideState(false)
  }
  return <Fragment>
    { showState && <CartItem onClose={hide}/>}
    <Layout onShowCart={show}/>
    <main>
      <Meals></Meals>
    </main>
  </Fragment>
 
}

export default App;
