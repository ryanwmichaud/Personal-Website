import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const PageNotFound = ()=>{

    return(
        <div>
            <Navbar></Navbar>
            <div className="page">Page Not Found</div>
            <Footer></Footer>

        </div>
    )
}


export default PageNotFound;