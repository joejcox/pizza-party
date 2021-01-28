import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tabs from "./pages/Tabs";
import BasketButton from "components/BasketButton/BasketButton";

import { Switch, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/user";
import { auth } from "./firebase/config/firebase.config";

function App() {
  const dispatch = useDispatch();
  // need to add hidden class on to loading while user doesn't exist

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
      } else {
        // No user is signed in.
      }
    });
  }, [dispatch]);

  return (
    <Layout>
      <BasketButton />
      <Switch>
        <Route path="/tabs">
          <Tabs />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
