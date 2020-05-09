import React from 'react';
import EmployeeItem from './EmployeeItem';
import './EmployeeList.css'

const EmployeeList = (props) => {

    console.log("props", props);
    
    
    if (props.items.length === 0) {
        return (
            <div>
                <h2>No user profiles found</h2>
            </div>
        )
    }

    return (
        <ul className="emp-list">
            {props.items.map(emp => (
                <EmployeeItem
                    key={emp.id}
                    name={emp.name}
                    image={emp.image}
                    category={emp.category}
                    empcode={emp.empcode}
                    contact={emp.contact}
                />
            ))}
        </ul>
    )
}

export default EmployeeList;