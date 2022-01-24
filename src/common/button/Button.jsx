import style from './Button.module.css'

export const Button = (props) => {
    return (
        <div className={style.btn}>
            {props.label}
        </div>
    )
}