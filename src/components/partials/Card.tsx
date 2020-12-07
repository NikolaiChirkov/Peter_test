import React from 'react';
import masterCardLogo from '../../assets/svg/mastercard.svg';
import userLogo from '../../assets/svg/user.svg';
import '../../assets/styles/partials/Card.css';
import { useDataContext } from '../functional/Data';


const Card = () => {
    const { users, currentUser } = useDataContext();
    const user = users[currentUser];

    return (
        <section className="card" >
            <div className="number">
                <img src={masterCardLogo} alt='' />
                <p className="number__value">{user.cardNumber}</p>
            </div>
            <div className="info">
                <div className="info__user">
                    <img src={userLogo} alt='' />
                    <p className="info__user-value">{user.cardholder}</p>
                </div>
                <div className="info__valid">
                    <p className="info__valid-text">valid thru</p>
                    <p className="info__valid-value">{user.valid}</p>
                </div>
            </div>
            <div className="balance">
                <p className="balance__valute">£2 125,12</p>
                <div className="balance__dollar">
                    <p className="balance__dollar-text">your balance</p>
                    <p className="balance__dollar-value">${user.balance}</p>
                </div>
            </div>
        </section>
    )

}

export default Card;