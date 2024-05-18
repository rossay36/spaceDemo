import React,{useEffect, useState} from 'react'
import './Product.css'
import axios from 'axios';


const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    getProducts();

  }, [error])

  async function getProducts() {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__title'>
          <h1>Our Products</h1>
          <h3>Check out for our Product</h3>
          <p>Good and quality products with good prices</p>
        </div>
        {products.map((product, index) => {
          return (
            <div className='product__img' key={index}>
               <img src={product.thumbnail} alt='' />
              <div className='product__pro'>
                <p>Title={product.title }</p>
                <p>Price=${product.price }</p>
                <p>Decscription={product.description }</p>
                <p>Rating{product.rating }</p>
                <p>DiscountPercentage={product.discountPercentage }</p>
                <p>Stock={product.stock }</p>
                <p>Brand={product.brand}</p>
                <p>Category={product.category}</p>

              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products