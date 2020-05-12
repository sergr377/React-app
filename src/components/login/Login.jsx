import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Textarea } from "../common/FormsControls/FormsControl";
import { required } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { authAPI } from "../../api/api";
import s from "./../common/FormsControls/FormsControl.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={'Email'} name={"email"} component={Input} />
            </div>
            <div>
                <Field type={'password'} validate={[required]} placeholder={'Passwors'} name={"password"} component={Input} />
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <Field type={'checkbox'} name={"checkbox"} component={"Input"} />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)