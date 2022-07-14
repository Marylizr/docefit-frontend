import React, { useState } from "react";
import Cart from "../../components/cart/cart";
import Header from "../../components/header/header";
import Landing from "../landing/landing";
import ProductList from "../../components/productList/productList";
import styles from './home.module.css'
import UserRegister from "../userRegister/userRegister";



const Home = () => {
     const [searchValue, setSearchValue] = useState('');
     const [cartProducts, setCartProducts]  = useState([]);
     

     const addToCart = (product) => {       
          setCartProducts([...cartProducts, product]);
     }


     return(
          <div className={styles.home}>

               <div className={styles.header}>
                    <Header onSearch={setSearchValue} />
               </div>
               <div className={styles.bodyApp}>
                    <Landing/>
                    <ProductList searchValue={searchValue} addToCart={addToCart}/>
                    <Cart cartProducts={cartProducts}/>
               </div>  
               <div>
                    <UserRegister/>
               </div> 
          </div>
     )
};

export default Home;