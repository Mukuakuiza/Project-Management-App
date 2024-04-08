import React from 'react';

const NewTask = () => {
    return (
        <div className='flex items-center gap-4'>
            <input type="text"  className='w-64 px-2 py-1 rounded-sm bg-stone-200 outline-0 placeholder-stone-400' placeholder='Enter Task'/>
            <button className='px-6 py-2 rounded-md bg-emerald-950 text-stone-50 hover:bg-stone-950'>Add Task</button>
        </div>
    );
};

export default NewTask;