import React from 'react';
import './App.scss';
import 'macro-css';
import axios from 'axios';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Sneakers from './pages/Sneakers/Sneakers';
import Favorite from './pages/Favorite/Favorite';
import api from './consts';

import AppContext from './context';
import Orders from './pages/Orders/Orders';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [isOpenedCart, setIsOpenedCart] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = React.useState(false);
  const [cartSum, setCartSum] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(api.items)
      .then(({ data }) => {
        setSneakers(data);
        setCartSum(() => data.reduce((acc, sneaker) => (
          (sneaker.isAdded ? acc + sneaker.price : acc)
        ), 0));
        setIsLoading(false);
      });
  }, []);

  const addToCart = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isAdded: true })
      .then(() => {
        setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
          ...item,
          isAdded: true,
        } : item)));
        setCartSum((prev) => prev + sneaker.price);
      })
      .catch(() => alert('Не удалось добавить в корзину ;('));
  };

  const addToFavorite = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isFavorited: true })
      .then(() => {
        setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
          ...item,
          isFavorited: true,
        } : item)));
      })
      .catch(() => alert('Не удалось добавить в фавориты ;('));
  };

  const removeFromCart = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isAdded: false })
      .then(() => {
        setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
          ...item,
          isAdded: false,
        } : item)));
        setCartSum((prev) => prev - sneaker.price);
      })
      .catch(() => alert('Не убрать товар из корзины ;('));
  };

  const removeFromFavorite = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isFavorited: false })
      .then(() => {
        setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
          ...item,
          isFavorited: false,
        } : item)));
      })
      .catch(() => alert('Не убрать товар из фаворитов ;('));
  };

  const placeOrder = async (placedSneakers) => {
    try {
      for (let i = 0; i < placedSneakers.length; i += 1) {
        const placedSneaker = placedSneakers[i];

        await axios.put(`${api.items}/${placedSneaker.id}`, { isBought: true, isAdded: false });
        setSneakers((prev) => prev.map((sneaker) => (sneaker === placedSneaker ? {
          ...sneaker,
          isBought: true,
          isAdded: false,
        } : sneaker)));
        delay(300);
      }
    } catch {
      alert('Не удалось оформить зака ;(');
    }

    setCartSum(0);
    setIsOrderPlaced(true);
  };

  const clearOrders = async (orders) => {
    try {
      for (let i = 0; i < orders.length; i += 1) {
        const order = orders[i];

        await axios.put(`${api.items}/${order.id}`, { isBought: false });
        setSneakers((prev) => prev.map((sneaker) => (sneaker === order ? {
          ...sneaker,
          isBought: false,
        } : sneaker)));
        delay(300);
      }
    } catch {
      alert('Не удалось очистить покупки ;(');
    }
  };

  return (
    <AppContext.Provider value={{
      sneakers,
      addToCart,
      addToFavorite,
      removeFromCart,
      removeFromFavorite,
      isLoading,
      cartSum,
      placeOrder,
      isOrderPlaced,
      clearOrders,
    }}
    >
      <div className="App">
        <div className="content">
          <Cart
            isOpenedCart={isOpenedCart}
            onClose={() => {
              setIsOpenedCart(false);
              setIsOrderPlaced(false);
            }}
          />
          <Header onOpenCart={() => setIsOpenedCart(true)} />

          <main className="p-50">
            <Switch>
              <Route path="/sneakers-shop" exact>
                <Sneakers />
              </Route>
              <Route path="/sneakers-shop/favorite" exact>
                <Favorite />
              </Route>
              <Route path="/sneakers-shop/orders" exact>
                <Orders />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
