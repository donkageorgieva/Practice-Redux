import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import { authActions } from "./store/store";
import store from "./store/store";
import UserProfile from "./components/UserProfile";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <React.Fragment>
      {isLoggedIn ? <Header /> : <UserProfile />}

      <Auth />
      <Counter />
    </React.Fragment>
  );
}

export default App;
