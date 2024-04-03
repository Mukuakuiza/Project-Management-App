import {forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const Model = forwardRef( function Modal ({children, btnCaption}, ref) {

    const dialog = useRef(); 

    //to expose the function that can be called outside of this component
    //function we need to useImperativeHandle
    useImperativeHandle(ref, ()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

    return (
        createPortal(
            <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md ">
                {children}
                <form method="dialog" className="mt-4 text-right">
                   <Button>{btnCaption}</Button> 
                </form>
            </dialog>, document.getElementById('modal-root'))
    );
});

export default Model;