import NewTask from './NewTask.jsx';

const Tasks = ({tasks,addTask, onDelete}) => {

    return (
        <section>
            <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
            <NewTask onAdd={addTask}/>

            {tasks.length === 0 && ( <p className='text-stone-800 my-4'>This project does not have any tasks yet..!</p>)}

            {tasks.length > 0 && ( <ul className='p-4 mt-8 rounded-md bg-stone-100'>
                {tasks.map((task) => <li key={task.id} className='flex justify-between my-4'>
                <span>{task.text}</span>
                <button onClick={() => onDelete(task.id)} className='px-4 py-1 rounded-md bg-red-800 text-stone-50 hover:text-stone-50 hover:bg-red-900'>X</button></li>)}
            </ul>)} 
        </section>
    );
};

export default Tasks;