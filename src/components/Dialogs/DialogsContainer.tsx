import React from 'react';
import {AddMessageAC} from '../../redux/Dialogs-Reducer';
import Dialogs from './Dialogs';
import {ReduxStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

type MessageType = {
    message: string
}
type DiologType = {
    id: number
    name: string
}
type DialogsContainerType = {
    // store: ReduxStoreType
    dialogs: Array<DiologType>
    message: Array<MessageType>
    messageForNewMessage: string
    addMessage: () => void
    newTextChangeHandler: (text: string) => void
}
type MapStateToPropsType = {
    dialogs: Array<DiologType>
    messages: Array<MessageType>
    //messageForNewMessage: string
}
type MapDispatchToPropsType = {
    addMessage: (newMessageBody:any) => void
   // newTextChangeHandler: (text: string) => void
}
type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        //messageForNewMessage: state.dialogsPage.messageForNewMessage,
        messages: state.dialogsPage.message,
    }

}
let mapDispatchToProps = (dispatch:any):MapDispatchToPropsType => {
    return {
        addMessage: (newMessageBody:any) => {
            dispatch(AddMessageAC(newMessageBody))
        },
        // newTextChangeHandler: (text: string) => {
        //     dispatch(ChangeNewTextDialogsAC(text))
        // },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// export default compose<React.ComponentType>(
//     connect<MSTPType, MDTPType, {}, RootState>(MSTP, {addMessageAc}),
//     withAuthRedirect)(Dialogs)
//
// type MSTPType = {
//     dialogs: Array<DialogType>
//     messages: Array<MessageType>
//
// }
//
// type MDTPType = {
//     addMessageAc: (text: string) => void
// }
//
// const MSTP = (state: RootState) => {
//     return {
//         dialogs: state.dialogsPage.dialogs,
//         messages: state.dialogsPage.messages
//     }
// }