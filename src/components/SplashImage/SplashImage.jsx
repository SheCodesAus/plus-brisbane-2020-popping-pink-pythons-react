import React from 'react';
import image from '../images/splash-background.png'

function SplashImage() {
    return (
        <div>
            <img src={image} alt="image" />
            <p>Test</p>
        </div>
    )
}

export default SplashImage;