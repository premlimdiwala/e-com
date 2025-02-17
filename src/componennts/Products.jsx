import React from 'react'

function Product({ product, onAddToCart }) {
  return (
    <div style={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        style={styles.productImage}
      />
      <h3 style={styles.productName}>{product.name}</h3>
      <p style={styles.productPrice}>${product.price}</p>
      <p style={styles.productDescription}>{product.disc}</p>
      
      <button
        onClick={() => onAddToCart(product)}
        style={styles.addButton}
      >
        Add To Cart
      </button>
    </div>
  )
}

const styles = {
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    width: "220px",
    margin: "15px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    backgroundColor: "#fff",
  },
  productCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
  },
  productImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    transition: "transform 0.3s ease",
  },
  productName: {
    marginTop: "15px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
  },
  productPrice: {
    color: "#ff5722",
    fontSize: "16px",
    fontWeight: "500",
    margin: "10px 0",
  },
  productDescription: {
    color: "#666",
    fontSize: "14px",
    height: "60px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: "15px",
  },
  addButton: {
    backgroundColor: "#ff5722",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  addButtonHover: {
    backgroundColor: "#e64a19",
  },
}

export default Product
