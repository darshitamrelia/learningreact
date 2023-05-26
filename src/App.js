// import Carousel from "./components/carousel";
// import Header from "./components/Header";
// import Product from "./components/Product";
// import Formhandle from "./components/Formhandle";
// import Usestate from "./components/Usestate";
// import Profile from "./components/Profile";
// import CocktailListing from "./components/CocktailListing";
// import CocktailList from "./components/CocktailList";
// import Cards from "./components/cards"
// import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Support from "./components/Pages/Support";
import Courses from "./components/Pages/Courses";
import Nav from "./components/Nav";
import CourseDetail from "./components/Pages/CourseDetail";
import Coctail from "./components/Pages/Coctail";
import CocktailDetail from "./components/Pages/CocktailDetail";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/Coctail" element={<Coctail />} />
        <Route path="/Coctail/:id" element={<CocktailDetail />} />
      </Routes>

      {/* <About /> */}
      {/* <Home /> */}
      {/* <Header />
      <Carousel />
      <Product /> */}
      {/* <Formhandle /> */}
      {/* <CocktailListing /> */}
      {/* <CocktailList /> */}
      {/* <Usestate /> */}
      {/* <Profile /> */}

      {/* <Cards />
            <Footer /> */}
    </>
  );
}

export default App;
