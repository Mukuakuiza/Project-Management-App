import { useRef } from "react";
import Input from "./Input.jsx";

const NewProject = ({addProject}) => {

    //using refs to collect/read the inputs instead of usesState
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        addProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className=" px-6 py-2 rounded-md bg-red-800 text-stone-50 hover:text-stone-50 hover:bg-red-900">Cancel</button></li>
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
    );
};

export default NewProject;