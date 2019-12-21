import React from 'react';


class Accordion extends React.Component{

    render(){
        var maxSize = 3;
        return(
            <div>
                for (var i=0; i< maxSize; i++){
                    <div>
                    <AccordionHader> </AccordionHader>
                    <AccordionBody> </AccordionBody>
                    </div>
                }
            </div>    
        );
    }

}

class AccordionHader extends React.Component{

    render(){
        return (
            <div> Head </div>
        );
    }

}

class AccordionBody extends React.Component{

    render(){
        return (
            <div> Body </div>
        );
    }
}


export default Accordion;
