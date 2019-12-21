import React from 'react';

class App extends React.Component {
   render() {

       var x = 2;
       var mystl  = {
           color: 'red'
       }

      return (
         <div style={mystl}>
            <h1> Hello World!!! Bangalore</h1>
            <span> Expression :: {2+2} </span>
            {/* test expression ... */}
            <h3> {x == 2 ? 'True':'False' } </h3>    

         </div>
      );


   }
}

export default App;
