import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Colonies from "../backgrounds/Colonies"
import Project from "../components/Project"

const Home = ()=>{

    const chordFinderDescription = "Web App that finds every possible way to voice a group of chord tones on a string instrument within a maximum number of frets and generates a diagram visualization. Supports any tuning and number of strings. Custom user authentication and optional Google authentication."
    const harmonizerDescription = "MIDI plugin for a DAW which allows users to explore constant structure harmony. Harmonizes incoming MIDI notes in real time with all possible inversions of a user provided structure."



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

                </div>
                <div className="projects-list">

                    <Project title={"Chord Finder"} 
                    thumbnail={"/projects/ChordFinder/Cmaj9.png"}  
                    description={chordFinderDescription} 
                    technologies={"Node.js, React, Express, MYSQL"} 
                    thumbnailLink={"http://chords.ryanwmichaud.com"}
                    titleLink={"https://github.com/ryanwmichaud"}></Project>
                    
                    <Project title={"Harmonizer Plugin"} 
                    thumbnail={"/projects/Harmonizer/Harmonizer Demo.png"}  
                    description={harmonizerDescription} 
                    technologies={"C++, JUCE Framework"} 
                    thumbnailLink={"https://github.com/ryanwmichaud/HarmonizerPlugin"}
                    titleLink={"https://github.com/ryanwmichaud/HarmonizerPlugin"}></Project>
                    
                </div>

       
            </div>

                
         
            <Footer></Footer>

        </div>
    )
}


export default Home;
