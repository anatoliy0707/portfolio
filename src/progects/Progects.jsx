import style from './Progects.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Skill} from "../skill/Skill";
import {Progect} from "../progect/Progect";

export const Progects = () => {
    return (
        <div className={style.progectBlock}>
            <div className={`${styleContainer.container} ${style.progectsContainer}`}>
                <h2 className={style.title}>Progects</h2>
                <div className={style.progects}>
                    <Progect title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi!'}/>
                    <Progect title={'Soceal Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis fuga, nisi!'}/>
                </div>
            </div>
        </div>
    )
}