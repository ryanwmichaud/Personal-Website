import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Colonies from "../backgrounds/Colonies"


const Home = ()=>{





    return(
        <div className="background">
            
            <Colonies/>
            
            <Navbar></Navbar>
            <div className="page" > 

                <p className="page-title">Ryan Michaud</p>
                <div className="home-greeting">
                    <p> My name is Ryan Michaud and I'm a software developer based in Ann Arbor, MI. Check out some of my projects below</p>
                </div>
                <div className="home-body">
                    <h3 className="home-subtitle">Thing</h3>
                    <p className="home-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <h3 className="home-subtitle">Thing</h3>
                    <p className="home-description">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <h3 className="home-subtitle">Thing</h3>
                    <p className="home-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>


       
            </div>

                
         
            <Footer></Footer>

        </div>
    )
}


export default Home;
