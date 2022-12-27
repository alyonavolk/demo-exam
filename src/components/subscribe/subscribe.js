import React from 'react';
import './subscribe.scss';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <h2 className="subscribe__title">
                Присоединяйтесь к нам и получите <span>скидку</span> до 50%
            </h2>
            <p className="subscribe__descr">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            </p>
            <form className="subscribe__form">
                <input className="form__input" type="email" placeholder="Введите email" />
                <button className="btn-reset form__btn">Войти</button>
            </form>
        </div>
    );
};

export default Subscribe;