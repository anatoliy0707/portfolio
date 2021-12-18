import style from './Progect.module.css'
import {Button} from "../common/button/Button";


export const Progect = (props) => {
    return (
        <div className={style.progect}>
            <div className={style.icon}>
                <Button lable={'Смотреть'}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}