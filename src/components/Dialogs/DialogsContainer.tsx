import React from 'react';
import {AddMessageAC, ChangeNewTextDialogsAC, DiologType, MessageType} from '../../redux/Dialogs-Reducer';
import Dialogs from './Dialogs';
import {ReduxStateType, ReduxStoreType} from '../../redux/redux-store';
import {connect} from 'react-redux';

type DialogsContainerType = {
    // store: ReduxStoreType
    dialogs: Array<DiologType>
    message: Array<MessageType>
    messageForNewMessage: string
    addMessage: () => void
    newTextChangeHandler: (text: string) => void
}

let mapStateToProps = (state: ReduxStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messageForNewMessage: state.dialogsPage.messageForNewMessage,
        messages: state.dialogsPage.message,
        isAuth: state.auth.isAuth

    }

}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(AddMessageAC())
        },
        newTextChangeHandler: (text: string) => {
            dispatch(ChangeNewTextDialogsAC(text))
        },

    }

}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
