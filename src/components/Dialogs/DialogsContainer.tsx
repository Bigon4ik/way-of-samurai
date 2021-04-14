import React from 'react';
import {AddMessageAC, ChangeNewTextDialogsAC} from '../../redux/Dialogs-Reducer';
import Dialogs from './Dialogs';
import {ReduxStateType, ReduxStoreType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {DiologType, MessageType} from '../../redux/store';

type DialogsContainerType = {
    // store: ReduxStoreType
    dialogs: Array<DiologType>
    message: Array<MessageType>
    messageForNewMessage: string
    addMessage: () => void
    newTextChangeHandler: (text: string) => void
}
//
// const DialogsContainer = (props: DialogsContainerType) => {
//
//     // let state = store.getState().dialogsPage;
//
//     // const postsElement = props.posts
//     //     .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)
//
//     const addMessage = () => {
//         //props.addPost(props.messageForNewPost)
//
//         store.dispatch(AddMessageAC(state.messageForNewMessage))
//     }
//     const newTextChangeHandler = (text: string) => {
//         //props.changeNewTextCallback(e.currentTarget.value)
//         store.dispatch(ChangeNewTextDialogsAC(text))
//     }
//     return <Dialogs addMessage={addMessage}
//                     newTextChangeHandler={newTextChangeHandler}
//                     dataDialogs={state}
//                     message={state.messageForNewMessage}/>
// }

let mapStateToProps = (state: ReduxStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messageForNewMessage: state.dialogsPage.messageForNewMessage,
        messages: state.dialogsPage.message

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
