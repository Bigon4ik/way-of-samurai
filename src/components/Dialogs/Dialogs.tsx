import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {ActionsType, DiologPageType, MessageType} from '../../redux/store';
import {AddMessageAC, ChangeNewTextDialogsAC} from '../../redux/Dialogs-Reducer';

type DiologPropsType={
    addMessage:()=>void
    newTextChangeHandler:(text:string)=>void
    dataDialogs:DiologPageType
    //dispatch: (action: ActionsType) => void
    message:string
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


    let dialogsElements =props.dataDialogs.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)


    let messageElements = props.dataDialogs.message
        .map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea onChange={newTextChangeHandlerMessage}
                              value={props.message}> </textarea>
                    <button onClick={addMessage}>add Message</button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;