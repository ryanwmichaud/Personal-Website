import {useEffect, useRef} from "react"
import p5 from "p5"

const Circles= ()=>{
    
    //use a ref so that it doesnt get rerendered by react
    // null right now but will be attached to the div later
    const canvasRef = useRef<HTMLDivElement>(null)

    //use effect with empty dependency array so it only runs once when this component mounts
    useEffect(()=>{

        const sketch = (p: p5) => {
            let circleWidth: number = p.windowWidth*.5
            let circleHeight: number = p.windowWidth*.5
            
            let centerX = p.windowWidth/2
            let centerY = document.documentElement.scrollHeight
            let trigRate = 100
            let trigSize = 300
            let centerYSpeed = 3

            let autoChangeX: number = 0.005
            let autoChangeY: number = 0.05


            let opacity: number = 100

            p.setup =()=>{
                p.frameRate(10)
                const canvas = p.createCanvas(p.windowWidth, document.documentElement.scrollHeight)
                canvas.style("position", "absolute")
                canvas.style("top","0")
                canvas.style("left", "0")
                canvas.style("z-index", "-1")
                p.background(30)
                p.noFill()
                p.stroke(255,0,0, opacity)
                
            }

         

            let tx=0
            let ty = 1000

            let update = ()=>{
                p.clear()
                p.background(30)

                let i = 0
                let x = centerX  +  p.cos(i * trigRate) * trigSize
                let y = centerY +  p.sin(i * trigRate) * trigSize

                let nx = p.noise(tx)
                let ny = p.noise(ty)

                while(y>0){


                    p.ellipse(x,y, circleWidth, circleHeight)

                    i+=1
                    y = centerY +  p.sin(i * trigRate) * trigSize
                    x = centerX  +  p.cos(i * trigRate) * trigSize

                    centerY -= centerYSpeed
                

                    circleWidth += p.map(nx, 0, 1, -autoChangeX, autoChangeX)
                    circleHeight+= p.map(ny, 0,1, -autoChangeY, autoChangeY)
                    
                }

                centerX = p.windowWidth/2
                centerY = document.documentElement.scrollHeight

                tx+=0.0001
                ty+=0.0001
            }
       

            p.draw = ()=>{
                update()

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

export default Circles 
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