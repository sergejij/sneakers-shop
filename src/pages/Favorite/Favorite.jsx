import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Sneakers/Sneakers.module.scss';
import Card from '../../components/Card/Card';
import AppContext from '../../context';
import stylesCart from '../../components/Cart/CartInfo.module.scss';

const Favorite = () => {
  const { sneakers } = React.useContext(AppContext);
  const items = sneakers.filter((sneaker) => sneaker.isFavorited);

  return (
    <>
      <div className={styles.headlineRow}>
        <h2>Мои закладки</h2>
      </div>
      <div className="d-flex justify-center flex-wrap align-center">
        {items.length !== 0 ? items.map((sneaker) => (
          <Card
            key={sneaker.id}
            sneaker={sneaker}
          />
        )) : (
          <div className={stylesCart.emptyCart} style={{ marginTop: '10vh' }}>
            <img
              width="80"
              height="80"
              src="img/noFavorite.jpeg"
              alt="emnoFavoritepty"
              style={{ marginBottom: '10px' }}
            />
            <h4>Закладок нет :(</h4>
            <p style={{ marginBottom: '50px' }}>Вы ничего не добавляли в закладки</p>
            <Link width="100%" to="/sneakers-shop">
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

export default Favorite;
