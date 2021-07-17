import React from 'react';

import styles from './Card.module.scss';
import AppContext from '../../context';

const Card = ({ sneaker }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isWished, setIsWished] = React.useState(false);

  React.useEffect(() => {
    setIsAdded(sneaker.isAdded);
    setIsWished(sneaker.isFavorited);
  }, [sneaker]);

  const {
    addToCart, addToFavorite, removeFromCart, removeFromFavorite,
  } = React.useContext(AppContext);

  const onClickHeart = () => {
    isWished ? removeFromFavorite(sneaker) : addToFavorite(sneaker);
    setIsWished((state) => !state);
  };

  const onClickPlus = () => {
    isAdded ? removeFromCart(sneaker) : addToCart(sneaker);
    setIsAdded((state) => !state);
  };

  return (
    <div className={styles.card}>
      {isWished ? (
        <button onClick={onClickHeart} type="button" className={styles.heartRed}>
          <img src="img/heartRed.png" alt="heart" />
        </button>
      ) : (
        <button onClick={onClickHeart} type="button" className={styles.heart}>
          <img src="img/heart.png" alt="heart" />
        </button>
      )}
      <img width={133} height={112} src={sneaker.photoUrl} alt="sneaker" />
      <h5>{sneaker.name}</h5>
      <div className="d-flex align-center justify-between w100p">
        <div className={styles.price}>
          <p className="text-uppercase">Цена:</p>
          <p className="fw-bold">{sneaker.price}</p>
        </div>
        {isAdded ? (
          <button onClick={onClickPlus} type="button" className={styles.addedButton}>
            <img src="img/check.png" alt="check" />
          </button>

        ) : (
          <button onClick={onClickPlus} type="button" className={styles.addButton}>
            <img src="img/plus.png" alt="plus" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
