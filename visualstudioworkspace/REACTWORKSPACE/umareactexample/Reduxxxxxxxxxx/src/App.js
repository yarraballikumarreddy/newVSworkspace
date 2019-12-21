import React,{Component} from 'react';
import './App.css';
import  Post from './Components/Post';
import  PostForm  from './Components/PostForm';
import {Provider} from 'react-redux';
import store from './store';
class App extends Component {
  render(){
   
    return (
      <Provider store={store}>
       <div className="App">
       <Post/>
       <PostForm/>
       </div>
      </Provider>
     
    );
  }
  
}

export default App;
