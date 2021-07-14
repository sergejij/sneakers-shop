import React from 'react';
import styles from '../../components/Sneakers/Sneakers.module.scss';
import Card from '../../components/Card/Card';
import AppContext from '../../context';

const Favorite = () => {
  const { sneakers } = React.useContext(AppContext);
  const items = sneakers.filter((sneaker) => sneaker.isFavorited);

  return (
    <>
      <div className={styles.headlineRow}>
        <h2>Мои закладки</h2>
      </div>
      <div className="d-flex justify-center flex-wrap align-center">
        {items.map((sneaker) => (
          <Card
            key={sneaker.id}
            sneaker={sneaker}
          />
        ))}
      </div>
    </>
  );
};

export default Favorite;
