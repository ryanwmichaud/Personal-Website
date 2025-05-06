import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Project from "../components/Project"
import Circles2 from "../backgrounds/Circles2"

const Home = ()=>{

    const chordFinderDescription = "Web App that finds every possible way to voice a group of chord tones on a string instrument within a maximum number of frets and generates a diagram visualization. Supports any tuning and number of strings. Custom user authentication and optional Google authentication."
    const harmonizerDescription = "MIDI plugin for a DAW which allows users to explore constant structure harmony. Harmonizes incoming MIDI notes in real time with all possible inversions of a user provided structure."
    const birdsQuizDescription = "Web app that allows a user to quiz themselves on a diverse set of bird calls and songs from a chosen set of species."



    return(
        <div className="background">

            <Circles2/>

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
                    thumbnailLink={"https://chords.ryanwmichaud.com"}
                    titleLink={"https://github.com/ryanwmichaud/TabV4"}></Project>

                    <Project title={"Bird Song Quiz"}
                    thumbnail={"/projects/Birds/bird-thumbnail.png"}
                    description={birdsQuizDescription}
                    technologies={"Node.js, React, Vite, FastAPI"}
                    thumbnailLink={"https://birds.ryanwmichaud.com"}
                    titleLink={"https://github.com/ryanwmichaud/Birds"}></Project>

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


export default Home
