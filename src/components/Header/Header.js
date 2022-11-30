import './Header.css';
import React from 'react';


function Header(){

    return(
        <div className='Container-head'>
            <img className='logo'/>
            <h1 className='Welcom_text'>Добро пожаловать в интернет-магазин</h1>
            <div className='span_separation'>
                <span>Вход</span>&nbsp;
                <span>Регистрация</span>
            </div>
        </div>
    )
}

export default Header;