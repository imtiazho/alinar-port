import React from 'react';
import './EditProfile.css';

const EditProfile = () => {
    return (
        <div className='edit-profile-inner'>
            <div className="left-side">
                <form>
                    <div className="profile">
                        <h3>Add Photo</h3>

                        <div className="profile-area">
                            <input id='add-photo-btn' type="file" />
                            <label htmlFor='add-photo-btn'>+ Add Photo</label>
                        </div>
                    </div>

                    <button className='btn-2'>Save</button>
                </form>
            </div>
        </div >
    );
};

export default EditProfile;