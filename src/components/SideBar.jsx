import Button from "./Button";

const SideBar = ({startAddProject, projects}) => {
    return (
        <aside className='w-1/3 px-8 py-16 bg-emerald-950 text-white md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-yellow-50'>List of Projects</h2>
            <div>
                <Button onClick={startAddProject}>+ Add Project</Button>
            </div>

            <ul className="mt-8">
                {projects.map(project => <li key={project.id}>
                    <button className="w-full text-left px-2 py-1 my-1 text-stone-400 hover:text-white">
                        {project.title}
                    </button>
                </li>)}
            </ul>
        </aside>
    );
};

export default SideBar;