import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function Layout() {
  return (
    <div>
      <Header background={true} />
      <Outlet />
      <Footer />
    </div>
  );
}
