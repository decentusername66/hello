import './index.css';
import Employee from './components/Employee';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState();
  const[employees, setEmployees]=useState(
    [
      {id:1,
        name: "Anna", 
      role: "Developer", 
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"},
      {id:2,
      name: "Steven", 
      role: "SCRUM Master", 
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"},
      {id:3,
      name: "Marta", 
      role: "Data Analyst", 
      img: "https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/"},
      {id:4,
      name: "Malgorzata", 
      role: "Developer", 
      img: "https://images.pexels.com/photos/3886347/pexels-photo-3886347.jpeg?auto=compress&cs=tinysrgb&w=600/"},
      {id:5,
      name: "Mariusz", 
      role: "Senior Developer", 
      img: "https://images.pexels.com/photos/3008355/pexels-photo-3008355.jpeg?auto=compress&cs=tinysrgb&w=600/"},
      {id:6,
      name: "Dariusz", 
      role: "Senior DB Developer", 
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600/"},
   ]);

function updateEmployee(id, newName, newRole) {
  const updatedEmployees= employees.map((employee) => {
  if (id == employee.id) {
    return {...employee, name: newName, role: newRole};
    }

    return employee;
  });
  setEmployees(updatedEmployees);
}

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
        {employees.map((employee)=>{
          //console.log(employee);
              return(<Employee 
                  key={employee.id}
                  id={employee.id}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  updateEmployee = {updateEmployee}
    />
          );
        })}
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
