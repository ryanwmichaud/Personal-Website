import {useEffect, useRef} from "react"
import p5 from "p5"

const Gauss = ()=>{
    
    //use a ref so that it doesnt get rerendered by react
    // null right now but will be attached to the div later
    const canvasRef = useRef<HTMLDivElement>(null)

    //use effect with empty dependency array so it only runs once when this component mounts
    useEffect(()=>{

        const sketch = (p: p5) => {
            p.setup =()=>{
                p.frameRate(20)
                
                const canvas = p.createCanvas(p.windowWidth, document.documentElement.scrollHeight)
                canvas.style("position", "absolute")
                canvas.style("top","0")
                canvas.style("left", "0")
                canvas.style("z-index", "-1")
                p.background(90)
/*
                for(let i=0; i<10; i+=1){
                    const x: number = Math.floor(Math.random()*p.windowWidth)
                    const y: number = Math.floor(Math.random()*document.documentElement.scrollHeight)
                    colonies.push(new Colony(x, y))
                }
*/
                p.stroke(0, 0, 0, 50)
            }

         

       
            p.draw = ()=>{
                const x = p.randomGaussian(p.windowWidth/2, 60)
                p.randomGaussian
                p.noStroke()
                p.fill(0, 10)
                p.circle(x, document.documentElement.scrollHeight/2, 16)
            }
            p.mouseClicked = ()=>{
            }

        
       
            p.windowResized=()=>{
                p.resizeCanvas(p.windowWidth, document.documentElement.scrollHeight)
                p.background(90)
 
            }
        }

        //create p5 instance with our defd sketch logic and node to attach to
        const myP5 = new p5(sketch, canvasRef.current!)
        //cleanup p5 instance when the componentunmounts
        return ()=>{myP5.remove()}
    }, [])

    return <div ref={canvasRef}></div>

}

export default Gauss
/*

while(y<document.documentElement.scrollHeight){
                    p.ellipse(x, y, width, height)
                    width += getRandRange(-1*autoChange,autoChange+1)
                    height += getRandRange(-1*autoChange,autoChange+1)
                    y += yVelocity
                    x += getRandRange(-1*xVelocity,xVelocity+1)

                }
                y = 0
                
                
                */