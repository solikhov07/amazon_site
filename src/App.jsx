import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import CustomerService from './routes/CustomerService/CustomerService';
import ProductInfo from './routes/ProductInfo/ProductInfo';
import Products from './routes/Products/Products';
import Login from './routes/registr/Login';
import Shop from './routes/shop/Shop';
import Signup from './routes/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Route>
      <Header/>
      </Route>
<Route exact path='/'>
  <Main/>
</Route>
<Route path='/customer-service'>
  <CustomerService/>
</Route>
  <Route path='/signin'>
    <Login/>
  </Route>
  <Route path='/signup'>
    <Signup/>
  </Route>
  <Route path='/products'>
    <Products/>
  </Route>
<Route exact path='/shop'>
<Shop/>
</Route>
<Route path='/shop/:productId'>
  <ProductInfo/>
</Route>
<Route>
<Footer/>
</Route>
    </div>
  );
}

export default App;
