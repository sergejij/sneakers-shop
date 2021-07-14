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

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [isOpenedCart, setIsOpenedCart] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(api.items)
      .then(({ data }) => setSneakers(data));
  }, []);

  const addToCart = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isAdded: true });
    setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
      ...item,
      isAdded: true,
    } : item)));
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
  };

  const removeFromFavorite = (sneaker) => {
    axios.put(`${api.items}/${sneaker.id}`, { isFavorited: false });
    setSneakers((prev) => prev.map((item) => (item.id === sneaker.id ? {
      ...item,
      isFavorited: false,
    } : item)));
  };

  return (
    <div className="App p-50">
      <div className="content">
        {isOpenedCart && (
        <Cart
          items={sneakers.filter((sneaker) => sneaker.isAdded)}
          onClose={() => setIsOpenedCart(false)}
          removeFromCart={removeFromCart}
        />
        )}
        <Header onOpenCart={() => setIsOpenedCart(true)} />

        <main className="p-50">
          <Switch>
            <Route path="/" exact>
              <Sneakers
                items={sneakers}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                addToFavorite={addToFavorite}
                removeFromFavorite={removeFromFavorite}
              />
            </Route>
            <Route path="/favorite">
              <Favorite
                removeFromFavorite={removeFromFavorite}
                addToFavorite={addToFavorite}
                addToCart={addToCart}
                items={sneakers.filter((sneaker) => sneaker.isFavorited)}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
