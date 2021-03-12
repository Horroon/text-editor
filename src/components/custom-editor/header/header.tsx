import React from "react";
import { store } from "../../../models";
import {ShowColorPalette} from "./colorSelect";

export const Header:React.FC = (props):React.ReactElement=>{
    const {styles, props:{BoldText,Italic,actionHandler,ColorPallete,List,LinkHandler,LinkTag}} = props
    const handler = (obj)=>actionHandler(obj);
    
    return  (
        <div className={styles.EditorHeader}>
            <div>
                <div>
                    <h3 title="Bold" className={`${BoldText.isBold && "highlight"}`} onClick={()=>actionHandler({name:"BoldText",method: "update", payload:{isBold: !BoldText.isBold}})}>B</h3>
                </div>
                <div>
                    <h3 title="𝘐𝘵𝘢𝘭𝘪𝘤" className={`${Italic.isItalic && "highlight"}`} onClick={()=>actionHandler({name:"Italic",method:"update", payload:{isItalic: !Italic.isItalic}})}>𝑰</h3>
                </div>
                <div onClick={(e)=>{
                    e.stopPropagation()
                    handler({name:"ColorPallete",method:"update", payload:{isOpen: !ColorPallete.isOpen}})
                    }}>
                    <h3 title="Color palette" className={`${ColorPallete.isOpen && "highlight"}`}>A</h3>
                    { ColorPallete.isOpen && ShowColorPalette(props) }
                    
                </div>
                <div onClick={(e)=>{
                    e.stopPropagation()
                    handler({name:"List",method:"update", payload:{isAble: !List.isAble}})}}>
                    <h3 title="List"  className={`${List.isAble && "highlight"}`}>L</h3>
                </div>
                <div>
                <h3 className="Link">
                    <input placeholder="Place URL" value={LinkTag.link} onChange={(e)=>actionHandler({name:"LinkTag",method:"update", payload:{link: e.target.value}})} />
                    <button onClick={LinkHandler}>Link</button>
                </h3>
            </div>
            </div>
        </div>
    )
}