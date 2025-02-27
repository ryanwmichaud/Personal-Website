import {useEffect, useRef} from "react"
import p5 from "p5"

const HomeBackground= ()=>{
    
    //use a ref so that it doesnt get rerendered by react
    // null right now but will be attached to the div later
    const canvasRef = useRef<HTMLDivElement>(null)

    //use effect with empty dependency array so it only runs once when this component mounts
    useEffect(()=>{

        const sketch = (p: p5) => {
            let on: boolean = false
            let width: number = p.windowWidth*.75
            let height: number = p.windowWidth*.75
            
            let centerX = p.windowWidth/2
            let centerY = document.documentElement.scrollHeight
            let circleSpeed = 0.05

            let change: number = 10
            let autoChange: number = 0
            let centerYSpeed = .71

          

            let opacity: number = 50

            p.setup =()=>{
                const canvas = p.createCanvas(p.windowWidth, document.documentElement.scrollHeight)
                canvas.style("position", "absolute")
                canvas.style("top","0")
                canvas.style("left", "0")
                canvas.style("z-index", "-1")
                p.background(30)
                p.noFill()
                p.stroke(255,0,0, opacity)

                autoDraw()
                
                height = p.windowHeight*.5
                width = p.windowWidth*.5
                
            }
            let getRandRange = (min: number, max: number)=>{
                const minCeiled = Math.ceil(min);
                const maxFloored = Math.floor(max);
                return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
            }

            let autoDraw = ()=>{

                
            }
            p.draw = ()=>{

                let x = centerX  +  p.cos(p.frameCount * circleSpeed) * 300
                let y = centerY +  p.sin(p.frameCount * circleSpeed) * 300

                centerY -= centerYSpeed
             

                width += getRandRange(-1*autoChange, autoChange+1)
                height+= getRandRange(-1*autoChange, autoChange+1)
                
                p.ellipse(x,y, width, height)





                if(on){
                    p.ellipse(p.mouseX, p.mouseY, width, height)
                    width += Math.floor((Math.random() * (change*2+1))-change)
                    height += Math.floor((Math.random() * (change*2+1))-change)
                }

            }
            p.mouseClicked = ()=>{
                on = !on
            }

        
       
            p.windowResized=()=>{
                p.resizeCanvas(p.windowWidth, document.documentElement.scrollHeight)
                p.background(30)
 
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