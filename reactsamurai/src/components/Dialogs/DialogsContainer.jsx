import Dialogs from "./Dialogs";
import { addMessageActionCreator, changeMessageTexActionCreator} from './../../redux/DialogsReducer'
import StoreContext from "../../storeContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>{

            (store) => {

                let state = store.getState();

                const addMessage = () => {
                    let action = addMessageActionCreator();
                    store.dispatch(action);
                }

                const changeAreaText = (text) => {
                    let action = changeMessageTexActionCreator(text);
                    store.dispatch(action);
                }

                return (
                    <Dialogs dialogs={state.dialogs.dialogs}
                                messages={state.dialogs.messages}
                                text={state.dialogs.textarea}
                                addMessage={ addMessage }
                                changeAreaText={ changeAreaText }/>
                )
            }

        }</StoreContext.Consumer>)
}

export default DialogsContainer;
