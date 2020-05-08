import React from 'react';
import styles from './FormsControl.module.css'


const formControl = ({ input, meta, ...props }) => {
    const isErr = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (isErr ? styles.error : '')}>
            {props.typeField}
            {isErr && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({ input, meta, ...props }) => { 
    return (
        <formControl typeField="textarea"  {...props}><textarea {...input} {...props} /></formControl>
    )
}

export const Input = ({ input, meta, ...props }) => {
    return (
        <formControl typeField="input" {...props}><input {...input} {...props} /></formControl>
    )
}
