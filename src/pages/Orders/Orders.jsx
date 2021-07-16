import React from 'react';
import styles from '../../components/Sneakers/Sneakers.module.scss';
import Card from '../../components/Card/Card';
import AppContext from '../../context';

const Orders = () => {
  const { sneakers } = React.useContext(AppContext);
  const items = sneakers.filter((sneaker) => sneaker.isBought);

  return (
    <>
      <div className={styles.headlineRow}>
        <h2>Мои покупки</h2>
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

export default Orders;
