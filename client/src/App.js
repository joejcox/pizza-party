import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Pizzas from "./pages/Pizzas";
import Dashboard from "./pages/Dashboard";
import ShoppingBasket from "pages/ShoppingBasket";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/shopping-basket">
          <ShoppingBasket />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/pizzas">
          <Pizzas />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <ToastContainer
        autoClose="3000"
        position="bottom-right"
        hideProgressBar
        transition={Flip}
        role="Alert"
      />
    </Layout>
  );
};

export default App;

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setUser } from "./store/slices/user";
// import { auth } from "./firebase/config/firebase.config";

// const dispatch = useDispatch();
// need to add hidden class on to loading while user doesn't exist

// useEffect(() => {
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in.
//       dispatch(
//         setUser({
//           name: user.displayName,
//           email: user.email,
//         })
//       );
//     } else {
//       // No user is signed in.
//     }
//   });
// }, [dispatch]);
