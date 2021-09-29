import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from "react";

import HomeScreen from "./Components/Screens/HomeScreen";
import ProductScreen from "./Components/Screens/ProductScreen";
import CartScreen from "./Components/Screens/CartScreen";

import Navbar from "./Components/Navbar";
import Backdrop from "./Components/Backdrop";
import SideDrawer from "./Components/SideDrawer";

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
      <Router  >
        <Navbar click={()=>setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}  />
        <Backdrop show={sideToggle} click={()=>setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/product/:id" component={ProductScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
          </Switch>
        </main>
      
      </Router>
  );
}

export default App;
