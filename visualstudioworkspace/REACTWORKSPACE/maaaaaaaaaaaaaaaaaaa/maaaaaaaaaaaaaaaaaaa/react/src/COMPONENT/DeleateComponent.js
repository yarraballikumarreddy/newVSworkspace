import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import RetriveComponent from './RetriveComponent';
class DeleateComponent extends Component  {
   constructor(props) {
     super(props)
   
     this.state = {
      id:this.props.match.params.id
     }
     console.log(this.state.id);
     axios.post(`http://localhost:8081/DeleteData`,this.state)
     .then(res => {
      alert('SucseFully Deleated')
     })
   }
    render() {
        return (
            <div>
           <RetriveComponent />
          </div>
        )
      }
    }
export default DeleateComponent
