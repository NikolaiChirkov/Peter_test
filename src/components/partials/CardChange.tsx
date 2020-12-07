import React from 'react';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import MasterCard from '../../assets/svg/mastercard.svg';
import { useDataContext } from '../context/Data';
import '../../assets/styles/partials/CardChange.css';

const CardChange: React.FC = () => {
    const { users, changeCard, setChangeCard } = useDataContext();

    return (
        <section className={`${changeCard ? "card-change" : "card-change hidden"}`}>
            <header className="card-change__header">
                <button className="card-change__header-btn" onClick={() => setChangeCard(false)}>
                    <img src={ArrowLeft} alt="" />
                </button>
                <h1 className="card-change__header-title">Мои карты</h1>
            </header>
            <ul className="card-change__list">
                {users && users.map((item) => {
                    return (
                        <li key={new Date().getDate().toString()} className="list__item">
                            <img src={MasterCard} alt="" />
                            <p className="list__item-text">{item.cardNumber}</p>
                        </li>
                    );
                })}  
            </ul>
        </section>
    )
}

export default CardChange;