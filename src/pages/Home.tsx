import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Project from "../components/Project"
import Circles2 from "../backgrounds/Circles2"

const Home = ()=>{

    const chordFinderDescription = 
    `Find every possible way to voice a group of chord tones 
    on a string instrument within a maximum number of frets and 
    see the results visualized. Supports any tuning and number of 
    strings. Create an account or log in with Google to save your 
    preferences.`
    const typingDescription = 
    `Play your computer keyboard like a fretted string instrument 
    in real time. Adjust the synth paramaters as well as the 
    tuning of each row.`
    const harmonizerDescription = 
    `Explore constant structure harmony one note at a time. 
    This MIDI plugin harmonizes incoming MIDI notes in real 
    time with all possible inversions of a user provided structure.`
   /* 
   const birdsQuizDescription = 
    `Learn to identify not just the common calls but the voices of 
    your favorite common bird species. Quiz yourself on a diverse 
    set of bird calls and songs from a chosen set of species.`
    */



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

                    <Project title={"Fret Synth"}
                    thumbnail={"/projects/Typing/typing-thumb.png"}
                    description={typingDescription}
                    technologies={"Node.js, Vite"}
                    thumbnailLink={"https://typing.ryanwmichaud.com"}
                    titleLink={"https://github.com/ryanwmichaud/Typing"}></Project>


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
