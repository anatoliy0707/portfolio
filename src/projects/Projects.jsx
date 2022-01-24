import style from './Projects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "../project/Project";
import {Title} from "../common/title/Title";
import socialImg from "../assets/images/social.jpg"
import todoListImg from "../assets/images/todolist.jpg"


export const Projects = () => {

    const social = {
        backgroundImage: 'url(' + socialImg + ')',
    };

    const todoList = {
        backgroundImage: 'url(' + todoListImg + ')',
    };

    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title lable={"Projects"}/>
                <div className={style.projects}>
                    <Project title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi!'}
                             style={todoList}/>
                    <Project title={'Social Network'}
                             description={'Lorem ipsum dolor sit Corporis fuga, nisicv weewr wefwefwfw!'}
                             style={social}/>
                </div>
            </div>
        </div>
    )
}