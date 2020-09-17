import React,{useState} from 'react'


const Employees = ({employees}) => {
    const [name, setName ] = useState('')
    return (
        <React.Fragment>
         <input className = "input"
                type = "text"
                value = {name}
                onChange = {e => setName(e.target.value)}
         />
         <ul>
             {
                 employees.filter(employee=>employee.name.toLowerCase().includes(name.toLowerCase())).map(employee =>(
                     <li key = {employee.name} data-testid = "employee">
                        {employee.name}
                     </li>
                 ))
             }
         </ul>
        </React.Fragment>
    )
}
export default Employees
