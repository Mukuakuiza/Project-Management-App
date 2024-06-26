import { useRef } from "react";
import Input from "./Input.jsx";
import Model from "./Model.jsx";

const NewProject = ({addProject, onCancel}) => {

    //using refs to collect/read the inputs instead of usesState
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //validation 
        if(enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' || 
            enteredDueDate.trim() ==='' ){
            
            //Show Error model
            modal.current.open();
            return;
        }

        addProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <Model ref={modal} btnCaption='Close'>
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-500 mb-4'>Oops... Looks like you forgot to enter a value.</p>
                <p className='text-stone-500 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Model>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={onCancel} className=" px-6 py-2 rounded-md bg-red-800 text-stone-50 hover:text-stone-50 hover:bg-red-900">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-emerald-950 text-stone-50 hover:bg-stone-950">
                    Save
                    </button></li>
                </menu>
                <div>
                    <Input type='text' ref={title} label='Title'/>
                    <Input ref={description} label='Description' textarea={true}/>
                    <Input type='date' ref={dueDate} label='Due Date'/>
                </div>
            </div>
        </>     
    );
};

export default NewProject;