import s from '../../../Login/Login.module.css'
import { Input } from '../../../common/FormsModal/FormsModal';
import { required } from '../../../../utils/validators/validators.js'
import { Field, reduxForm } from "redux-form";

const UserDataForm = ({handleSubmit, cancel, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            {
                error 
                    ? (
                        <div className={s.formSummaryError}>{error}</div>
                    )
                    : null

            }

            <div>
                Full name:
                <Field name='fullName' component={Input} 
                    validate={[required]} placeholder={profile.fullName}/>
            </div>
            <div>
                About me: 
                <Field name='aboutMe' component={Input} 
                    validate={[required]} placeholder={profile.aboutMe} initialValue={profile.aboutMe}/>
            </div>
            <div>
                Are you looking for a job?
                <Field name='lookingForAJob' component={Input} type='checkbox'/>
                <Field name='lookingForAJobDescription' component={Input} placeholder={profile.lookingForAJobDescription}/>
            </div>
            <div>
                <Field name='contacts.github' component={Input} placeholder='Github link'/>
            </div>
            <div>
                <Field name='contacts.twitter' component={Input} placeholder='twitter link'/>
            </div>
            <div>
                <Field name='contacts.instagram' component={Input} placeholder='instagram link'/>
            </div>
            <div>
                <Field name='contacts.vk' component={Input} placeholder='vk link'/>
            </div>
            <div>
                <Field name='contacts.facebook' component={Input} placeholder='facebook link'/>
            </div>
            <div>
                <Field name='contacts.website' component={Input} placeholder='website link'/>
            </div>
            <div>
                <Field name='contacts.mainLink' component={Input} placeholder='mainLink link'/>
            </div>
            <div>
                <Field name='contacts.youtube' component={Input} placeholder='youtube link'/>
            </div>
            <button type="submit">Submit</button>
            <button onClick={cancel}>Cancel</button>
        </form>
    );
}

const ReduxUserDataForm = reduxForm({
    form: 'userData'
})(UserDataForm);

export default ReduxUserDataForm;