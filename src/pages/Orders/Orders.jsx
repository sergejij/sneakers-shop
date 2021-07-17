import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Orders.module.scss';
import stylesCart from '../../components/Cart/CartInfo.module.scss';
import Card from '../../components/Card/Card';
import AppContext from '../../context';

const Orders = () => {
  const { sneakers, clearOrders } = React.useContext(AppContext);
  const items = sneakers.filter((sneaker) => sneaker.isBought);
  const [isDeleting, setIsDeleting] = React.useState(false);

  return (
    <>
      <div className={styles.headlineRow}>
        <h2>Мои покупки</h2>
        {items.length !== 0 && (
        <button
          type="button"
          onClick={() => {
            setIsDeleting(true);
            clearOrders(items);
          }}
          className={styles.clearOrder}
        >
          {isDeleting ? 'Очистка...' : 'Очистить покупки'}
        </button>
        )}
      </div>
      <div className="d-flex justify-center flex-wrap align-center">
        {items.length ? items.map((sneaker) => (
          <Card
            key={sneaker.id}
            sneaker={sneaker}
          />
        )) : (
          <div className={stylesCart.emptyCart} style={{ marginTop: '10vh' }}>
            <img
              width="80"
              height="80"
              src="img/noOrders.jpeg"
              alt="emnoFavoritepty"
              style={{ marginBottom: '10px' }}
            />
            <h4>У вас нет заказов</h4>
            <p style={{ marginBottom: '50px' }}>
              Вы нищеброд?
              <br />
              Оформите хотя бы один заказ.
            </p>
            <Link to="/">
              <button type="button" className="cartBtnLeft">
                <img src="img/arrow-left.png" alt="arrow-left" />
                Вернуться назад
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
