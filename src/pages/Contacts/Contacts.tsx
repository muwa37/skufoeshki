import React from "react";
import classes from './Contacts.module.css'

const Contacts:React.FC = () => {
    return (
        <div
            className={classes.ContactsMain}
        >
            <div
                className={classes.ContactsTitles}
            >   
                <h1 
                    className={classes.ContactsTitle}
                >
                    Посмотреть код
                </h1>    
                <h1 
                    className={classes.ContactsTitle}
                >
                    Пообщаться
                </h1>         
            </div>
            <div
                className={classes.ContactsImages}
            >   
                <a href="https://github.com/muwa37">
                    <img 
                        className={classes.ContactsImg}
                        src={require("../../assets/images/icons/GitHub.png")} 
                        alt="git" 
                    />
                </a>
                <a href="https://t.me/qvsemv4atike">
                    <img 
                        className={classes.ContactsImg}
                        src={require ("../../assets/images/icons/Telegram.png")} 
                        alt="telegram" 
                    />
                </a>  
            </div>
        </div>
    )
}

export default Contacts;

