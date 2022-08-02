import { Fragment } from "react";
import Layout from "./Componets/Layout/Layout";
import Meals from "./Componets/Meals/Meals";
function App() {
  return <Fragment>
    <Layout></Layout>
    <main>
      <Meals></Meals>
    </main>
  </Fragment>
 
}

export default App;
