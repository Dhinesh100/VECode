import React from 'react';
import Info from './Info';
import InfoTab from './InfoTab';

const InfoPage = () => {
    if (window.outerWidth <= 800) {
        return <InfoTab />
    } else {
        return <Info />
    }
}

export default InfoPage;