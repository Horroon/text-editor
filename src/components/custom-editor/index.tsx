import React, { ReactElement,useRef } from "react";
import styles from "./style.module.scss";
import {Header} from "./header/header";
import {Body} from "./body/body";
import {connect} from 'react-redux';
import {removeBold,removeItalic,removeLi,removeSpan} from "./utilities/index";

const CustomEditor:React.FC = (props):ReactElement=>{
    const textAreaRef = useRef(null)
    const {BoldText,Italic,ColorPallete,List,LinkTag,TextModifier:{text}, SelectedText:{selectedText,unselectedText}} = props

    const onChangeHandler = (e)=>{
        e.preventDefault()
        props.dispatch.TextModifier.update({text: e.target.textContent})
    }

    

    const onSelection = ()=>{
        var select = window.getSelection()?.toString();
        if(!BoldText.isBold && select){
            const selectionEnd = textAreaRef.current.innerHTML.lastIndexOf(select)
            const selectionStart = selectionEnd - select.length;
            props.dispatch.SelectedText.update({startIndex: selectionStart, endIndex: selectionEnd, selectedText: select})
            //textAreaRef.current.innerHTML = textAreaRef.current.innerHTML.replace(select,select.bold())
        }
    }

    const boldTextHandler = ()=>{
        if(selectedText){
                textAreaRef.current.innerHTML = textAreaRef.current.innerHTML.replace(selectedText, Italic.isItalic ? (selectedText.bold()).italics():selectedText.bold())
        }else{
            textAreaRef.current.innerHTML = Italic.isItalic ? (textAreaRef.current.innerHTML.bold()).italics(): textAreaRef.current.innerHTML.bold();
        }
    }

    const italicHandler = ()=>{
        if(selectedText){
            textAreaRef.current.innerHTML = textAreaRef.current.innerHTML.replace(selectedText,BoldText.isBold ? (selectedText.bold()).italics(): selectedText.italics())
        }else{
            textAreaRef.current.innerHTML = BoldText.isBold ? (textAreaRef.current.innerHTML.bold()).italics() : textAreaRef.current.innerHTML.italics(); 
        }
    }

    const dottedListHandler = (status)=>{
        if(status){
            if(textAreaRef.current.innerText || textAreaRef.current.children.length){
                if(textAreaRef.current.textContent){
                    const newNode = document.createElement("div")
                    newNode.innerHTML = "<li>"+ textAreaRef.current.innerText.split("\n")[0] +"</li>"
                    textAreaRef.current.insertBefore(newNode, textAreaRef.current.children[0]);
                    textAreaRef.current.firstChild.data = ""
                }
                const chlds = textAreaRef.current.children.length - 1
                for(let index = 1; index <= chlds; index++){
                        textAreaRef.current.children[index].innerHTML = "<li>"+ textAreaRef.current.children[index].innerHTML +"</li>";
                }
            }
        }else{
            textAreaRef.current.innerHTML = removeLi(textAreaRef.current.innerHTML)
        }
    }

    const LinkHandler = ()=>{
        if(selectedText && LinkTag.link){
            const content = BoldText.isBold ? (selectedText.bold()).italics(): selectedText.italics();
            textAreaRef.current.innerHTML = textAreaRef.current.innerHTML.replace(selectedText, `<a href=${LinkTag.link}>${content}</a>`)
            props.dispatch.LinkTag.remove()
        }
    }

    const ColorHandler = (color)=>{
        if(color){
            if(selectedText){
                textAreaRef.current.innerHTML = removeSpan(textAreaRef.current.innerHTML)
                const content = BoldText.isBold ? (selectedText.bold()).italics(): selectedText.italics();
                textAreaRef.current.innerHTML = textAreaRef.current.innerHTML.replace(selectedText,`<span style=color:${color}>${content}</a>`)
                props.dispatch.ColorPallete.update({isOpen: false})
            }else{
                textAreaRef.current.innerHTML =textAreaRef.current.innerHTML; 
            }
        }
        
    }
    const actionHandler = (action)=>{
        if(action.name==="BoldText"){
            if(action.payload.isBold){
                boldTextHandler()
                props.dispatch.TextModifier.update({text: textAreaRef.current.innerHTML})
            }else{
                props.dispatch.SelectedText.remove()
                textAreaRef.current.innerHTML = removeBold(textAreaRef.current.innerHTML)
            }
        }
        if(action.name==="Italic"){
            if(action.payload.isItalic){
                italicHandler()       
                props.dispatch.TextModifier.update({text: textAreaRef.current.innerHTML})
            }else{
                props.dispatch.SelectedText.remove()
                textAreaRef.current.innerHTML = removeItalic(textAreaRef.current.innerHTML)
            }
        }
        if(action.name==="List"){
            if(action.payload.isAble){
                dottedListHandler(true)
            }else{
                dottedListHandler(false)
            }
        }
        
        if(action.name==="ColorPallete"){
            if(action.payload.selectedColor){
                ColorHandler(action.payload.selectedColor)
            }
        }
        props.dispatch[`${action.name}`][`${action.method}`](action.payload)
    }
    return <div style={{width:"50%",margin: "auto"}}>
    <div className={styles.Editor}>
       <Header styles={styles} props={{actionHandler,...props,LinkHandler}} />
       <Body  styles={styles} props={{...props,onChangeHandler,textAreaRef,onSelection}}/>
    </div>
    </div>
}
const mapStateToProps = (state=>state)
export default connect(mapStateToProps)(CustomEditor)