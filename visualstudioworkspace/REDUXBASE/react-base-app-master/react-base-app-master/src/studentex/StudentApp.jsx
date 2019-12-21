import React from 'react';

class StudentApp extends React.Component {

   constructor(){
        super();
        this.displayInfo = this.displayInfo.bind(this);
    }

    render(){
        return (
            <div> {this.props.userName} {this.props.email} 
            <button onClick = {this.displayInfo}>Show Student Info</button>
            </div>
        );
    }

    displayInfo(){
        alert('UserName: ' + this.props.userName + ' Email::'+ this.props.email );
    }


}

StudentApp.defaultProps = {
    userName : 'HariKrishna',
    email : 'harikrishna@gmail.com'
}

export default StudentApp;