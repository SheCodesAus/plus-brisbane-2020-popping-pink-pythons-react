import React from 'react';
import './SplashPage.css';
import Header from "../components/Header/Header";
import SplashImage from '../components/helpers/SplashImage';
import ActionButton from '../components/Button/Button';


function SplashPage() {
    return (
        <div>
        <Header />
        <div className="flex-container">
            <div className="splash-container">
                <div className="splash-image">
                    <SplashImage />
                </div>
                <div className="button-locator">
                    <ActionButton />
                </div>
            </div>
        </div>
        </div>
    )
}

export default SplashPage;
