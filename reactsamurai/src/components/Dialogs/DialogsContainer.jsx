import Dialogs from "./Dialogs";
import { addMessage, changeAreaText} from './../../redux/DialogsReducer';
import { connect } from "react-redux";
import authRedirect from "../../Hoc/authRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        text: state.dialogs.textarea,
    }
}

export default compose(
    connect(mapStateToProps, {
        addMessage, changeAreaText
    }),
    authRedirect,
)(Dialogs);



