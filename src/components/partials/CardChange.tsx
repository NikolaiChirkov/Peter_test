import React from 'react';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import MasterCard from '../../assets/svg/mastercard.svg';
import '../../assets/styles/partials/CardChange.css';

const CardChange = () => {
    return (
        <section className="card-change">
            <header className="card-change__header">
                <button className="card-change__header-btn">
                    <img src={ArrowLeft} alt="" />
                </button>
                <h1 className="card-change__header-title">Мои карты</h1>
            </header>
            <ul className="card-change__list">
                <li className="list__item">
                    <img src={MasterCard} alt="" />
                    <p className="list__item-text">4455 1223 3488 1000</p>
                </li>
            </ul>
        </section>
    )
}

export default CardChange;