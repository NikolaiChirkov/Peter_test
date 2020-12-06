import React from 'react';
import '../../assets/styles/partials/History.css';
import load from '../../assets/svg/loading.svg'

const History = () => {

    return (
        <section className="history">
            <h1 className="history__title">History</h1>
            <div className="history__item">
                <img className="item__cover" src={load} alt=""/>
                <div className="item__container">
                    <div className="item__info">
                        <h3 className="item__info-title">Netflix</h3>
                        <p className="item__info-date">15/12/2019</p>    
                    </div>
                    <div className="item__payment">
                        <h3 className="item__payment-valute">- £ 7.99</h3>
                        <p className="item__payment-dollar">$ 9.85</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default History;