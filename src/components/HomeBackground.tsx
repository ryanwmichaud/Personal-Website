import {useEffect, useRef} from "react"
import p5 from "p5"

const HomeBackground= ()=>{
    
    //use a ref so that it doesnt get rerendered by react
    // null right now but will be attached to the div later
    const canvasRef = useRef<HTMLDivElement>(null)

    //use effect with empty dependency array so it only runs once when this component mounts
    useEffect(()=>{

        const sketch = (p: p5) => {
            p.setup =()=>{
                const canvas = p.createCanvas(p.windowWidth, document.documentElement.scrollHeight)
                canvas.style("position", "absolute")
                canvas.style("top","0")
                canvas.style("left", "0")
                canvas.style("z-index", "-1")
                p.background(30)
            }
            p.draw = ()=>{
                p.noFill()
                p.stroke(255,0,0, 50)
                p.ellipse(p.mouseX,p.mouseY, 50, 50)
            }
            p.windowResized=()=>{
                p.resizeCanvas(p.windowWidth, document.documentElement.scrollHeight)
                
            }
        }

        //create p5 instance with our defd sketch logic and node to attach to
        const myP5 = new p5(sketch, canvasRef.current!)
        //cleanup p5 instance when the componentunmounts
        return ()=>{myP5.remove()}
    }, [])

    return <div ref={canvasRef}></div>

}

export default HomeBackground 
