import {useEffect, useRef} from "react"
import p5 from "p5"

const Circles= ()=>{
    
    //use a ref so that it doesnt get rerendered by react
    // null right now but will be attached to the div later
    const canvasRef = useRef<HTMLDivElement>(null)

    //use effect with empty dependency array so it only runs once when this component mounts
    useEffect(()=>{

        const sketch = (p: p5) => {
            let width: number = p.windowWidth*.75
            let height: number = p.windowWidth*.75
            
            let centerX = p.windowWidth/2
            let centerY = document.documentElement.scrollHeight
            let circleSpeed = .1

            let autoChange: number = 0.01
            let centerYSpeed = 1

          

            let opacity: number = 50

            p.setup =()=>{
                p.frameRate(15)
                const canvas = p.createCanvas(p.windowWidth, document.documentElement.scrollHeight)
                canvas.style("position", "absolute")
                canvas.style("top","0")
                canvas.style("left", "0")
                canvas.style("z-index", "-1")
                p.background(30)
                p.noFill()
                p.stroke(255,0,0, opacity)

            
                
                height = p.windowHeight*.5
                width = p.windowWidth*.5
                
                
            }

         

            let tx=0
            let ty = 1000

            let update = ()=>{
                p.clear()
                p.background(30)

                let i = 0
                let x = centerX  +  p.cos(i * circleSpeed) * 300
                let y = centerY +  p.sin(i * circleSpeed) * 300

                let nx = p.noise(tx)
                let ny = p.noise(ty)

                while(y>0){
                    i+=1
                    y = centerY +  p.sin(i * circleSpeed) * 300
                    x = centerX  +  p.cos(i * circleSpeed) * 300


                    centerY -= centerYSpeed
                

                    width += p.map(nx, 0, 1, -autoChange, autoChange)
                    height+= p.map(ny, 0,1, -autoChange, autoChange)
                    
                    p.ellipse(x,y, width, height)
                }

                centerX = p.windowWidth/2
                centerY = document.documentElement.scrollHeight

                tx+=0.01
                ty+=0.01
            }
       

            p.draw = ()=>{
                update()

//                if(on){
//                    p.ellipse(p.mouseX, p.mouseY, width, height)
//                   width += Math.floor((Math.random() * (change*2+1))-change)
//                    height += Math.floor((Math.random() * (change*2+1))-change)
//                }
            }
            p.mouseClicked = ()=>{
                //on = !on
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