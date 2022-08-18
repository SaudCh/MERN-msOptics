import React   from 'react';
import Header from '../../Components/Header';
import '../../Components/css/home.css';
import Category from './Category';
import Background from './Background';
import Items from './Items';
import OurWays from './OurWays';
import Footer from '../../Components/Footer';

export default function Home() {
  document.title = 'mhOptics';

  return (
    <>
      <Header background={false} />
      <Background />
      <Category />
      <Items />
      <OurWays />
      <Footer />
    </>
  );
}
