import { NextPage } from 'next'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProductList from '../components/ProductList'

const index: NextPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="my-20"></div>
      <ProductList />
      <Footer />
    </div>
  )
}

export default index
