import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postAction'
export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           title:'',
           body:''
        }
        
    }
    
    onChange=event=>{
        this.setState({[event.target.name]:event.target.value})
    }
    onSubmit=event=>{
       event.preventDefault();
       const post ={
           title:this.state.title,
           body:this.state.body
       };
       console.log(post,'=============================================');
       
        this.props.createPost(post)
    }
  
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}> 
                    <div>
                    <lable>Title:</lable>
                    <input type='text' onChange={this.onChange} name='title'/>
                    </div>
                    <div>
                    <lable>Body:</lable>
                    <input type='text'  onChange={this.onChange} name='body'/>
                    <br/>
                     <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
PostForm.prototypes={
  createPost:PropTypes.func.isRequired
}
export default connect(null,{createPost})(PostForm)
