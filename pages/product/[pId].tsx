import { NextPage } from 'next'
import React from 'react'
import Header from '../../components/Header'
import ProductDetails from '../../components/ProductDetails'

const productId: NextPage = () => {
  return (
    <div>
      <Header />
      <ProductDetails />
    </div>
  )
}

export default productId
