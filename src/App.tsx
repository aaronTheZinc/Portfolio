import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { NavBar } from "./components";
import { AppProvider } from "./context";
function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
