import React from 'react';
import '../../assets/styles/partials/Change.css';

const Change = () => {

    return (
        <section className="change">
            <h1 className="change__title">change currency</h1>
            <div className="change__buttons">
                <button className="button chosen">
                    <h1 className="button__sign">£</h1>
                    <p className="button__acronym">gbp</p>
                </button>
                <button className="button">
                    <h1 className="button__sign">€</h1>
                    <p className="button__acronym">eur</p>
                </button>
                <button className="button">
                    <h1 className="button__sign">₽</h1>
                    <p className="button__acronym">rub</p>
                </button>
            </div>
        </section>
    )
}

export default Change;