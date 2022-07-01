import React from "react" 
import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer" 
import Buttons from "./components/Buttons" 
import './style.css' 

export default function App(){
  return (
    <div className="container">
        <Header/>
        <Buttons/>
        <Main/>
        <Footer/>
    </div>
)
}