import React from "react";
import styles from './cart.module.css'
import Product from "../product/product";

const Cart = ({cartProducts}) => {

     const calcTotalPrice = (list) => {
          let totalPrice = 0;
          list.forEach((postre) => {
               totalPrice = totalPrice + postre.price;
          });
          return totalPrice;
     }

     return(
          <div>
               <h3>My Cart</h3>
               <div class={styles.cart}>
                    {cartProducts && cartProducts.length > 0 && cartProducts.map((postre) => {
                         return(
                              
                              <Product postre={postre} isInCart={true}/>
                              
                         )
                    })}
               </div> 
                    {(!cartProducts || cartProducts.length === 0) && (<p>0 productos</p>)}
                    <p>Total Price:{calcTotalPrice(cartProducts)} € </p>
                     
          </div>
     )
};

export default Cart;