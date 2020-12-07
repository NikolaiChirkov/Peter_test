import React from 'react';
import '../../assets/styles/partials/History.css';
import { useDataContext } from '../context/Data';

const History: React.FC = () => {
    const { 
        users, 
        currentUser, 
        currentValute, 
        changeHistoryItemAmount 
    } = useDataContext();
    const transaction = users[currentUser].transaction;

    return (
        <section className="history">
            <h1 className="history__title">History</h1>
            <div className="history__list">
                {transaction.map(item => {
                    return (
                        <div key={Math.random()} className="history__item">
                            <div  className="item">
                                <img className="item__cover" src={`${item.icon_url}`} alt=""/>
                                <div className="item__container">
                                    <div className="item__info">
                                        <h3 className="item__info-title">{item.title}</h3>
                                        <p className="item__info-date">{item.date}</p>    
                                    </div>
                                    <div className="item__payment">
                                        <h3 className="item__payment-valute">
                                            {`- ${currentValute === 0 ? 
                                                "£" : 
                                                currentValute === 1 ? 
                                                "€" : 
                                                "₽"} 
                                                ${changeHistoryItemAmount(item.amount)}`}
                                        </h3>
                                        <p className="item__payment-dollar">$ {item.amount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default History;