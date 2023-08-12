import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Payment from "./Pages/Payment";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Reset from "./Pages/Reset";
import Catalogue from "./Pages/Catalogue";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.data?.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={isAuth ? <Profile /> : <Navigate to={"/login"} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/payment"
              element={isAuth ? <Payment /> : <Navigate to={"/login"} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/catalogue" element={<Catalogue />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
