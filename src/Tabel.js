import './index.css';
import {displayData} from './App.js';
const Table = (props) =>
{
    return(
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {
                props.data.map((yearData)=>{
                    return(
                    <tr>
                        <td>{yearData.year}</td>
                        <td>{yearData.savingsEndOfYear}</td>
                        <td>{yearData.yearlyInterest}</td>
                        <td>{yearData.yearlyContribution}</td>
                        
                    </tr>
                    );
                })
            }
          
        </tbody>
      </table>
    );
}
export default Table;