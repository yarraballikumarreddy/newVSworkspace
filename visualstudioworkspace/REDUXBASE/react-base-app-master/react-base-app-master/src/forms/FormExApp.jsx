import React from 'react';

class FormExApp extends React.Component{

    constructor(){
        super();
        this.state = {userName:'hari',email:'hari@gmail.com'};
        this.updateData = this.updateData.bind(this);
    }

    updateData(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    render(){
        return (
            <div> 
            <form action="#" method="get">
                
                <label> User Name: </label> 
                <input type="text" name="userName" onChange={this.updateData} 
                    value={this.state.userName}>
                </input>
                
                <label> Email : </label>
                <input type="text" name="email" onChange={this.updateData}
                     value = {this.state.email}> 
                </input>
                
            </form> 

            <div> 
                <span>  {this.state.userName} </span> 
                <span>  {this.state.email} </span> 
            </div>


             </div>   
        );
    }
}

export default FormExApp;

