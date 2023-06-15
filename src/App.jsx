import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Menu from './routes/menu/menu.component';
import Orders from './routes/orders/orders.component';
import Checkout from './routes/checkout/checkout.component';
import Account from './routes/account/account.component';

import RatingModal from './components/rating-modal/rating-modal.component';
import Alert from './components/alert/alert.component';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="auth/*" element={<Authentication />} />
          <Route path="menu" element={<Menu />} />
          <Route path="orders" element={<Orders />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
      <RatingModal />
      <Alert />
    </>
  );
};

export default App;
