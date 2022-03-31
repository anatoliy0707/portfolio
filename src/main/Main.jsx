import React from 'react'
import style from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'




export const Main = () => {

    return (
        <div id='main' className={style.mainBlock}>
            <Fade top>
                <div className={styleContainer.container}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am Anatoliy <span>Sukhanov</span></h1>
                        {/*<p>Front-end Developer</p>*/}
                        <ReactTypingEffect
                            className={style.typingEffect}
                            text={["Front-end Developer"]}
                            speed={"100"}
                        />
                    </div>
                    <Tilt className="Tilt" options={{max: 15}}>
                        <div className={style.photoContainer}>
                            <div className={style.photo}/>
                            <div className={style.border}/>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    )
}

