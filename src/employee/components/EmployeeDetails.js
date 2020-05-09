import React from 'react';

import './EmployeeDetails.css'

function EmployeeDetails(props) {
    console.log("modal props", props);
    
    return (
        <div className="modal-container">
                    <div className="modal-img-container">
                        <img src={props.image} alt={props.name} />
                    </div>
                    
                    <div className="modal-content">
                        <div className="modal-head">
                            <p>{props.name.toUpperCase()}</p>
                            <span>{props.category.toUpperCase()}</span>
                            <br/>
                        </div>
                        <div>
                            <p>{props.description}</p><br/>
                        </div>
                        <div>
                            <p>Employee Code: <span>{props.empcode}</span></p>
                        </div>
                        <div>
                            <p>Address: <span>{props.address}</span></p>
                        </div>
                        <div>
                            <p>Contact: <span>{props.contact}</span></p>
                        </div>
                    </div>
                    
                </div>
    );
}

export default EmployeeDetails;