import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader';

const ProfileInfo = (props) => {
    
    if (props.profile == null || undefined) {
        return <Preloader />
    }
    
    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.small} />
            <div><a>description</a></div>
        </div>
    )
}
export default ProfileInfo;