import React from 'react';
import styles from './FormsControl.module.css'


const FormConstructor = (props) => {
    debugger;
    const hasError = props.touched && props.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")} >
            <div>
                {props.element}
            </div>
            {hasError && <span>{props.error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {
    const el = React.createElement('Textarea', {...input, ...props})
    return (
        <FormConstructor element = {el} {...meta} />
    )
}

export const Input = ({input, meta, ...props}) => {
    const el = React.createElement('input', {...input, ...props})
    return (
        <FormConstructor element = {el} {...meta} />
    )
}
