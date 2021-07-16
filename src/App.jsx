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
import Sneakers from './components/Sneakers/Sneakers';
import Favorite from './pages/Favorite/Favorite';
import api from './consts';

import AppContext from './context';
import Orders from './pages/Orders/Orders';

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
        setCartSum(() => data.reduce((acc, sneaker) => (sneaker.isAdded ? acc + sneaker.price : acc), 0));
        setIsLoading(false);
      });
  }, []);

  const addToCart = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isAdded: true });
    setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
      ...item,
      isAdded: true,
    } : item)));
    setCartSum((prev) => prev + sneaker.price);
  };

  const addToFavorite = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isFavorited: true });
    setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
      ...item,
      isFavorited: true,
    } : item)));
  };

  const removeFromCart = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isAdded: false });
    setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
      ...item,
      isAdded: false,
    } : item)));
    setCartSum((prev) => prev - sneaker.price);
  };

  const removeFromFavorite = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isFavorited: false });
    setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
      ...item,
      isFavorited: false,
    } : item)));
  };

  const placeOrder = (placedSneakers) => {
    placedSneakers.forEach((placedSneaker) => {
      axios.put(`${api.items}/${placedSneaker.id}`, { isBought: true, isAdded: false });
      setSneakers((prev) => prev.map((sneaker) => (sneaker === placedSneaker ? {
        ...sneaker,
        isBought: true,
        isAdded: false,
      } : sneaker)));
    });
    setCartSum(0);
    setIsOrderPlaced(true);
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
    }}
    >
      <div className="App p-50">
        <div className="content">
          {isOpenedCart && (
            <Cart onClose={() => {
              setIsOpenedCart(false);
              setIsOrderPlaced(false);
            }} />
          )}
          <Header onOpenCart={() => setIsOpenedCart(true)} />

          <main className="p-50">
            <Switch>
              <Route path="/" exact>
                <Sneakers />
              </Route>
              <Route path="/favorite" exact>
                <Favorite />
              </Route>
              <Route path="/orders" exact>
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
