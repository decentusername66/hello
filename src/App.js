import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';

function App() {
  const [role, setRole] = useState();
   const showEmployees=true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input 
        type='text' 
        onChange={(e)=> {
          console.log(e.target.value);
          setRole(e.target.value);
      }}
      />
      <div className="flex flex-wrap justify-center">
        <Employee name = "Marta" role = "Intern" img = "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"/>
        <Employee name = "Anna"  role={role} img = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name = "Eryk"img = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name = "Marta" role = "Intern"img = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Employee name = "Anna"  role={role} img = "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"/>
        <Employee name = "Eryk"img = "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"/>
        <Employee name = "Marta" role = "Intern" img= "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name = "Anna"  role={role}img= "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Employee name = "Eryk"img= "https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </div>
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
