import style from './Title.module.css'

export const Title = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.lable}</h2>
        </div>
    )
}