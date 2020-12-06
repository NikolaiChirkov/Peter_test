import React from 'react';
import mastercardLogo from '../../assets/svg/mastercard.svg';
import userLogo from '../../assets/svg/user.svg';
import '../../assets/styles/partials/Card.css';


const Card = () => {
    return (
        <section className="card">
            <div className="number">
                <img src={mastercardLogo} alt='' />
                <p className="number__value">4455 1223 3488 1000</p>
            </div>
            <div className="info">
                <div className="info__user">
                    <img src={userLogo} alt='' />
                    <p className="info__user-value">Anton Ivanov</p>
                </div>
                <div className="info__valid">
                    <p className="info__valid-text">valid thru</p>
                    <p className="info__valid-value">12/22</p>
                </div>
            </div>
            <div className="balance">
                <p className="balance__valute">£2 125,12</p>
                <div className="balance__dollar">
                    <p className="balance__dollar-text">your balance</p>
                    <p className="balance__dollar-value">$2617.14</p>
                </div>
            </div>
        </section>
    )

}

export default Card;