import React from 'react';
import Card from '../Card/Card';
import styles from './Sneakers.module.scss';
import AppContext from '../../context';
import SkeletonCard from "../SkeletonCard/SkeletonCard";

// const sneakersData = [
//   {
//     id: 1,
//     name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '12 999 руб.',
//     photoUrl: '/img/sneakers/1.png',
//   },
//   {
//     id: 2,
//     name: 'Мужские Кроссовки Nike Air Max 270',
//     price: '12 999 руб.',
//     photoUrl: '/img/sneakers/2.png',
//   },
//   {
//     id: 3,
//     name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '8 499 руб.',
//     photoUrl: '/img/sneakers/3.png',
//   },
//   {
//     id: 4,
//     name: 'Кроссовки Puma X Aka Boku Future Rider',
//     price: '8 999 руб.',
//     photoUrl: '/img/sneakers/4.png',
//   },
//   {
//     id: 5,
//     name: 'Мужские Кроссовки Under Armour Curry 8',
//     price: '15 199 руб.',
//     photoUrl: '/img/sneakers/5.png',
//   },
//   {
//     id: 6,
//     name: 'Мужские Кроссовки Nike Kyrie 7',
//     price: '11 299 руб.',
//     photoUrl: '/img/sneakers/6.png',
//   },
//   {
//     id: 7,
//     name: 'Мужские Кроссовки Jordan Air Jordan 11',
//     price: '10 799 руб.',
//     photoUrl: '/img/sneakers/7.png',
//   },
//   {
//     id: 8,
//     name: 'Мужские Кроссовки Nike LeBron XVIII',
//     price: '16 499 руб.',
//     photoUrl: '/img/sneakers/8.png',
//   },
//   {
//     id: 9,
//     name: 'Мужские Кроссовки Nike Lebron XVIII Low',
//     price: '13 999 руб.',
//     photoUrl: '/img/sneakers/9.png',
//   },
//   {
//     id: 10,
//     name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '8 499 руб.',
//     photoUrl: '/img/sneakers/10.png',
//   },
//   {
//     id: 11,
//     name: 'Кроссовки Puma X Aka Boku Future Rider',
//     price: '8 999 руб.',
//     photoUrl: '/img/sneakers/11.png',
//   },
//   {
//     id: 12,
//     name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
//     price: '11 299 руб.',
//     photoUrl: '/img/sneakers/12.png',
//   },
// ];

// [
//     {
//         "id": "1",
//         "name": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "price": 12999,
//         "photoUrl": "/img/sneakers/1.png",
//         "isAdded": true,
//         "isFavorited": false,
//         "isBought": false
//     },
//     {
//         "id": "2",
//         "name": "Мужские Кроссовки Nike Air Max 270",
//         "price": 12999,
//         "photoUrl": "/img/sneakers/2.png",
//         "isAdded": false,
//         "isFavorited": false,
//         "isBought": false
//     },
//     {
//         "id": "3",
//         "name": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "price": 8499,
//         "photoUrl": "/img/sneakers/3.png",
//         "isAdded": true,
//         "isFavorited": true,
//         "isBought": false
//     },
//     {
//         "id": "4",
//         "name": "Кроссовки Puma X Aka Boku Future Rider",
//         "price": 8999,
//         "photoUrl": "/img/sneakers/4.png",
//         "isAdded": false,
//         "isFavorited": true,
//         "isBought": false
//     },
//     {
//         "id": "5",
//         "name": "Мужские Кроссовки Under Armour Curry 8",
//         "price": 15199,
//         "photoUrl": "/img/sneakers/5.png",
//         "isAdded": false,
//         "isFavorited": false,
//         "isBought": false
//     },
//     {
//         "id": "6",
//         "name": "Мужские Кроссовки Nike Kyrie 7",
//         "price": 11299,
//         "photoUrl": "/img/sneakers/6.png",
//         "isAdded": false,
//         "isFavorited": false,
//         "isBought": false
//     },
//     {
//         "id": "7",
//         "name": "Мужские Кроссовки Jordan Air Jordan 11",
//         "price": 10799,
//         "photoUrl": "/img/sneakers/7.png",
//         "isAdded": false,
//         "isFavorited": false,
//         "isBought": true
//     },
//     {
//         "id": "8",
//         "name": "Мужские Кроссовки Nike LeBron XVIII",
//         "price": 16499,
//         "photoUrl": "/img/sneakers/8.png",
//         "isAdded": true,
//         "isFavorited": false,
//         "isBought": false
//     },
//     {
//         "id": "9",
//         "name": "Мужские Кроссовки Nike Lebron XVIII Low",
//         "price": 13999,
//         "photoUrl": "/img/sneakers/9.png",
//         "isAdded": false,
//         "isFavorited": false,
//         "isBought": false
//     },
//     {
//         "id": "10",
//         "name": "Мужские Кроссовки Nike Blazer Mid Suede",
//         "price": 8499,
//         "photoUrl": "/img/sneakers/10.png",
//         "isAdded": false,
//         "isFavorited": false,
//         "isBought": false
//     },
//     {
//         "id": "11",
//         "name": "Кроссовки Puma X Aka Boku Future Rider",
//         "price": 8999,
//         "photoUrl": "/img/sneakers/11.png",
//         "isAdded": false,
//         "isFavorited": false,
//         "isBought": false
//     },
//     {
//         "id": "12",
//         "name": "Мужские Кроссовки Nike Kyrie Flytrap IV",
//         "price": 11299,
//         "photoUrl": "/img/sneakers/12.png",
//         "isAdded": false,
//         "isFavorited": false,
//         "isBought": false
//     }
// ]

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
          <img src="/img/search.png" alt="search" />
          <input
            type="text"
            placeholder="Поиск..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && <img onClick={() => setSearchText('')} src="/img/close.png" alt="close" />}
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
