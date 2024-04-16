import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SideBar from "./components/SideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  //managing object as a state
  //the selectedProjectId will either store the ID of the project
  //or null when we want to add new project or undefined when we won't add any project
  //or select any project
  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects:[],
    tasks: [],
  });

  //handle the add project when it is null
  function handleStartAddProject(){
    setProjectsState(prevState=> {
        return{
          ...prevState,
          selectProjectId: null,
        };
    });
  } 


  //finishes the adding project, entered the project
  function handleAddProjectInputs(projectData){
    setProjectsState(prevState =>{
      const projectID = Math.random();
      const newProject = {
        ...projectData,
          id: projectData
      }

        return{
          ...prevState,
          selectProjectId: undefined,
          projects: [...prevState.projects, newProject]
        }
    })
  }

  //function cancel project 
  function handleCancelAddProject(){
     setProjectsState(prevState=> {
        return{
          ...prevState,
          selectProjectId: undefined,
        };
    });
  }

  function handleSelectProject(id){
    setProjectsState(prevState=> {
        return{
          ...prevState,
          selectProjectId: id,
        };
    });
  }

  function handleDeleteProject(){
    setProjectsState(prevState=> {
        return{
          ...prevState,
          selectProjectId: undefined,
          //if the ID does not much means that it isn't the Id that has to be deleted,
          // therefore return true and keep the item
          // In case they ID much then the item has to be deleted 
          projects: prevState.projects.filter((project)=> project.id !== prevState.selectProjectId)
        };
    });
  } 

  // add a task to the list 
  function handleAddTask(text){
    setProjectsState(prevState =>{
      const taskID = Math.random();
      const newTask = {
        text: text,
        projectID: prevState.selectProjectId,
        id: taskID
      }

        return{
          ...prevState,
          tasks: [newTask, ...prevState.tasks]
        }
    })
  }

  function handleDeleteTask(){

  }

  //finding the selected project 
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectProjectId)
  
  let renderContent = <SelectedProject project={selectedProject} 
  deleteProject={handleDeleteProject} addTask={handleAddTask} 
  onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;
  
  if (projectsState.selectProjectId === null) {
      renderContent = <NewProject  addProject={handleAddProjectInputs} onCancel={handleCancelAddProject}/>
  } else if(projectsState.selectProjectId === undefined){
      renderContent =  <NoProjectSelected startAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar startAddProject={handleStartAddProject} 
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      />
      {renderContent}
    </main>
  );
}

export default App;
