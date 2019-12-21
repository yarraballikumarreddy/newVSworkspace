import React from 'react';
import styles from './datatable.css';
import cx from 'classnames';

class DataTable extends React.Component{

    render(){
        return(
            <div className={styles.rTable}>
                <DataTableHead headings={this.props.headings}> </DataTableHead>
                <div className={styles.rTableRowGroup}>
                {this.props.tdata.map(  (data,i) =>  
                    <DataTableRow  key={i} index={i} tdata={data} > </DataTableRow>
                    )
                }
                </div>
            </div>  
        );
    }

}

class DataTableHead extends React.Component{

    render(){
        return(
            <div className={styles.rTableHead}>
                {this.props.headings.map( (heading , i) => 
                     <div key={i} className={styles.rTableCell} >{heading} </div>)
                }
            </div>
        );
    }
}

class DataTableRow extends React.Component{

    constructor(){
        super();
        this.rowRef = null;
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouserOut = this.handleMouserOut.bind(this);
        this.setRowRef = this.setRowRef.bind(this);
    }

    setRowRef(row){
        this.rowRef = row;
    }

    handleMouseOver(){
        console.log('handleMouseOver');
        this.rowRef.classList.add(`${styles.hoverShadow}`);
    }

    handleMouserOut(){
        console.log('handlemouseOut');
        this.rowRef.classList.remove(`${styles.hoverShadow}`);
    }

    render(){
        var obj = null;
        return(  
                <div className={cx(`${styles.rTableRow}`, {[`${styles.eventRowColor}` ] : this.props.index % 2==0} )}
                        ref={this.setRowRef }
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouserOut} >
                       {
                           Object.keys(this.props.tdata).map( (key, i) =>  
                            <div key={i} className={styles.rTableCell} >{this.props.tdata[key]} </div>
                           )
                       }
                       
                    </div>   
               
        );
    }

}

export default DataTable;