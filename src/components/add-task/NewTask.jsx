import {useState} from 'react';

const NewTask = ({onAdd}) => {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(e){
        setEnteredTask(e.target.value);
    }

    //forward the entered value to the app 
    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask)
        setEnteredTask('');

      
    }

//   console.log(enteredTask)
    return (
        <div className='flex items-center gap-4'>
            <input onChange={handleChange} value={enteredTask} type="text"  className='w-64 px-2 py-1 rounded-sm bg-stone-200 outline-0 placeholder-stone-400' placeholder='Enter Task'/>
            <button onClick={handleClick} className='px-6 py-2 rounded-md bg-emerald-950 text-stone-50 hover:bg-stone-950'>Add Task</button>
        </div>
    );
};

export default NewTask