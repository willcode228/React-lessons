import Dialogs from "./Dialogs";
import { addMessage, changeAreaText} from './../../redux/DialogsReducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        text: state.dialogs.textarea
    }
}

export default connect(mapStateToProps, {
    addMessage, changeAreaText
})(Dialogs);

