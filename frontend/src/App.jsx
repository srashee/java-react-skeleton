import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const API_BASE_URL = 'http://localhost:8080'

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_BASE_URL}/products`)
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      } else {
        console.error('Failed to fetch products')
      }
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  // Load products on component mount
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="app">
      <h1>Product Management</h1>
      
      {/* Products List */}
      <div className="products-section">
        <h2>Products ({products.length})</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul className="products-list">
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <span className="product-name">{product.name}</span>
                <span className="product-date">
                  {new Date(product.createdAt).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
