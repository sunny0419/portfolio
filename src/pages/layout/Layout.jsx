import React from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer,";
import Main from "../main/Main";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header />
                <Main>
                    <Outlet/>
                </Main>
            <Footer />
        </div>
    );
};

export default Layout;