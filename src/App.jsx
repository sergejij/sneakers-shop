import React from 'react';
import './App.scss';
import 'macro-css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Sneakers from './components/Sneakers/Sneakers';

function App() {
  const [sneakers, setSneakers] = React.useState([]);
  const [sneakersCart, setSneakersCart] = React.useState([]);
  const [isOpenedCart, setIsOpenedCart] = React.useState(false);

  const toggleOpenCart = () => {
    setIsOpenedCart((prev) => !prev);
  };

  React.useEffect(() => {
    fetch('https://60e0c4616b689e001788cbc8.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setSneakers(data);
      });
  }, []);

  const addToCart = (sneaker) => {
    if (sneakersCart.includes(sneaker)) {
        return
    }
    setSneakersCart((prev) => ([
        ...prev,
        sneaker
    ]));
  };

  const removeFromCart = (sneaker) => {
    if (!sneakersCart.includes(sneaker)) {
        return
    }
    setSneakersCart((prev) => prev.filter((item) => item !== sneaker));
  };

  return (
    <div className="App p-50">
      <div className="content">
        {isOpenedCart && <Cart
            items={sneakersCart}
            onClose={() => setIsOpenedCart(false)}
            removeFromCart={removeFromCart}
        />}
        <Header onOpenCart={() => setIsOpenedCart(true)} />
        <Sneakers removeFromCart={removeFromCart} addToCart={addToCart} items={sneakers} />
      </div>
    </div>
  );
}

export default App;
