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
                    Посмотреть код автора
                </h1>    
                <h1 
                    className={classes.ContactsTitle}
                >
                    Пообщаться с автором
                </h1>         
            </div>
            <div
                className={classes.ContactsImages}
            >   
                <img 
                    className={classes.ContactsImg}
                    src="" 
                    alt="git" 
                />  
                <img 
                    className={classes.ContactsImg}
                    src="" 
                    alt="telegram" 
                />
            </div>
        </div>
    )
}

export default Contacts;

