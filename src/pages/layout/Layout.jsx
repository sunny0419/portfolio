import React from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {Outlet} from "react-router-dom";
import Wrapper from "../../components/layout/Wrapper";

const Layout = () => {
    return (
        <div>
            <Header />
                <Wrapper>
                    <Outlet/>
                </Wrapper>
            <Footer />
        </div>
    );
};

export default Layout;