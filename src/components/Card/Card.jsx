import React from 'react';

import styles from './Card.module.scss';

const Card = ({
  name,
  price,
  photoUrl,
  addToCart,
  removeFromCart,
  addToFavorite,
  removeFromFavorite,
  favorited = false,
  added = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isWished, setIsWished] = React.useState(favorited);

  // const onClickPlus = () => {
  //   setIsAdded((state) => !state);
  //   addToCart();
  // };

  const onClickHeart = () => {
    isWished ? removeFromFavorite() : addToFavorite();
    setIsWished((state) => !state);
  };

  const onClickPlus = () => {
    isAdded ? removeFromCart() : addToCart();
    setIsAdded((state) => !state);
  };

  return (
    <div className={styles.card}>
      {isWished ? (
        <button onClick={onClickHeart} type="button" className={styles.heartRed}>
          <img src="/img/heartRed.png" alt="heart" />
        </button>
      ) : (
        <button onClick={onClickHeart} type="button" className={styles.heart}>
          <img src="/img/heart.png" alt="heart" />
        </button>
      )}
      <img width={133} height={112} src={photoUrl} alt="sneaker" />
      <h5>{name}</h5>
      <div className="d-flex align-center justify-between w100p">
        <div className={styles.price}>
          <p className="text-uppercase">Цена:</p>
          <p className="fw-bold">{price}</p>
        </div>
        {isAdded ? (
          <button onClick={onClickPlus} type="button" className={styles.addedButton}>
            <img src="/img/check.png" alt="check" />
          </button>

        ) : (
          <button onClick={onClickPlus} type="button" className={styles.addButton}>
            <img src="/img/plus.png" alt="plus" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
