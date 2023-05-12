import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Header from "src/components/Header";
import HomePage from "src/components/HomePage";
import AllProducts from "src/components/AllProducts";
import Product from "src/components/Product";
import ContactUs from "src/components/ContactUs";
import Cart from "src/components/Cart";
import ErrorPage from "src/components/ErrorPage";
import { MainWrapper } from "./style";


const PrivateWrapper = (Wrapper, data= {}) => {
    return (
      <>
        <div>
          <Header />
          <MainWrapper className="main-wrapper">
            <Wrapper />
          </MainWrapper>
        </div>
      </>
    );
  };

const allRoutes = [
  {
    path: "/",
    element: PrivateWrapper(HomePage),
  },
  {
    path: "/all-products",
    element: PrivateWrapper(AllProducts),
  },
  {
    path: "/product/:id",
    element: PrivateWrapper(Product),
  },
  {
    path: "/contact-us",
    element: PrivateWrapper(ContactUs),
  },
  {
    path: "/cart",
    element: PrivateWrapper(Cart),
  },
  {
    path: "*",
    element: PrivateWrapper(ErrorPage),
  },

];

const router = createBrowserRouter(
    allRoutes.map((route) => {
      return route;
    }),
  );
  
  export default router;