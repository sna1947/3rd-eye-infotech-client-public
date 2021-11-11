import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Products from './Pages/Home/Products/Products';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import initializeAuthencation from './Pages/Login/Firebase/firebase.initialize';
import AuthProvider from './Contexts/AuthProvider/AuthProvider'

initializeAuthencation();

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>

          <Route path='/home'>
               <Home></Home>
          </Route>
          
          <Route path='/products'>
               <Products></Products>
          </Route>
          <Route path='/product/:productid'>
               <ProductDetails></ProductDetails>
          </Route>

          {/* <Route path='/productdetails'>
             <ProductDetails></ProductDetails>
          </Route> */}

          <Route path='/register'>
               <Register></Register>
          </Route>
          <Route path='/login'>
               <Login></Login>
          </Route>

        </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
