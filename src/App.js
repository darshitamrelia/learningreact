import Carousel from "./components/carousel";
import Header from "./components/Header";
import Product from "./components/Product";
import Formhandle from "./components/Formhandle";
// import Usestate from "./components/Usestate";
// import Profile from "./components/Profile";
// import CocktailListing from "./components/CocktailListing";
import CocktailList from "./components/CocktailList";
// import Cards from "./components/cards"
// import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Product />
      <Formhandle />
      {/* <CocktailListing /> */}
      <CocktailList />
      {/* <Usestate /> */}
      {/* <Profile /> */}

      {/* <Cards />
            <Footer /> */}
    </>
  );
}

export default App;
