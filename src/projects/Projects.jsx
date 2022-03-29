import style from './Projects.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Project} from "../project/Project";
import {Title} from "../common/title/Title";
import socialImg from "../assets/images/social.jpg"
import todoListImg from "../assets/images/todolist.jpg"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


export const Projects = () => {

    const social = {
        backgroundImage: 'url(' + socialImg + ')',
    };

    const todoList = {
        backgroundImage: 'url(' + todoListImg + ')',
    };

    return (
        <div id='project' className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Flip right>
                    <Title lable={"Projects"}/>
                </Flip>
                <Fade bottom cascade>
                    <div className={style.projects}>
                        <Project title={'Todolist'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi!'}
                                 style={todoList}/>
                        <Project title={'Social Network'}
                                 description={'Lorem ipsum dolor sit Corporis fuga, nisicv weewr wefwefwfw!'}
                                 style={social}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}