// import Main from "./Component/Main";
import React, { useState } from "react";
import Home from "./Component/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FoodContext, FoodFunc } from "./Component/FoodContext";
import Quote from "./Component/Quote";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import FoodDetails from "./Component/FoodDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodPage from "./Component/FoodPage";
function App() {
//     const router = createBrowserRouter([
//         {

//         path:"/",
//         element: <Home/>,
//       },{
//         path:"/quote",
//         element:<Quote/>
//       },
//   {
//     path:"*",
//     errorElement: <h1>Error element screen for not found</h1>,
//   },
//   ]);
  return (
    <>
      {/* <Header/> 
      <RouterProvider router={router} >
    </RouterProvider>
      <Footer/> */}

      <FoodFunc>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/food" element={<FoodPage />} />

            <Route
              path="/foodDetail/:idMeal"
              element={<FoodDetails/>}
            />
         
          </Routes>
          <Footer />
        </Router>
      </FoodFunc>


    </>
  );
}

export default App;
