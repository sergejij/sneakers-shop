import React from 'react';
import 'macro-css';
import styles from './CartInfo.module.scss';

const CartInfo = ({ isCartEmpty, onClose }) => (
  <div className={styles.emptyCart}>
    <img
      width="120"
      height="120"
      src={isCartEmpty ? '/img/cartEmpty.png' : '/img/placedOrder.png'}
      alt="empty"
    />
    <h4>{isCartEmpty ? 'Корзина пустая' : 'Заказ оформлен!'}</h4>
    <p>
      {isCartEmpty
        ? 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
        : 'Ваш заказ #18 скоро будет передан курьерской доставке'}
    </p>
    <button style={isCartEmpty && {width: '85%'}} onClick={onClose} className="cartBtnLeft">
        <img src="/img/arrow-left.png" alt="arrow-left" />
        Вернуться назад
    </button>
  </div>
);

export default CartInfo;
