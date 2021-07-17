import React from 'react';
import Card from '../../components/Card/Card';
import styles from './Sneakers.module.scss';
import AppContext from '../../context';
import SkeletonCard from '../../components/SkeletonCard/SkeletonCard';

const Sneakers = () => {
  const [searchText, setSearchText] = React.useState('');
  const {
    sneakers, isLoading,
  } = React.useContext(AppContext);

  return (
    <>
      <div className={styles.headlineRow}>
        <h2>Все кроссовки</h2>
        <label className={styles.search}>
          <img src="img/search.png" alt="search" />
          <input
            type="text"
            placeholder="Поиск..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && <img onClick={() => setSearchText('')} src="img/close.png" alt="close" />}
        </label>
      </div>
      <div className="d-flex justify-center flex-wrap align-center">
        {isLoading
          ? [...Array(12)].map((_, index) => <SkeletonCard key={index} />)
          : sneakers
            .filter((sneaker) => sneaker.name.toLowerCase().includes(searchText.toLowerCase()))
            .map((sneaker) => (
              <Card
                key={sneaker.id}
                sneaker={sneaker}
              />
            ))}
      </div>
    </>
  );
};

export default Sneakers;
