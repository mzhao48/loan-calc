import './LoanCalculator.css';

export default function LoanCalculator() {
  return (
    <div className="loan-calculator-container">
      <h1>Loan Calculator</h1>
      <form>
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