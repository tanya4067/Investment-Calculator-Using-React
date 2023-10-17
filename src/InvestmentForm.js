import './index.css';
import { useState } from 'react';
const InvestmentForm = (props) =>
{
    const InitialUserInput =
        {
            'current-savings':1000,
            'yearly-contribution':10000,
            'expected-return':8,
            'duration':10,
        }

    const [userInput,setUserInput]=useState(InitialUserInput);
    const submitHandler =(event)=>
    {
        event.preventDefault();
        props.userInputData(userInput);
    }
    const resetHandler =()=>
    {
        setUserInput(InitialUserInput);
    }
    const changeHadler =(input,value)=>
    {
        setUserInput((prevInput)=>{
            return {
                ...prevInput,
                [input]:value,
            };
        }
        );
        
    }
    
    return(
        <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" onChange={(event)=>changeHadler('current-savings',event.target.value)} id="current-savings" value={userInput['current-savings']} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" onChange={(event)=>changeHadler('yearly-contribution',event.target.value)} id="yearly-contribution" value={userInput['yearly-contribution']} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" onChange={(event)=>changeHadler('expected-return',event.target.value)} id="expected-return" value={userInput['expected-return']} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" onChange={(event)=>changeHadler('duration',event.target.value)} id="duration" value={userInput['duration']} />
          </p>
        </div>
        <p className="actions">
          <button type="reset" onClick={resetHandler} className="buttonAlt">
            Reset
          </button>
          <button type="submit"  className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}
export default InvestmentForm;