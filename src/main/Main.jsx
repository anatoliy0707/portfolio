import style from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Anatoliy Sukhanov</h1>
                    <p>React Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    )
}