import Button from "./Button";

const SideBar = ({startAddProject}) => {
    return (
        <aside className='w-1/3 px-8 py-16 bg-emerald-950 text-white md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-yellow-50'>List of Projects</h2>
            <div>
                <Button onClick={startAddProject}>+ Add Project</Button>
            </div>

            <ul>
            </ul>
        </aside>
    );
};

export default SideBar;