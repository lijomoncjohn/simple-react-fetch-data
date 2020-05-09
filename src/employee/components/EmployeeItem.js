import React from 'react';

import './EmployeeItem.css'
import { useHistory } from 'react-router-dom';
import Card from '../../component/UIElements/Card';

const EmployeeItem = (props) => {

    function handleClick() {
    }

    return (
        <li>
            <Card onClick={{handleClick}}>
                <div className="container">
                    <div className="img-container">
                        <img src={props.image} alt="" />
                    </div>
                    
                    <div className="content">
                        <div className="head">
                            <p>{props.name}</p>
                            <span>{props.category}</span>
                        </div>
                        <div className="data">
                            <div className="inner-data">
                                <p>Contact</p>
                                <span>{props.contact}</span>
                            </div>
                            <div className="inner-data">
                                <p>Employee Code</p>
                                <span>{props.empcode}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Card>
        </li>
    )
}

export default EmployeeItem;