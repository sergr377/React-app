import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.small} />
            <ProfileStatusWithHooks
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />
        </div>
    )
}
export default ProfileInfo;