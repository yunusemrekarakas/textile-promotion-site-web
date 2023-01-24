import './App.css';
import Header from "./Component/Header/Header"
import Hero from "./Component/Hero/Hero"
import Product from './Component/Product/Product'
import Products from './Component/Products/Products'
import Reference from './Component/Reference/Reference'
import Footer from './Component/Footer/Footer'
import Satisfaction from './Component/Satisfaction/Satisfaction';


function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Product/>
        <Products/>
        <Satisfaction/>
        <Reference/>
        <Footer/>
    </div>
  );
}
export default App;
