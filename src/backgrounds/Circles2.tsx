import {useEffect, useRef} from "react"
import p5 from "p5"

const Circles= ()=>{
    
    //use a ref so that it doesnt get rerendered by react
    // null right now but will be attached to the div later
    const canvasRef = useRef<HTMLDivElement>(null)

    //use effect with empty dependency array so it only runs once when this component mounts
    useEffect(()=>{

        const sketch = (p: p5) => {
            let circleWidth: number = p.windowWidth*.75
            let circleHeight: number = p.windowWidth*.75

            let xRange= 500
            let yRange = 1100
            
            let centerX = p.windowWidth/2
            let centerY = document.documentElement.scrollHeight
            let circleSpeed = .1

            let centerYSpeed = 1

          

            let opacity: number = 50
            let prevMouseX = p.mouseX;
            let prevMouseY = p.mouseY;

            p.setup =()=>{
                p.frameRate(40)
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

            let update = (mx: number , my: number )=>{
                p.clear()
                p.background(30)

                let i = 0
                let x = centerX  +  p.cos(i * circleSpeed) * 300
                let y = centerY +  p.sin(i * circleSpeed) * 300
            


                while(y>0){
                    p.ellipse(x,y, circleWidth+mx, circleHeight+my)
                    i+=1
                    y = centerY +  p.sin(i * circleSpeed) * 300
                    x = centerX  +  p.cos(i * circleSpeed) * 300

                    centerY -= centerYSpeed
                    

                }

                centerX = p.windowWidth/2
                centerY = document.documentElement.scrollHeight

                tx+=0.01
                ty+=0.01
            }
       

            p.draw = ()=>{

                if (p.mouseX !== prevMouseX || p.mouseY !== prevMouseY) {
                    const mx = p.map(p.mouseX, 0, p.windowWidth, -1*xRange, xRange)
                    const my = p.map(p.mouseY, 0, document.documentElement.scrollHeight, -1*yRange, yRange)
                    console.log(mx,my)
                    update(mx, my)
                    prevMouseX = p.mouseX
                    prevMouseY = p.mouseY
                  }
                  else{
                    console.log("same");
                    
                  }



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