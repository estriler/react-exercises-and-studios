import data from "./../data.json";
import { useState } from "react";

export default function MyProjects(){
    const [index, setIndex] = useState(0);

    let projects = data.projects;
    let project = projects[index];

    function handleClick() {
        if (index < data.projects.length-1){
            setIndex(index +1);
        }else{
            setIndex(0);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h2>{project.title}</h2>
            <img src={project.img}></img>
            <h4>Length: {project.length} Views: {project.views}</h4>
        </div>
    )
}