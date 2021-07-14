import React from 'react';
import styles from '../../components/Sneakers/Sneakers.module.scss';
import Card from '../../components/Card/Card';

const Favorite = ({
  items, addToCart, removeFromFavorite, addToFavorite,
}) => (
  <>
    <div className={styles.headlineRow}>
      <h2>Мои закладки</h2>
    </div>
    <div className="d-flex justify-center flex-wrap align-center">
      {items.map((sneaker, index) => (
        <Card
          key={`${sneaker.name}_${index}`}
          name={sneaker.name}
          price={sneaker.price}
          photoUrl={sneaker.photoUrl}
          addToCart={() => addToCart(sneaker)}
          addToFavorite={() => addToFavorite(sneaker)}
          removeFromFavorite={() => removeFromFavorite(sneaker)}
          favorited
        />
      ))}
    </div>
  </>
);

export default Favorite;
