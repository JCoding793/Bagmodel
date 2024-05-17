import React from 'react'
import ProductBanner from './Layout/productdec/productbanner'
import ProductDescription from './Layout/productdec/productdescription'
import ProductSuggestion from './Layout/productdec/productsuggestion'
import ProductModel from './Layout/productModel'

export default function ProductPage() {
  return (
    <div>
      <ProductBanner />
      <ProductDescription />
      <ProductSuggestion />
    </div>
  )
}
