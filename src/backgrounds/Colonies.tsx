import {useEffect, useRef} from "react"
import p5 from "p5"

const Colonies= ()=>{
    
    //use a ref so that it doesnt get rerendered by react
    // null right now but will be attached to the div later
    const canvasRef = useRef<HTMLDivElement>(null)

    //use effect with empty dependency array so it only runs once when this component mounts
    useEffect(()=>{

        const sketch = (p: p5) => {
            const speed: number = 1
            const colonies: Colony[] = []

            
            class Walker{
                x: number
                y: number
                d: number
                c: 0

                constructor(x: number, y:number, d:number){
                    this.x = x
                    this.y = y
                    this.d = d
                    this.c = 0
                }
                show = ()=> {
                    p.point(this.x, this.y)

                }
                step = ()=> {
                    let n: number = Math.random()
                    this.c += 1
                    if(n<.2){
                        this.x-=speed
                    }else if(n<.4){
                        this.x+=speed
                    }else if(n<.6){
                        this.y+=speed
                    }else if(n<.8){
                        this.y-=speed
                    }else{
                        if(this.d===0){
                            this.y-=1
                        }
                        if(this.d===1){
                            this.y-=1
                            this.x+=1
                        }
                        if(this.d===2){
                            this.x+=1
                        }
                        if(this.d===3){
                            this.x+=1
                            this.y+=2
                        }
                        if(this.d===4){
                            this.y+=1
                        }
                        if(this.d===5){
                            this.x-=1
                            this.y+=2
                        }
                        if(this.d===6){
                            this.x-=1
                        }
                        if(this.d===7){
                            this.x-=1
                            this.y-=1
                        }
                    }
                }
            }

            class Colony{
                walkers: Walker[] = []
                x: number
                y: number
                c: number = 0

                constructor(x: number, y:number){
                    this.x = x
                    this.y = y
                    this.walkers.push(new Walker(x,y,4))
                }
                update(){

                    this.c += 1
                    
                    //kill
                    for(let i=0; i<this.walkers.length; i++){
                        if(this.walkers[i].c > 100 ||
                            this.walkers[i].x > p.windowWidth+ 10 || 
                            this.walkers[i].x < -10 ||
                            this.walkers[i].y > document.documentElement.scrollHeight + 10 ||
                            this.walkers[i].y < -10
                        ){
                            this.walkers.splice(i,1)

                        }
                    }
                    //update live ones
                    const l: number  = this.walkers.length
                    for(let i=0; i<l; i++){
                        const w = this.walkers[i]
                        w.step()
                        w.show()
                        const n: number = Math.random()

                        if(n<0.05 && l<1000){
                            this.walkers.push(new Walker(w.x, w.y, Math.floor(Math.random()*8)))
                            this.walkers.push(new Walker(w.x, w.y, Math.floor(Math.random()*8)))
                            this.walkers.splice(i,1)
                        }
                    }

                }
            }


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

            p.mouseClicked = ()=>{
                colonies.push(new Colony(p.mouseX, p.mouseY))
            }
            p.draw = ()=>{
                
                const l:number = colonies.length
                
                for(let i=0; i<l; i++){
                    const colony = colonies[i]
                    if(colony.c<1000){
                        colony.update()
                    }
                }
            }




        
       
            p.windowResized=()=>{
                p.resizeCanvas(p.windowWidth, document.documentElement.scrollHeight)
                p.background(90)
                colonies.length = 0
            }
        }

        //create p5 instance with our defd sketch logic and node to attach to
        const myP5 = new p5(sketch, canvasRef.current!)
        //cleanup p5 instance when the componentunmounts
        return ()=>{myP5.remove()}
    }, [])

    return <div ref={canvasRef}></div>

}

export default Colonies