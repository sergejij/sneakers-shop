import React from 'react';
import 'macro-css';
import styles from './CartInfo.module.scss';

const CartInfo = ({ isOrderPlaced, onClose }) => (
  <div className={styles.emptyCart}>
    <img
      width="120"
      height="120"
      src={isOrderPlaced ? 'img/placedOrder.png' : 'img/cartEmpty.png'}
      alt="empty"
    />
    <h4>{isOrderPlaced ? 'Заказ оформлен!' : 'Корзина пустая'}</h4>
    <p>
      {isOrderPlaced
        ? 'Ваш заказ скоро будет передан курьерской доставке'
        : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
    </p>
    <button type="button" onClick={onClose} className="cartBtnLeft">
      <img src="img/arrow-left.png" alt="arrow-left" />
      Вернуться назад
    </button>
  </div>
);

export default CartInfo;
