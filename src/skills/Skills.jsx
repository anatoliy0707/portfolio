import style from './Skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "../skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi! Accusantium deserunt doloremque enim eum'}/>
                    <Skill title={'HTML/CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi! Accusantium deserunt doloremque enim eum'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi! Accusantium deserunt doloremque enim eum'}/>
                </div>
            </div>
        </div>
    )
}