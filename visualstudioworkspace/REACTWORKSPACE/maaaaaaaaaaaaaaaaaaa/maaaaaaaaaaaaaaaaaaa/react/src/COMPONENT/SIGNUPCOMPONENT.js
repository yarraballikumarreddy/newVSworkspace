import React, { Component } from 'react'
import axios from 'axios';
export class SIGNUPCOMPONENT extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            email:'',
            username:'',
            password:''
        }
    }
    changeHandler =event => {
        this.setState({[event.target.name] :event.target.value})
}
    handleSubmit = event=>{
        event.preventDefault();

        axios.post('http://localhost:8081/SignupPage',this.state)
        .then(res=>{
            console.log(res.data);
            alert('SucseFully Signup')
        })
    }
    
    render() {
        return (
            <div  className="container">
            <div  className="row">
            <div className="col-md-4"></div>
            <div   className="col-md-4">
                 <form onSubmit={this.handleSubmit}>
                 <div  className="form-group">
                        <label>Enter ID</label>
                         <input type="text"  onChange={this.changeHandler} name="id"   className="form-control" />
                     </div>
                     <div  className="form-group">
                         <label>Enter Email</label>
                         <input type="text"  onChange={this.changeHandler} name="email"   className="form-control"  />
                     </div>
                     <div  className="form-group">
                         <label>Enter UserName</label>
                        <input type="text" onChange={this.changeHandler} name="username"   className="form-control"/>
                     </div>
                     <div  className="form-group">
                         <label>Enter Password</label>
                        <input type="text" onChange={this.changeHandler} name="password"   className="form-control"/>
                     </div>
                     <input type="submit"  className="btn btn-primary btn-block" value="Submit" />
                     {/* <button type="submit" className="btn btn-primary btn-block">Add</button> */}
                
                </form>
                </div>
                <div  className="col-md-4"></div>
            </div>
        </div> 
        )
    }
}

export default SIGNUPCOMPONENT
