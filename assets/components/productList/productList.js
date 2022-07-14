import React from "react";
import styles from './productList.module.css';
import postres from '../../assets/postres.json';
import Product from "../product/product";
import { useState } from "react";
import { useEffect } from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";

const ProductList = ({addToCart, searchValue}) => {
     const [selectedItem, setSelectedItem] = useState();
     const [filteredData, setFilteredData] = useState(postres);
     const [isOpenModal, openModal, closeModal] = useModal(false);
  

  useEffect(() => {
     if (searchValue !== '') {
          setFilteredData(postres.filter(({ type }) => {
            const regex = new RegExp(searchValue);
            return regex.test(type);
          }))
        }
      }, [searchValue, setFilteredData]);
  
     return(
          
          <div className={styles.productList} >
               
               {filteredData.map(postre => <Product addToCart={addToCart} postre={postre} onClick={() => {
               setSelectedItem(postre); 
               openModal()
               
      }} />)}

          {selectedItem && 
               <Modal isOpen={isOpenModal} closeModal={closeModal}>
               <p> {selectedItem.title}</p>
               <p><b>Preço: </b> {selectedItem.price}€</p>
               <p>{selectedItem.description}</p>
               <img src={selectedItem.thumbnailUrl} width="400" alt="img"/>
               </Modal>}


          </div>
     )
};

export default ProductList;