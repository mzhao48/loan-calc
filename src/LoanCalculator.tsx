import './LoanCalculator.css';
import LoanJS from "loanjs";

export default function LoanCalculator() {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        calculate(10000,30,4);
    }
    
    const calculate = (amount: number, years: number, rate: number) => {
        var loan = new LoanJS.Loan(amount, years * 12, rate)
        console.log(loan)
    }

    return (
    <div className="loan-calculator-container">
      <h1>Loan Calculator</h1>
      
      <form onSubmit = { handleSubmit }>
        <div className="form-item">
            <label htmlFor='loan-amount'>Loan Amount</label>
            <div className="form-input">
                <input 
                    type="number"
                    name="loan-amount" 
                    placeholder="0"
                />
            </div>
        </div>
        <div className="form-item">
            <label htmlFor='interest-rate'>Interest Rate</label>
            <div className="form-input">
                <input 
                    type="number"
                    name="interest-rate-amount"
                    placeholder="0"
                />
            </div>
        </div>
        <div className="form-item">
            <label htmlFor='loan-term'>Loan Term (Years)</label>
            <div className="form-input">
                <input 
                    type="number"
                    name="loan-term"
                    placeholder="0"
                />
            </div>
        </div>
        <div className="form-action">
            <input 
                type="submit"
                value="Calculate"
                className='calculate-button'
            />
        </div>
      </form>
    </div>
  )
}