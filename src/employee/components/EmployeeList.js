import React from 'react';
import EmployeeItem from './EmployeeItem';

const EmployeeList = (props) => {
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
                />
            ))}
        </ul>
    )
}

export default EmployeeList;