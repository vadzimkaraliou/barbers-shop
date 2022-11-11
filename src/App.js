import React from 'react';
import './App.scss';
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import BrandPage from "./components/BrandPage/BrandPage";
import Cart from "./components/Cart/Cart";
import OrderPage from "./components/OrderPage/OrderPage";
import Payment from "./components/Payment/Payment";
import Done from "./components/Done/Done";
import Search from "./components/Search/Search";

import {
    BrowserRouter,
    Route,
    Routes,
    Outlet
} from "react-router-dom";
import {usingBrands} from "./components/Dashboard/Dashboard";

const Main = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
        )
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Main />} >
                        <Route path='/' element={<Dashboard />} />
                        {usingBrands.map((brand, index) => {
                            return <Route key={index} path={brand} element={<BrandPage brand={brand} />} />
                        })}
                        <Route path='/SEARCH' element={<Search />} />
                        <Route path='/CART' element={<Cart />} />
                        <Route path='/ORDER' element={<OrderPage />} />
                        <Route path='/PAYMENT' element={<Payment />} />
                    </Route>
                    <Route path='/DONE' element={<Done />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
