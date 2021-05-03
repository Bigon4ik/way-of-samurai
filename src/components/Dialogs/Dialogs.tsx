import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {DiologType, MessageType} from '../../redux/Dialogs-Reducer';
import {Redirect} from 'react-router-dom';

type DiologPropsType={
    dialogs: Array<DiologType>
    messages: Array<MessageType>
    messageForNewMessage: string
    addMessage:()=> void
    newTextChangeHandler:(text:string)=> void
    // isAuth:boolean
}

const Dialogs = (props:DiologPropsType) => {
    let addMessage = () => {
        // let text = newMessageElement.current?.value
        // alert(text)
        props.addMessage()
    }
    const newTextChangeHandlerMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.changeNewTextCallback(e.currentTarget.value)
        props.newTextChangeHandler(e.currentTarget.value)
    }


    let dialogsElements =props.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)


    let messageElements = props.messages
        .map(m => <Message message={m.message} key={m.message}/>)

    // if(!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea onChange={newTextChangeHandlerMessage}
                              value={props.messageForNewMessage}> </textarea>
                    <button onClick={addMessage}>add Message</button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;