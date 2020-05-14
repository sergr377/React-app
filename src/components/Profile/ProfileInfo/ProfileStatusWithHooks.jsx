import React from 'react';
import s from './ProfileInfo.module.css';
import { useState } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateMode = () => {
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
                        onDoubleClick={activateMode}>{props.status || 'No status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onCange={setStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        vakue={status}></input>
                </div>
            }
        </div>
    )

}
export default ProfileStatusWithHooks;  