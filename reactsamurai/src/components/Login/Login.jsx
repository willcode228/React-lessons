import s from './Login.module.css';
import { Main } from '../StyledComponents/Main';
import { Field, reduxForm } from 'redux-form';

const Login = () => {
    const handleSubmit = (data) => {
        console.log(data);
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
            <div>
                <Field name='login' component='input' placeholder='Login'/>
            </div>
            <div>
                <Field name='password' component='input' type='password'/>
            </div>
            <div>
                <label>
                    Remember me 
                    <Field name='rememberMe' component='input' type='checkbox'/>
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

export default Login;