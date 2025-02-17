import React from 'react';

function NavBar({ cartItemCount = 0 }) {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "0.8rem 1rem",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",  // Ensure it wraps on smaller screens
        }}
      >
        {/* Brand Logo */}
        <h1
          style={{
            margin: "0",
            fontSize: "1.8rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
        >
          Electroz
        </h1>

        {/* Navigation Links */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flex: "1",
            justifyContent: "center",
            flexWrap: "wrap",  // Wraps the nav items on small screens
          }}
        >
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/menu" style={navLinkStyle}>Menu</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <a href="/login" style={navLinkStyle}>Login</a>
        </div>

        {/* Cart Icon with Notification */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            aria-label="Cart"
            role="button"
          >
            🛒
          </span>

          {/* Cart Item Count */}
          {cartItemCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "12px",
                fontWeight: "bold",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

// Nav link style
const navLinkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  transition: "color 0.3s ease",
};

export default NavBar;
