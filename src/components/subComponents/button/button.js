import React from 'react';
import './button.scss';

const Button = ({mix, onClick, children}) => {
    return (
        <button className={`button ${mix}`} onClick={onClick}>{children}</button>
    );
};

export default Button;