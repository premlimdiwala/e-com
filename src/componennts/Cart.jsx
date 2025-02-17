import React from 'react'

function Cart({ items, onRemovecart }) {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return (
        <>
            <h2 style={styles.header}>Shopping Cart</h2>
            <div style={styles.cartContainer}>
                {items.map((item) => (
                    <div key={item.id} style={styles.itemCard}>
                        <div style={styles.itemDetails}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={styles.itemImage}
                            />
                            <div style={styles.itemText}>
                                <p style={styles.itemName}>{item.name}</p>
                                <p style={styles.itemPrice}>${item.price} x {item.quantity}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => onRemovecart(item.id)} 
                            style={styles.removeButton}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <div style={styles.totalContainer}>
                <h3 style={styles.total}>Total: ${total.toFixed(2)}</h3>
            </div>
        </>
    );
}

const styles = {
    header: {
        marginTop: 0,
        fontSize: '28px',
        color: '#333',
        textAlign: 'center',
    },
    cartContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        marginTop: '20px',
    },
    itemCard: {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        width: '220px',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
    },
    itemCardHover: {
        transform: 'scale(1.05)',
    },
    itemDetails: {
        marginBottom: '10px',
    },
    itemImage: {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    itemText: {
        marginTop: '10px',
    },
    itemName: {
        fontSize: '18px',
        color: '#333',
        fontWeight: '500',
    },
    itemPrice: {
        fontSize: '16px',
        color: '#555',
    },
    removeButton: {
        backgroundColor: '#ff3b30',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '100%',
        marginTop: '10px',
        transition: 'background-color 0.3s',
    },
    removeButtonHover: {
        backgroundColor: '#d32f2f',
    },
    totalContainer: {
        marginTop: '20px',
        textAlign: 'center',
        width: '100%',
    },
    total: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    },
};

export default Cart;
