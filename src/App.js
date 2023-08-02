import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState();
   const showEmployees=true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
      <>
      <input 
        type='text' 
        onChange={(e)=> {
          console.log(e.target.value);
          setRole(e.target.value);
      }}
      />
        <Employee name = "Marta" role = "Intern" />
        <Employee name = "Anna"  role={role}/>
        <Employee name = "Eryk"/>
        </>
  ):(
            <p>
              you cant see employees
            </p>
              )}
        </div>
    );
}

export default App;
