import Button from "./Button";

const SideBar = ({startAddProject, projects, onSelectProject, selectedProjectID}) => {
    return (
        <aside className='w-1/3 px-8 py-16 bg-emerald-950 text-white md:w-72 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase md:text-xl text-yellow-50'>List of Projects</h2>
            <div>
                <Button onClick={startAddProject}>+ Add Project</Button>
            </div>

            <ul className="mt-8">
                {projects.map((project) =>{
                    let styleClass = "w-full text-left px-2 py-1 my-1 rounded-sm  hover:text-white";

                    if (project.id === selectedProjectID) {
                        styleClass += ' bg-stone-900 rounded-sm text-stone-200'
                    } else {
                        styleClass += ' text-stone-400'
                    }

                    return(
                        <li key={project.id}>
                            <button onClick={() => onSelectProject(project.id)} className={styleClass}>
                                {project.title}
                            </button>
                        </li>)}
                    )
                }  
            </ul>
        </aside>
    );
};

export default SideBar;