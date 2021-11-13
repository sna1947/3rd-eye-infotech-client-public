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
import Footer from './Pages/Shared/Footer/Footer';
import BuyNow from './Pages/Home/BuyNow/BuyNow';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Purchases from './Pages/Home/Purchases/Purchases';
import CommingSoon from './Pages/Home/CommingSoon/CommingSoon';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';

initializeAuthencation();

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>

          <Route exact path='/'>
               <Home></Home>
          </Route>
          <Route path='/home'>
               <Home></Home>
          </Route>
          <Route path='/dashboard'>
               <DashBoard></DashBoard>
          </Route>
          
          <Route path='/products'>
               <Products></Products>
          </Route>
          <Route path='/product/:productid'>
               <ProductDetails></ProductDetails>
          </Route>
          {/* <PrivateRoute path='/product/:productid'>
               <ProductDetails></ProductDetails>
          </PrivateRoute> */}

          <PrivateRoute path='/buynow'>
             <BuyNow></BuyNow>
          </PrivateRoute>

          <PrivateRoute path='/purchases'>
             <Purchases></Purchases>
          </PrivateRoute>
          <Route path='/commingSoon'>
             <CommingSoon></CommingSoon>
          </Route>

          <Route path='/register'>
               <Register></Register>
          </Route>
          <Route path='/login'>
               <Login></Login>
          </Route>

        </Switch>
        <Route path='/footer'>
          <Footer></Footer>
        </Route>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
