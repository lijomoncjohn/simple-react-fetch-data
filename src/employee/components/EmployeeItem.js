import React, { useState } from 'react';

import './EmployeeItem.css'
import { useHistory } from 'react-router-dom';
import Card from '../../component/UIElements/Card';
import EmployeeList from './EmployeeList';
import Modal from '../../component/UIElements/Modal';
import EmployeeDetails from './EmployeeDetails';

const EmployeeItem = (props) => {

    const [showMap, setShowMap] = useState(false);

    const data = props

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    return (
        <React.Fragment>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<button className="button" onClick={closeMapHandler}>CLOSE</button>}
            >
                <div className="map-container">
                    <EmployeeDetails 
                        name={props.name}
                        image={props.image}
                        category={props.category}
                        empcode={props.empcode}
                        contact={props.contact}
                        address={props.address}
                        description={props.description}
                    />
                </div>
            </Modal>
            <li>
            <Card>
                <div className="container" onClick={openMapHandler}>
                    <div className="img-container">
                        <img src={props.image} alt={props.name} />
                    </div>
                    
                    <div className="content">
                        <div className="head">
                            <p>{props.name.toUpperCase()}</p>
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
        </React.Fragment>
        
    )
}

export default EmployeeItem;