
import React from "react";
import styles from './product.module.css'

const Product = ({ postre, addToCart, isInCart=false, onClick }) => {

     
     return(
          <div className={styles.product} >
               <h4>{postre.title}</h4>
               <p><b>Preço: {postre.price}</b>€</p>
               <img src={postre.thumbnailUrl} alt="tartas"/>
               {!isInCart && <button className={styles.addToCart} onClick={() => addToCart(postre)}>Add to Cart +</button>}
               <button className={styles.more} onClick={onClick}>Show more...</button>
               
          </div>
     )
};

export default Product;