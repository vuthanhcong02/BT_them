import React from "react";
import { Header } from "./Header";
import { HeaderBt } from "./HeaderBt";
import Content from "./ContentNew";
import Page_number from './Page_number'
import { Footer } from "./Footer";


export default function Tintuc(){
    return(
        <div>
            <Header/>
            <HeaderBt/>
            <Content/>
            <Page_number/>
            <Footer/>
        </div>
    )
}