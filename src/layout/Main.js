import React from 'react';
import { Outlet } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RightSideBar from '../components/RightSideBar/RightSideBar';

const Main = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Header></Header>
            <div className=''>
            <Outlet></Outlet>
            </div>
            <div className=''>
                {/* <Cart></Cart> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;