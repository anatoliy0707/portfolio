import style from './Skills.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "../skill/Skill";
import {Title} from "../common/title/Title";
import jsImg from "../assets/images/java-script.png";
import htmlImg from "../assets/images/html-5.png";
import reactImg from "../assets/images/atomic.png";

export const Skills = () => {

    const js = {
        backgroundImage: 'url(' + jsImg + ')',
    };

    const html = {
        backgroundImage: 'url(' + htmlImg + ')',
    };

    const react = {
        backgroundImage: 'url(' + reactImg + ')',
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title lable={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={'JavaScript'}
                           style={js}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi! Accusantium deserunt doloremque enim eum'}/>
                    <Skill title={'HTML/CSS'}
                           style={html}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi! Accusantium deserunt doloremque enim eum'}/>
                    <Skill title={'React'}
                           style={react}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi! Accusantium deserunt doloremque enim eum'}/>
                </div>
            </div>
        </div>
    )
}