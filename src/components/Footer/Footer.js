import './Footer.css';
import React from 'react';
import YandexMap from '../YandexMap/YandexMap';

function Footer(){
    
    return(

            <div className='Footer'>
                <address className='Location_global'>
                Москва:Неглинная улица, 12/2с5, Неглинная улица, 12/2с5, Москва, 107016
                </address>
                <YandexMap/>
            </div>
    )
}

export default Footer;