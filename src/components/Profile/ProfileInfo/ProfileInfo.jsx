import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.small} />
            <ProfileStatus
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />
        </div>
    )
}
export default ProfileInfo;