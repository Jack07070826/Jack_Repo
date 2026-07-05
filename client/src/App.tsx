import { useEffect, useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Product from "./views/Product";
import Price from "./views/Price";
import PageNotFound from "./views/PageNotFound";
import Home from "./views/Home";
import UserContext from "./context/UserContext";
import axios from "axios";
import User from "./models/User";

/**
 * Demonstrates a simple React application with routing and context.
 * @returns App component
 */
function App() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [targetUser, setTargetUser] = useState<User>({ name: "", job: "" });

  useEffect(() => {
    axios
      .get("/api/user/Mary")
      .then((result) => {
        setTargetUser(result.data.targetUser);
        console.log(`result.data.targetUser -> ${result.data.targetUser}`);
      })
      .catch((e) => console.log(e))
      .finally(() => console.log("Call '/api/user/:name' successfully"));
  }, []);

  return (
    <UserContext.Provider value={{ name: targetUser.name, job: targetUser.job }}>
      <BrowserRouter>
        <div>Vite + React + NodeJS + Express</div>
        <ListGroup heading="Users" onSelected={(username) => console.log(username)} />
        {showAlert && <Alert onClose={() => setShowAlert(!showAlert)}>Hello world</Alert>}
        <Button title="My Button" />
        <Like />
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/product">Product</NavLink>
        <br />
        <NavLink to="/price">Price</NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="price" element={<Price />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
