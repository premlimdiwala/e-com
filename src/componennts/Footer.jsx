import React from 'react'

function Footer() {
  return (
    <div style={styles.footer}>
    <div style={styles.footerContainer}>
      <div style={styles.footerSection}>
        <h3 style={styles.footerTitle}>Shop</h3>
        <ul style={styles.footerLinks}>
          <li style={styles.footerLink}>New Arrivals</li>
          <li style={styles.footerLink}>Best Sellers</li>
          <li style={styles.footerLink}>Sale</li>
          <li style={styles.footerLink}>Gift Cards</li>
        </ul>
      </div>
      
      <div style={styles.footerSection}>
        <h3 style={styles.footerTitle}>Customer Service</h3>
        <ul style={styles.footerLinks}>
          <li style={styles.footerLink}>Contact Us</li>
          <li style={styles.footerLink}>Returns & Exchanges</li>
          <li style={styles.footerLink}>Shipping Info</li>
          <li style={styles.footerLink}>FAQs</li>
        </ul>
      </div>

      <div style={styles.footerSection}>
        <h3 style={styles.footerTitle}>Follow Us</h3>
        <div style={styles.socialIcons}>
          <a href="#" style={styles.socialIcon}>FB</a>
          <a href="#" style={styles.socialIcon}>IG</a>
          <a href="#" style={styles.socialIcon}>TW</a>
          <a href="#" style={styles.socialIcon}>YT</a>
        </div>
      </div>

      <div style={styles.footerSection}>
        <h3 style={styles.footerTitle}>Subscribe to Our Newsletter</h3>
        <p style={styles.newsletterText}>Get the latest news and updates delivered to your inbox</p>
        <input 
          type="email" 
          placeholder="Enter your email" 
          style={styles.emailInput} 
        />
        <button style={styles.subscribeButton}>Subscribe</button>
      </div>
    </div>

    <div style={styles.footerBottom}>
      <p style={styles.footerCopy}>© 2025 E-Commerce Company. All rights reserved.</p>
    </div>
  </div>
);
}

const styles = {
footer: {
  backgroundColor: '#333',
  color: '#fff',
  padding: '40px 0',
  fontFamily: 'Arial, sans-serif',
  fontSize: '14px',
},
footerContainer: {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
},
footerSection: {
  marginBottom: '20px',
  flexBasis: '22%',
  minWidth: '200px',
},
footerTitle: {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
},
footerLinks: {
  listStyleType: 'none',
  padding: 0,
  margin: 0,
},
footerLink: {
  marginBottom: '8px',
  fontSize: '14px',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
},
footerLinkHover: {
  color: '#ff5722',
},
socialIcons: {
  display: 'flex',
  gap: '15px',
},
socialIcon: {
  color: '#fff',
  fontSize: '18px',
  textDecoration: 'none',
  backgroundColor: '#555',
  padding: '10px',
  borderRadius: '50%',
  transition: 'background-color 0.3s ease',
},
socialIconHover: {
  backgroundColor: '#ff5722',
},
newsletterText: {
  fontSize: '14px',
  marginBottom: '10px',
},
emailInput: {
  padding: '10px',
  borderRadius: '5px',
  width: '100%',
  marginBottom: '10px',
  border: '1px solid #ccc',
},
subscribeButton: {
  padding: '10px 20px',
  backgroundColor: '#ff5722',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
},
footerBottom: {
  backgroundColor: '#222',
  textAlign: 'center',
  padding: '10px',
  marginTop: '30px',
},
footerCopy: {
  margin: 0,
  fontSize: '12px',
},
};

export default Footer