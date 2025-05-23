import {useEffect, useRef} from "react"
import p5 from "p5"

const Circles2= ()=>{

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
            let circleSpeed = .1

            let centerYSpeed = 4



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


            let update = (mx: number , my: number )=>{
                p.clear()
                p.background(30)

            

                let i = 0
                let x = centerX  +  p.cos(i * circleSpeed) * 300
                let y = centerY +  p.sin(i * circleSpeed) * 300



                while(y>0){

                    const w = p.map(mx, 0, p.windowWidth, -200, 300)
                    const multiplier = 300 + p.map(mx, 0, p.windowWidth, -300, 50)
                    const h = p.map(my, 0, document.documentElement.scrollHeight, -2000, 2000)
                    p.ellipse(x,y, circleWidth+w, circleHeight+h)
                    i+=1
                    y = centerY +  p.sin(i * circleSpeed) * (multiplier)
                    x = centerX  +  p.cos(i * circleSpeed) * (multiplier)

                    centerY -= centerYSpeed

                }

                centerX = p.windowWidth/2
                centerY = document.documentElement.scrollHeight

            }


            p.draw = ()=>{

    if (p.mouseX !== prevMouseX || p.mouseY !== prevMouseY) {
        update(p.mouseX, p.mouseY)
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
    update(prevMouseX,prevMouseY)

}
}

//create p5 instance with our defd sketch logic and node to attach to
const myP5 = new p5(sketch, canvasRef.current!)
//cleanup p5 instance when the componentunmounts
return ()=>{myP5.remove()}
}, [])

return <div ref={canvasRef}></div>

}

export default Circles2
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
