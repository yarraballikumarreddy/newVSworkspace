import React from 'react';

class DynamicTableApp extends React.Component {

    constructor(){
        super();
        this.state = { 
            data : [
                {userId:'1',userName:'Kuldeep'},
                {userId:'2',userName:'Ravi'},
                {userId:'3',userName:'RVJ'}
            ]
        };
    }

    render(){

        return(
           <div>
                <table>
                    {
                        this.state.data.map(function(student){
                            return <tr> <td>{student.userId} </td> 
                                    <td>{student.userName} </td>  </tr>
                        })
                    }
                </table>
                <ul>
                    <li> { this.state.data.map( (student ) => <li>{student.userId} {student.userName}</li>)
                        } </li>
                </ul>

            </div>
        );
    }

}

export default DynamicTableApp;