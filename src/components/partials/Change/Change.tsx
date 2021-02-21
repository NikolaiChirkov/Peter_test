import { useDataContext } from '../../context/Data';
import '../../../assets/styles/partials/Change.css';


const Change = () => {
    const { currentValute, setCurrentValute } = useDataContext();

    return (
        <section className="change">
            <h1 className="change__title">change currency</h1>
            <div className="change__buttons">
                <button className={`
                    ${currentValute === 0 ? "button chosen-volute" : "button"}`}
                    onClick={() => setCurrentValute(0)
                }>
                    <h1 className="button__sign">£</h1>
                    <p className="button__acronym">gbp</p>
                </button>
                <button className={`
                    ${currentValute === 1 ? "button chosen-volute" : "button"}`} 
                    onClick={() => setCurrentValute(1)
                }>
                    <h1 className="button__sign">€</h1>
                    <p className="button__acronym">eur</p>
                </button>
                <button className={`
                    ${currentValute === "RUB" ? "button chosen-volute" : "button"}`}
                    onClick={() => setCurrentValute(2)
                }>
                    <h1 className="button__sign">₽</h1>
                    <p className="button__acronym">rub</p>
                </button>
            </div>
        </section>
    )
}

export default Change;