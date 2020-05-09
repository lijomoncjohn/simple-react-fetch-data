import React from 'react';

const EmployeeItem = (props) => {
    return (
        <li>
            <div>
                <h2>{props.name}</h2>
            </div>
        </li>
    )
}

export default EmployeeItem;