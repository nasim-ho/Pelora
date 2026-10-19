import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BenefitsBar from './components/BenefitsBar/BenefitsBar';
import Categories from './components/Categories/Categories';
import Discount from './components/Discount/Discount';
import BestSellers from './components/BestSellers/BestSellers';
import WhyChoose from './components/WhyChoose/WhyChoose';
import Reviews from './components/Reviews/Reviews';
import AppDownload from './components/AppDownload/AppDownload';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';

import useScrollReveal from '../src/hook/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <Header/>
      <Hero/>
      <BenefitsBar/>
      <Categories/>
      <Discount/>
      <BestSellers/>
      <WhyChoose/>
      <Reviews/>
      <AppDownload/>
      <Footer/>
      <BackToTop />
    </>
  )
}

export default App;