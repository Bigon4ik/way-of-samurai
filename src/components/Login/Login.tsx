import React from 'react';
import  {Field,InjectedFormProps, reduxForm} from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import {requiredField} from '../../utils/validator/validators';


type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} validate={[requiredField]}
                        name={'login'} component={Input}/></div>
            <div><Field placeholder={'Password'} validate={[requiredField]} name={'password'} component={Input}/></div>
            <div><Field component={Input} validate={[requiredField]} name={'rememberMe'} type={'checkbox'}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login;