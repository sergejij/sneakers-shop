import React from 'react';
import './App.scss';
import 'macro-css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

const sneakersData = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999 руб.',
    photoUrl: '/img/sneakers/1.png',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: '12 999 руб.',
    photoUrl: '/img/sneakers/2.png',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499 руб.',
    photoUrl: '/img/sneakers/3.png',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999 руб.',
    photoUrl: '/img/sneakers/4.png',
  },
];

function App() {
  return (
    <div className="App p-50">
      <div style={{ display: 'none' }} className="overlay">
        <div className="cart d-flex flex-column justify-between">
          <div className="d-flex justify-between align-center">
            <h3>Корзина</h3>
            <img src="/img/close.png" alt="close-cart" />
          </div>
          <div className="cartSneakers d-flex flex-column align-center">
            <div className="cartItem d-flex justify-between align-center">
              <div className="cartPhotoContainer">
                <img src="/img/sneakers/1.png" alt="sneaker" />
              </div>
              <div className="cartItemInfo d-flex flex-column">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button className="d-flex align-center justify-center">
                <img src="/img/close.png" alt="close" />
              </button>
            </div>
            <div className="cartItem d-flex justify-between align-center">
              <div className="cartPhotoContainer">
                <img src="/img/sneakers/1.png" alt="sneaker" />
              </div>
              <div className="cartItemInfo d-flex flex-column">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <button className="d-flex align-center justify-center">
                <img src="/img/close.png" alt="close" />
              </button>
            </div>
          </div>
          <div className="cartTotal">
            <ul className="d-flex flex-column">
              <li>
                <span>Итого:</span>
                <div />
                <b>1 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div />
                <b>1074 руб. </b>
              </li>
            </ul>

            <button className="cartBtn">
              Оформить заказ
              <img src="/img/arrow-right.png" alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>

      <div className="content">
        <Header />
        <main className="p-50">
          <div className="headlineRow d-flex justify-between align-center pb-40">
            <h2>Все кроссовки</h2>
            <label className="search d-flex justify-between align-center">
              <img src="/img/search.png" alt="search" />
              <input type="text" placeholder="Поиск..." />
            </label>
          </div>
          <div className="d-flex justify-center flex-wrap align-center">
            {sneakersData.map((sneaker) => (
              <Card
                name={sneaker.name}
                price={sneaker.price}
                photoUrl={sneaker.photoUrl}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
