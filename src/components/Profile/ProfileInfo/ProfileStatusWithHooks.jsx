import React from 'react';
import s from './ProfileInfo.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const setStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.descriptionBlock}>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={setStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status} />
                </div>
            }
        </div>
    )

}
export default ProfileStatusWithHooks;  