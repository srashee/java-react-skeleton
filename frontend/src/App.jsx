import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [newProductName, setNewProductName] = useState('')
  const [saving, setSaving] = useState(false)

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

  // Create product
  const createProduct = async (e) => {
    e.preventDefault()
    if (!newProductName.trim()) {
      alert('Product name is required')
      return
    }

    try {
      setSaving(true)
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newProductName })
      })

      if (response.ok) {
        setNewProductName('')
        fetchProducts()
      } else {
        console.error('Failed to create product')
      }
    } catch (error) {
      console.error('Error creating product:', error)
    } finally {
      setSaving(false)
    }
  }

  // Load products on component mount
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="app">
      <h1>Product Management</h1>

      {/* Create Product Form */}
      <form onSubmit={createProduct} className="create-form">
        <input
          type="text"
          placeholder="Enter product name"
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Add Product'}
        </button>
      </form>

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
