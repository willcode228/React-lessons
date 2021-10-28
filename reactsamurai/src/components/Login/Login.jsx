import s from './Login.module.css';
import { Main } from '../StyledComponents/Main';
import { Field, reduxForm } from 'redux-form';
import { Input, SummaryFormError } from '../common/FormsModal/FormsModal';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/AuthReducer';
import { Redirect } from 'react-router';

const Login = (props) => {

    const handleSubmit = (data) => {
        props.login(data);
    }

    if(props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
        <Main className={s.login}>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={handleSubmit}/>
        </Main>
    );
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            {
                props.error 
                    ? (
                        <div className={s.formSummaryError}>
                            {props.error}
                        </div>
                    )
                    : null

            }

            <div>
                <Field name='email' component={Input} validate={[required]} placeholder='Login'/>
            </div>
            <div>
                <Field name='password' component={Input} validate={[required]} type='password'/>
            </div>
            <div>
                <label>
                    Remember me 
                    <Field name='rememberMe' component={Input} type='checkbox'/>
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);

let mapStateToProps = (props) => ({
    isAuth: props.auth.isAuth
});

export default connect(mapStateToProps, { login, logout })(Login);