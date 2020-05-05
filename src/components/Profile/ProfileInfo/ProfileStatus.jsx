import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.descriptionBlock}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => { this.activateEditMode() }}>{this.props.status}status</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={() =>{this.deActivateEditMode()}} value={'status'}></input>
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;