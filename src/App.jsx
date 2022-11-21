import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Login from './routes/registr/Login';

function App() {
  return (
    <div className="App">
<Route exact path="/">
<Header/>
  <Main/>
  <Footer/>
</Route>
  <Route path='/signin'>
    <Login/>
  </Route>
    </div>
  );
}

export default App;
