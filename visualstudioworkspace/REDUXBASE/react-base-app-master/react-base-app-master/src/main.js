import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
//import Hellow from './hellow/Hellow.jsx';
//import PageLayout from './layout/PageLayout.jsx';
//import DynamicTableApp from './datatable/DynamicTableApp.jsx';
//import StudentApp from './studentex/StudentApp.jsx';
//import FormExApp from './forms/FormExApp.jsx';
//import DataTable from './datatable/DataTable.jsx';
//import DataTable from './DivDataTable/DataTable.jsx'

ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<Hellow />, document.getElementById('n1'));
//ReactDOM.render(<PageLayout/>, document.getElementById('app'));
//ReactDOM.render(<DynamicTableApp/>, document.getElementById('app'));

/* ReactDOM.render(<div>  <StudentApp userName="Krishna" email="krishna@gmail.com"/>
<StudentApp userName="kuldeep" email="kuldeep@gmail.com"/> 
<StudentApp/> 
</div>, document.getElementById('app')); */

// ReactDOM.render(<FormExApp/> , document.getElementById('app') );

 /*var headings = ['Id', 'Name','Age'];
 var data =   [
                 {userId:'1',userName:'Kuldeep',age:23},
                 {userId:'2',userName:'Ravi',age:24},
                 {userId:'3',userName:'RVJ',age:24},
                 {userId:'4',userName:'PRukey',age:25},
                 {userId:'5',userName:'Raghu',age:28},
                 {userId:'6',userName:'Jaya',age:29}
             ];

ReactDOM.render(<DataTable headings={headings}  tdata={data}/> , document.getElementById('app') );
*/