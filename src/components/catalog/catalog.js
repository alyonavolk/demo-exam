import React, {useState} from 'react';
import Button from '../subComponents/button/button';
import './catalog.scss';
import arr from '../../resources/kod11_v3_task3.json';

import arrowDown from '../../resources/img/arrow-bar-down.svg';
import arrowUp from '../../resources/img/arrow-bar-up.svg';
import Card from '../subComponents/card/card';

const Catalog = () => {
    const [card, setCard] = useState(arr);
    const [filt, setFilt] = useState(card);

    const sortCard = () => {
        setCard(arr);
        setFilt(card.filter((item) => (item.isNew)));
    }

    const [sortState, setSortState] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: (a, b) => (b.price > a.price ? -1 : 1), },
        descending: { method: (a, b) => (a.price > b.price ? -1 : 1) },
        new: { method: (a) => (a.isNew ? -1 : 1)}
      };

    return (
        <div className='menu'>
            <h2 className="menu__title">
                Наше <span>меню</span>
            </h2>
            <ul className="sort__items list-reset">
                <li className="sort__item">
                    <Button mix='button__sort' onClick={() => setSortState('ascending')}>
                        По цене
                        <img src={arrowDown} alt="#" />
                    </Button>
                </li>
                <li className="sort__item">
                    <Button mix='button__sort' onClick={() => setSortState('descending')}>
                        По цене
                        <img src={arrowUp} alt="#" />
                    </Button>
                </li>
                <li className="sort__item">
                    <Button mix="button__sort" onClick={() => setSortState('new')}>
                        Сначала новинки</Button>
                </li>
            </ul>
            <ul className='catalog__cards'>
                {filt.sort(sortMethods[sortState].method).map((val) => {
                    return (<Card key={val.id} sale={val.sale} new={val.isNew} img={val.img} name={val.name} price={val.price} descr={val.description} />)
                })}
            </ul>
        </div>
    );
};

export default Catalog;