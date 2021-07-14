import React from 'react';
import styles from './Cart.module.scss';

const Cart = ({ onClose, items = [], removeFromCart }) => {
  console.log('items:', items);
  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <div className="d-flex justify-between align-center">
          <h3>Корзина</h3>
          <img onClick={onClose} src="/img/close.png" alt="close-cart" />
        </div>
        <div className={styles.cartSneakers}>
          {items.map((item, index) => (
            <div key={`${item.name}_${index}`} className={styles.cartItem}>
              <div className={styles.cartPhotoContainer}>
                <img src={item.photoUrl} alt="sneaker" />
              </div>
              <div className={styles.cartItemInfo}>
                <p>{item.name}</p>
                <b>{item.price}</b>
              </div>
              <button onClick={() => removeFromCart(item)} className="d-flex align-center justify-center">
                <img src="/img/close.png" alt="close" />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.cartTotal}>
          <ul className="d-flex flex-column">
            <li>
              <span>Итого:</span>
              <div />
              <b>1 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div />
              <b>1074 руб. </b>
            </li>
          </ul>

          <button className={styles.cartBtn}>
            Оформить заказ
            <img src="/img/arrow-right.png" alt="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
