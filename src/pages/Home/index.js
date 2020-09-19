import React, { useState, useEffect } from 'react';
import { MdShoppingCart } from 'react-icons/md'

import api from '../../services/api'
import { formatPrice } from '../../utils/format'
import { ProductList } from './styles';



function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products')
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))
      setProducts(data)
    }

    loadProducts()

  }, [])

  return (
    <ProductList>
      { products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title}/>
          <strong> {product.title} </strong>
          <span> {product.priceFormatted} </span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#fff" /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      )) }
      
    </ProductList>
  )
}

export default Home;