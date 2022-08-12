import CardProject from "../CardProject";
import Project1 from '../../assets/projects/example.png'
import { loadConfigFromFile } from "vite";

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <div className="projects-wrapper">
                <h2 className="projects-title">Projetos</h2>
            </div>

            <div>
                <CardProject
                    cardImage={Project1}
                    cardText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                    cardLink={"#"}
                />
            </div>
        </section>
    );
};

export default ProjectsContainer;