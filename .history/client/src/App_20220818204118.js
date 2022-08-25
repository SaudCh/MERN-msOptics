import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-popper/dist/index.umd.js'

import "./index.css";

import 'react-toastify/dist/ReactToastify.css';

import AppRoute from './Routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "./Components/Context/AuthContext";
import { useAuth } from "./Components/Hooks/useAuth";
import { ToastContainer } from 'react-toastify';
import { CartContext } from "./Components/Context/CartContext";
import { useCart } from "./Components/Hooks/useCart";
import { useWishlist } from "./Components/Hooks/useWishlist";
import { WishContext } from "./Components/Context/WishlistContext";
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import { getEnglish } from "./Language/english";
import LanguageDetector from "i18next-browser-languagedetector";
import { getDutch } from "./Language/dutch";

const english = getEnglish()
const dutch = getDutch()

i18next.use(initReactI18next).use(LanguageDetector).init({
  resources: {
    en: {
      translation: english
    },
    de: {
      translation: dutch
    },
  },
  supportedLngs: ['en', 'de'],
  lng: document.querySelector('html').lang,
  fallbackLng: "en",
  detection: {
    order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie']
  }

});



function App() {

  const { login, logout, token, user } = useAuth()
  const { cart, addToCart, removeAll, removeItem, total, IncQuantity, DecQuantity } = useCart()
  const { wishlist, addToWishlist, removeFromWishlist, clearWishlist, getWishlist } = useWishlist()

  return (
    <WishContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist, getWishlist }}>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!user,
          token: token,
          user: user,
          login: login,
          logout: logout,
        }}
      >
        <CartContext.Provider value={{ cart, addToCart, removeAll, removeItem, total, IncQuantity, DecQuantity }}>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <Router>

            <AppRoute />
          </Router>

        </CartContext.Provider >
      </AuthContext.Provider>
    </WishContext.Provider>
  );
}

export default App;
