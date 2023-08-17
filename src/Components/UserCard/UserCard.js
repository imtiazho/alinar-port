import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
    const { _id, userName, email, userEmail, userPassWord, userImage, role } = user;

    return (
        <div className='user-card'>
            <img src={user?.userImage} alt="" />
            <p>{userName ? userName : "Google User"}</p>

            {role === 'admin' ? <p className='admin-sign'>Admin <i class="fa-solid fa-shield-halved"></i></p> : <div className='btn-grp'>
                {role === "moderator" || <button >Make Moderator</button>}
                {role === "moderator" && <p className='admin-sign'>Moderator <i class="fa-solid fa-screwdriver-wrench"></i></p>}
                <button className='terminate-btn'>Terminate</button>

            </div>}
        </div>
    );
};


export default UserCard;