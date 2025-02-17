import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from "./componennts/Cart"
import Products from './componennts/Products'
import NavBar from './componennts/Navbar'
import Footer from './componennts/Footer'

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1500,
      image:
      "https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg",
      disc: "Lorem ipsum dolor sit amet  adipisicing elit. In id cum quas, sint similique abc",
    },
    {
      id: 2,
      name: "Mobile",
      price: 750,
      image:
        "https://www.bigcmobiles.com/media/catalog/product/cache/6f935541fc7266f00577560114fa3a98/s/t/starlight_1.jpg",
        disc: "Lorem ipsum dolor sit amet  adipisicing elit. In id cum quas, sint similique ",
    },
    {
      id: 3,
      name: "Pc",
      price: 1200,
      image:
        "https://m.media-amazon.com/images/I/71QtoB1MJIL.jpg",
        disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In id cum quas, sint similique ipsa ",
    },
    {
      id: 4,
      name: "Speaker",
      price: 5000,
      image:
        "https://m.media-amazon.com/images/I/712D910fO-L.jpg",
        disc: "Jbl Partybox 710 800w Bluetooth Party Speaker (Ipx4 Splashproof, 2.1 Channel, Black) ",
    },
    {
      id: 5,
      name: "Alexa",
      price: 700,
      image:
        "https://www.jiomart.com/images/product/original/491431035/amazon-echo-dot-3rd-gen-new-and-improved-smart-speaker-with-alexa-black-digital-o491431035-p590036349-0-202009260316.jpeg?im=Resize=(1000,1000)",
        disc: "Buy Amazon Echo Dot (3rd Gen) New and Improved Smart Speaker with Alexa, 360 degree Sound, Black Online at Best Prices in India - JioMart. ",
    },
  ];

  const [cartItem,setCartitem] = useState([]);

// add to cart button func
  const onAddToCart  = (product) =>{
    setCartitem((prevItems)=>{
      const existingItem = prevItems.find((item)=>item.id === product.id);

      if(existingItem){
        return prevItems.map((item)=>
          item.id === product.id ? {...item,quantity:item.quantity+1}:item
        );
      }
      return [...prevItems,{...product,quantity :1 }]
    });
  }

  // 




// export default App;

  // remove cart function

  const onRemovecart =(productId) =>{
    setCartitem((e)=>{
      return e .map((item)=>{
        if(item.id === productId){
          return {...item,quantity:item.quantity-1}
        }
        return item
      })
      .filter((item)=>item.quantity > 0 )
    })
  }
// cart
const cartItemCount = cartItem.reduce(
  (total, item) => total + item.quantity,
  0
);
  return (
    <>
     <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <NavBar cartItemCount={cartItemCount} />
      <h1 style={{ textAlign: "center" }}>Eccomerce</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <Cart items={cartItem} onRemovecart={onRemovecart} />
      <Footer/>
    </div>    
    </>
  )
}

export default App
