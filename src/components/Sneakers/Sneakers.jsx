import React from 'react';
import Card from '../Card/Card';
import styles from './Sneakers.module.scss';

// const sneakersData = [
//   {
//     name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '12 999 руб.',
//     photoUrl: '/img/sneakers/1.png',
//   },
//   {
//     name: 'Мужские Кроссовки Nike Air Max 270',
//     price: '12 999 руб.',
//     photoUrl: '/img/sneakers/2.png',
//   },
//   {
//     name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '8 499 руб.',
//     photoUrl: '/img/sneakers/3.png',
//   },
//   {
//     name: 'Кроссовки Puma X Aka Boku Future Rider',
//     price: '8 999 руб.',
//     photoUrl: '/img/sneakers/4.png',
//   },
//   {
//     name: 'Мужские Кроссовки Under Armour Curry 8',
//     price: '15 199 руб.',
//     photoUrl: '/img/sneakers/5.png',
//   },
//   {
//     name: 'Мужские Кроссовки Nike Kyrie 7',
//     price: '11 299 руб.',
//     photoUrl: '/img/sneakers/6.png',
//   },
//   {
//     name: 'Мужские Кроссовки Jordan Air Jordan 11',
//     price: '10 799 руб.',
//     photoUrl: '/img/sneakers/7.png',
//   },
//   {
//     name: 'Мужские Кроссовки Nike LeBron XVIII',
//     price: '16 499 руб.',
//     photoUrl: '/img/sneakers/8.png',
//   },
//   {
//     name: 'Мужские Кроссовки Nike Lebron XVIII Low',
//     price: '13 999 руб.',
//     photoUrl: '/img/sneakers/9.png',
//   },
//   {
//     name: 'Мужские Кроссовки Nike Blazer Mid Suede',
//     price: '8 499 руб.',
//     photoUrl: '/img/sneakers/10.png',
//   },
//   {
//     name: 'Кроссовки Puma X Aka Boku Future Rider',
//     price: '8 999 руб.',
//     photoUrl: '/img/sneakers/11.png',
//   },
//   {
//     name: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
//     price: '11 299 руб.',
//     photoUrl: '/img/sneakers/12.png',
//   },
// ];

const Sneakers = ({ items, addToCart }) => (
  <main className="p-50">
    <div className={styles.headlineRow}>
      <h2>Все кроссовки</h2>
      <label className={styles.search}>
        <img src="/img/search.png" alt="search" />
        <input type="text" placeholder="Поиск..." />
      </label>
    </div>
    <div className="d-flex justify-center flex-wrap align-center">
      {items.map((sneaker, index) => (
        <Card
          key={`${sneaker.name}_${index}`}
          name={sneaker.name}
          price={sneaker.price}
          photoUrl={sneaker.photoUrl}
          addToCart={() => addToCart(sneaker)}
        />
      ))}
    </div>
  </main>
);

export default Sneakers;
