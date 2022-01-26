import style from './Button.module.scss'

export const Button = (props) => {
    return (
        <div className={style.btn}>
            {props.label}
        </div>
    )
}