import React from "react";

export const Body:React.FC = (props):React.ReactElement=>{
    const {styles,props:{onChangeHandler,onSelection,textAreaRef,TextModifier:{text}}}= props
    return  (<div className={styles.Editorbody}>
        <div style={{minHeight: 100}} className="textareadv"  contentEditable={true} onInput={onChangeHandler} ref={textAreaRef} onMouseUp={onSelection}/> 
    </div>)
}