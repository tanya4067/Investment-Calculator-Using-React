import logo from './assets/investment-calculator-logo.png';
import InvestmentForm from './InvestmentForm';
import Header from './Header';
import Table from './Tabel';
import { useState } from 'react';
import {userInputData} from './InvestmentForm.js';
function App() {
  const [userInputData,setUserInputData]=useState(null);
  const[yearlyData,setYearlyData]=useState(null);
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results
    setUserInputData(userInput);
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearlyData);
    // do something with yearlyData ...
  };
  return (
    <div>
      
      <Header/>
      <InvestmentForm userInputData={calculateHandler}/>
      {!userInputData && <p>No investment calculated yet!</p>}
      {userInputData && <Table data={yearlyData}/>}
      
      
    </div>
  );
}

export default App;
