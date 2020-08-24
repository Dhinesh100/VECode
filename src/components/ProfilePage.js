import React from 'react';
import Profile from './Profile';
import ProfileTab from './ProfileTab';

const ProfilePage = () => {
    if (window.outerWidth <= 800) {
        return <ProfileTab />
    } else {
        return <Profile />
    }
}

export default ProfilePage;