import React from 'react';
import styles from './Cart.module.scss';
import AppContext from '../../context';
import CartInfo from './CartInfo';

const Cart = ({ onClose }) => {
  const { sneakers, removeFromCart } = React.useContext(AppContext);
  const items = sneakers.filter((sneaker) => sneaker.isAdded);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.cart} onClick={(e) => e.stopPropagation()}>

        <div className="d-flex justify-between align-center">
          <h3>Корзина</h3>
          <img onClick={onClose} src="/img/close.png" alt="close-cart" />
        </div>
        {items.length > 0 ? (
          <>
            <div className={styles.cartSneakers}>
              {items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
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

              <button className="cartBtnRight">
                Оформить заказ
                <img className="arrowBtnRight" src="/img/arrow-right.png" alt="arrow-right" />
              </button>
            </div>
          </>
        ) : <CartInfo onClose={onClose} isCartEmpty />}
      </div>
    </div>
  );
};

export default Cart;
