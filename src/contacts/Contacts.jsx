import style from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Button} from "../common/button/Button";
import {Title} from "../common/title/Title";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';


export const Contacts = () => {
    return (
        <div id='contacts' className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Flip left>
                    <Title lable={"Contacts"}/>
                </Flip>
                <Fade bottom cascade>
                <form action="#" className={style.form}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"E-mail"}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder={"Your message"}/>
                    <Button type='submit' label={'SEND MESSAGE'}/>
                </form>
                </Fade>
            </div>
        </div>
    )
}