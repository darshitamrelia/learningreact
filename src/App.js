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
import { createContext, useState } from "react";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Support from "./components/Pages/Support";
import Courses from "./components/Pages/Courses";
import Nav from "./components/Nav";
import CourseDetail from "./components/Pages/CourseDetail";
import Coctail from "./components/Pages/Coctail";
import CocktailDetail from "./components/Pages/CocktailDetail";
import Profile from "./Profile";
import { courseList } from "./courseList";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Pages/Login";

export const userDetails = createContext();
export const AppDetails = createContext();

function App() {
  const [userName, setUserName] = useState("Darshit");
  const [totalAmount, setAmount] = useState(100);
  const [login, setLogin] = useState(getLocalStorage());
  const [cart, setCart] = useState([]);
  const [courseListData, setCourseListData] = useState(courseList);

  function getLocalStorage() {
    const isLogin = localStorage.getItem("login");
    if (isLogin) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <userDetails.Provider value={{ userName, totalAmount }}>
        <AppDetails.Provider
          value={{
            login,
            cart,
            setCart,
            setLogin,
            courseListData,
            setCourseListData,
          }}
        >
          <Nav />
          <Profile />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Support" element={<Support />} />
              <Route
                path="/Courses"
                element={
                  <PrivateRoute>
                    <Courses />
                  </PrivateRoute>
                }
              />
              <Route
                path="/course/:id"
                element={
                  <PrivateRoute>
                    <CourseDetail />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Coctail"
                element={
                  <PrivateRoute>
                    <Coctail />
                  </PrivateRoute>
                }
              />
              <Route path="/Coctail/:id" element={<CocktailDetail />} />
            </Routes>
          </div>
        </AppDetails.Provider>
      </userDetails.Provider>
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
