import React from 'react';
import styles from './FormsControl.module.css'

export const Textarea = ({ input, meta, ...props }) => {

    const isErr = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (isErr ? styles.error : '')}>
            <textarea {...input} {...props} />
            {isErr && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const isErr = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (isErr ? styles.error : '')}>
            <textarea {...input} {...props} />
            {isErr && <span>{meta.error}</span>}
        </div>
    )
}