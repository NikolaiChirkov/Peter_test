import { useDataContext } from '../../context/Data';
import { HistoryItemType } from '../../interfaces/Interfaces';
import '../../../assets/styles/partials/History.css';

const History = () => {
    const { 
        users, 
        currentUser, 
        currentValute, 
        changeHistoryItemAmount,
        ID 
    } = useDataContext();
    const transaction = users[currentUser].transaction;

    return (
        <section className="history">
            <h1 className="history__title">History</h1>
            <div className="history__list">
                {transaction.map((item: HistoryItemType) => {
                    return (
                        <div key={ID()} className="history__item">
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