import { useState } from "react";

const MainComponent = () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState(1);
    const [tipResult, setTipResult] = useState(1);
    const [totalResult, setTotalResult] = useState(1);

    const percentages = [5, 10, 15, 25, 50];

    const resetForm = () => {
        setTipResult(0);
        setTotalResult(0);
        setTip(0);
        setBill(0);
        setPeople(0);
    }

    const onPeopleChange = (people) => {
        setPeople(people);
        calculateResult();
    }

    const onBillChange = (bill) => {
        setBill(bill);
        calculateResult();
    }

    const onTipChange = (tip) => {
        setTip(tip);
        calculateResult();
    }

    const tipAmount = () => ((bill * tip) / 100) / people;
    
    const totalAmount = () => (bill / people) + tipAmount();

    const calculateResult = () => {
        setTipResult(tipAmount().toFixed(2));
        setTotalResult(totalAmount().toFixed(2));
    }

    return (
        <div className="general-wrapper">
            <div className="data-wrapper">
                <h1>Bill</h1>
                <label htmlFor="bill-input">
                    <input 
                        className="bill-input"
                        type="number" 
                        value={bill} 
                        onChange={(e) => onBillChange(e.target.value)}
                        min="0" />
                </label>
                <h2>Select Tip %</h2>
                <ul>
                    {percentages.map((key) => {
                        return <li>
                            <button 
                                className={tip === key ? 'percentage-button btn-active': 'percentage-button'}
                                value={key}
                                onClick={() => onTipChange(key)}
                            >{key}%</button>
                        </li>
                    })}
                    <li>
                        <input
                            type="number"
                            placeholder="Custom"
                            className="percentage-button"
                            onChange={(e) => onTipChange(e.target.value)}
                        />
                    </li>
                </ul>
                <h2>Number of People</h2>
                <label htmlFor="people-input">
                    <input 
                        className="people-input" 
                        type="number" 
                        value={people}
                        min="1"
                        onChange={(e) => onPeopleChange(e.target.value)} />
                </label>
            </div>
            <div className="result-wrapper">
                <div className="result">
                    <div className="tip-amount">
                        <div>
                            <h2>Tip Amount</h2>
                            <p>/ person</p>
                        </div>
                        <h3>$<span>{tipResult}</span></h3>
                    </div>
                    <div className="total-amount">
                        <div>
                            <h2>Total</h2>
                            <p>/ person</p>
                        </div>
                        <h3>$<span>{totalResult}</span></h3>
                    </div>
                </div>
                <button 
                    type="button" 
                    className="reset-button"
                    onClick={resetForm}
                >RESET</button>
            </div>
      </div>
    );
};

export default MainComponent;