import { reduxForm, Field } from 'redux-form';
import Loading from '../../common/Loading/Loading';
import s from './User.module.css'
import UserStatus from './UserStatus/UserStatus';
import { required } from '../../../utils/validators/validators';
import { FieldFileInput } from '../../common/FormsModal/FormsModal';
import { useState } from 'react';
import UserData from './UserData/UserData';
import UserDataForm from './Form/Form'

const User = (props) => {

    const [editMode, setEditMode] = useState(false);

    const cancel = () => {
        setEditMode(false);
    }

    const handleSubmit = (value) => {
        props.savePhoto(value.image);
    }

    if (!props.profile) {
        return <Loading isFetching={true} />;
    }

    return (
        <div className={s.profile__user}>
            <div className={s.profile__ava}>
                {
                    props.profile.photos.small || props.profile.photos.small
                        ? <img src={props.profile.photos.small || props.profile.photos.small} alt="ava" />
                        : <h2 className={s.noImg}>{props.profile.fullName.slice(0, 2)}</h2>
                }
            </div>
            <UserStatus status={props.status} updateStatus={props.updateStatus} />
            <br></br><br></br>

            {
                props.isAuth && !props.userId
                ? (<><ReduxUserForm onSubmit={handleSubmit} /><br></br><br></br></>)
                : null
            }

            {
                props.isAuth && !props.userId
                ? <><button onClick={() => setEditMode(!editMode)}>Turn edit mode</button><br></br><br></br><br></br></>
                : null
            }

            {
                editMode 
                    ? <UserDataForm cancel={cancel}/>
                    : <UserData profile={props.profile} userId={props.userId}/>
            }
        </div>
    );
}

let UserForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor='ava_pic'>Choose image to upload</label>
            <Field component={FieldFileInput} validate={[required]} name='image' type='file' accept='.jpg, .jpeg, .png' id='ava_pic' />
            <button>Submit</button>
        </form>
    );
}


let ReduxUserForm = reduxForm({
    form: 'ava'
})(UserForm);

export default User;