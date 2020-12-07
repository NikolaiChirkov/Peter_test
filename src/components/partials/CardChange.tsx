import React from 'react';
import ArrowLeft from '../../assets/svg/arrow-left.svg';
import MasterCard from '../../assets/svg/mastercard.svg';
import { useDataContext } from '../context/Data';
import '../../assets/styles/partials/CardChange.css';
import { UserType } from '../interfaces/Interfaces';

const CardChange: React.FC = () => {
    const { 
        users, 
        changeCard, 
        currentUser,
        setChangeCard, 
        setCurrentUser, 
        ID 
    } = useDataContext();

    return (
        <section className={`${changeCard ? "card-change" : "card-change hidden"}`}>
            <header className="card-change__header">
                <button className="card-change__header-btn" onClick={() => setChangeCard(false)}>
                    <img src={ArrowLeft} alt="" />
                </button>
                <h1 className="card-change__header-title">Мои карты</h1>
            </header>
            <ul className="card-change__list">
                {users && users.map((item: UserType, index: number) => {
                    return (
                        <li 
                            key={ID()} 
                            className="list__item" 
                            onClick={() => {
                                setCurrentUser(index);
                                setChangeCard(false);
                            }}
                        >
                            <div className="list__item-container">
                                <img src={MasterCard} alt="" />
                                <p className="list__item-container-text">{item.cardNumber}</p>
                            </div>
                            {currentUser === index && <div className="list__item-chosen"></div>}
                        </li>
                    );
                })}  
            </ul>
        </section>
    )
}

export default CardChange;