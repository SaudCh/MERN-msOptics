import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Layout from './layout';
// import Header from '../Components/Header';
import Loading from './Loading';
import SideBarLayout from './SideBarLayout';
import ProtectedRoute from './ProtectedRoute';

const Search = lazy(() => import('../Pages/Search/Search'));
const Return = lazy(() => import('../Pages/Support/Return'));
const Garantie = lazy(() => import('../Pages/Support/Garantie'));
const Shipping = lazy(() => import('../Pages/Support/shipping'));
const ContactUs = lazy(() => import('../Pages/Inside/ContactUs'));
const AboutUs = lazy(() => import('../Pages/Inside/AboutUs'));
const Cart = lazy(() => import('../Pages/Cart/Cart'));
const Wishlist = lazy(() => import('../Pages/Wishlist/Wishlist'));
const Account = lazy(() => import('../Pages/Account/Account'));
const OrderHistory = lazy(() => import('../Pages/Order/History'));
const Category = lazy(() => import('../Pages/Category/Category'));
const ProductDetails = lazy(() => import('../Pages/ProductDetails/ProductDetails'));
const Home = lazy(() => import('../Pages/Home/Home'));
const Type = lazy(() => import('../Pages/Type/Type'));
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'));
const ForgetPassword = lazy(() => import('../Pages/ForgetPassword/ForgetPassword'));
const Login = lazy(() => import('../Pages/Login/login'));
const CheckoutSuccess = lazy(() => import('../Pages/Checkout/Success'));
const Register = lazy(() => import('../Pages/Register/Register'));


export default function index() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route path="/t/:type" element={<Type />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/returns" element={<Return />} />
            <Route path="/garantee" element={<Garantie />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/search" element={<Search />} />

            {/* Auth Route */}
            <Route
              path="/login"
              element={<AuthRoute component={<Login />} />}
            />
            <Route
              path="/checkout-success"
              element={<AuthRoute component={<CheckoutSuccess />} />}
            />
            <Route
              path="/forgotpassword"
              element={<AuthRoute component={<ForgetPassword />} />}
            />
            <Route
              path="/register"
              element={<AuthRoute component={<Register />} />}
            />
          </Route>

          <Route path="/" element={<SideBarLayout />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route
              path="/account"
              element={<ProtectedRoute component={<Account />} />}
            />
            <Route path="/order-history" element={<OrderHistory />} />
          </Route>

          {/* If none Found */}
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
}
