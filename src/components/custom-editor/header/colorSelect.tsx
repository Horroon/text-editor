import React from "react";

const Colors = ["gold","green","yellow","red","pink"]

export const ShowColorPalette:React.FC = (props):React.ReactElement=>{
    const {props:{actionHandler,ColorPallete}} = props
    return (<div className="colorPalette">
                <div className="colorHead">
                    <h5>Select Color</h5>
                    <i onClick={()=>actionHandler({name:"ColorPallete",method:"update", payload:{isOpen: false}})}>&#10006;</i>
                </div>
                <div className="colors">
                    {
                        Colors.map(color=><div 
                                            className="colordv" 
                                            style={{background: color, color}} onClick={(e)=>{
                                                        e.stopPropagation()
                                                        actionHandler({name:"ColorPallete",method:"update", payload:{selectedColor: color}})}}>cl</div>
                                )
                    }
                    
                </div>
            </div>)
}

