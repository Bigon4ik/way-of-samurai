import React from 'react';
import {AddMessageAC, ChangeNewTextDialogsAC} from '../../redux/Dialogs-Reducer';
import Dialogs from './Dialogs';
import {ReduxStoreType} from '../../redux/redux-store';

type DialogsContainerType={
    store:ReduxStoreType
}
const DialogsContainer = ({store}: DialogsContainerType ) => {

    let state = store.getState().dialogsPage;

    // const postsElement = props.posts
    //     .map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addMessage = () => {
        //props.addPost(props.messageForNewPost)

        store.dispatch(AddMessageAC(state.messageForNewMessage))
    }
    const newTextChangeHandler = (text:string) => {
        //props.changeNewTextCallback(e.currentTarget.value)
        store.dispatch(ChangeNewTextDialogsAC(text))
    }
    return <Dialogs addMessage={addMessage} newTextChangeHandler={newTextChangeHandler}
    dataDialogs={state} message={state.messageForNewMessage}/>
}

export default DialogsContainer