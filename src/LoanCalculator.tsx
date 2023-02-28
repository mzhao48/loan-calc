import './LoanCalculator.css';
import LoanJS from "loanjs";
import { useState } from "react";

export default function LoanCalculator() {
    const [installments, setInstallments] = useState([]);
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        calculate(10000,30,4);
    } 
    
    const calculate = (amount: number, years: number, rate: number) => {
        var loan = new LoanJS.Loan(amount, years * 12, rate)
        setInstallments(loan.installments);
        console.log(installments)
    }

    const amountFormat = (amount: number) =>
        new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(amount);

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

      <table>
        <thead>
            <tr>
                <th>Monthly</th>
                <th>Payment Amount</th>
                <th>Interest Paid</th>
                <th>Principal Paid</th>
                <th>Remain</th>
            </tr>
        </thead>
        <tbody>
            { installments.map((i: any, ind: number) => (
                <tr key={ ind }>
                    <td> { ind } </td>
                    <td>{ amountFormat(i.installment) }</td>
                    <td>{ amountFormat(i.interest) }</td>
                    <td>{ amountFormat(i.capital) }</td>
                    <td>{ amountFormat(i.remain) }</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}