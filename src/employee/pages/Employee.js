import React, { Component } from 'react'
import EmployeeList from '../components/EmployeeList';

export default class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employees: [],
            loading: true
        } 
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/http://aryu.co.in/tracking/viewreport.php')
        // USING HEROKUAPP IS THE EASIEST WAY TO SOLVE CORS ISSUES
        // CAN ALSO SOLVE CORS ISSUES BY INSTALLING CORS PLUGIN IN YOUR SYSTEM
        // BUT THE BEST WAY IS TO CONFIGURE YOUR SERVER(PACKAGE.JSON SINCE U ARE USING REACT) TO ACCESS THE HTTP HEADER
        
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData.Success[0]);
            this.setState({
                employees: jsonData.Success,
                loading: false
            })
        })
    }

    render(){
        if(this.state.loading) {
            return <div><h5 style={{textAlign: "center"}}>Loading...</h5></div>
        }

        return <EmployeeList items={this.state.employees} />
    }
}