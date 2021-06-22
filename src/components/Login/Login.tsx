import React from 'react';
import {Field, InjectedFormProps, reduxForm, ReduxFormContext} from 'redux-form';
import {Input} from '../common/FormControls/FormControls';
import {requiredField} from '../../utils/validator/validators';
import {connect} from 'react-redux';
import {login, logout} from '../../redux/auth-Reducer';
import {Redirect} from 'react-router-dom';
import style from '../common/FormControls/FormControls.module.css'


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Email'} validate={[requiredField]}
                        name={'email'} component={Input}/></div>
            <div><Field placeholder={'Password'} validate={[requiredField]} name={'password'} component={Input}/></div>
            <div><Field component={Input} validate={[requiredField]} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth

})
export default connect(mapStateToProps, {login, logout})(Login);