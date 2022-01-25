import style from './Project.module.scss'
import {Button} from "../common/button/Button";


export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.icon} style={props.style}>
                <Button label={'VIEW'}/>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    )
}