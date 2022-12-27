import React from 'react';
import Button from '../button/button';
import './card.scss';

import like from '../../../resources/img/Heart.svg';

const Card = (props) => {
    return (
        <li className="catalog__card">
            <div className={`${ props.sale || props.new ? 'card_up' : null }`}>
                { props.sale ? <p className='card__sale'>{props.sale}% скидка</p> : null}
                { props.new ? <p className='card__new'>новинка</p> : null}
                <img className='card__like' src={like} alt='' />
            </div>
            <img className="card__img" src={"../img/" + props.img} alt="" />
            <div className="card__price">
                <p>{props.name}</p>
                <p><span>{props.price}</span>&#8381;/кг</p>
            </div>
            <p className="card__descr">
                {props.descr}
            </p>
            <Button mix="button__card">Купить</Button>
        </li>
    );
};

export default Card;