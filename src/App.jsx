import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {

  //managing object as a state
  //the selectedProjectId will either store the ID of the project
  //or null when we want to add new project or undefined when we won't add any project
  //or select any project
  const [projectsState, setProjectsState] = useState({
    selectProjectId: undefined,
    projects:[]
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

  let renderContent;
  
  if (projectsState.selectProjectId === null) {
      renderContent = <NewProject  addProject={handleAddProjectInputs} onCancel={handleCancelAddProject}/>
  } else if(projectsState.selectProjectId === undefined){
      renderContent =  <NoProjectSelected startAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar startAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {renderContent}
    </main>
  );
}

export default App;
