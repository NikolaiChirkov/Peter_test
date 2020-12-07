import React from 'react';
import '../../assets/styles/partials/History.css';
import { useDataContext } from '../functional/Data';

const History = () => {
    const { users, currentUser } = useDataContext();
    const transaction = users[currentUser].transaction;
    console.log(transaction);

    return (
        <section className="history">
            <h1 className="history__title">History</h1>
            <div className="history__list">
                {transaction.map(item => {
                    return (
                        <div className="history__item">
                            <div key={new Date().getDate.toString()} className="item">
                                <img className="item__cover" src={`${item.icon_url}`} alt=""/>
                                <div className="item__container">
                                    <div className="item__info">
                                        <h3 className="item__info-title">{item.title}</h3>
                                        <p className="item__info-date">{item.date}</p>    
                                    </div>
                                    <div className="item__payment">
                                        <h3 className="item__payment-valute">- £ 7.99</h3>
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