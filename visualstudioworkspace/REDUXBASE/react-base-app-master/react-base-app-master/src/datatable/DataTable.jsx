import React from 'react';
import styles from './datatable.css';
import cx from 'classnames';

class DataTable extends React.Component {
    render() {
        return (
            <table className={styles.tablestyle}>
                <thead>
                    <tr>
                        {
                            this.props.headings.map((heading, i) =>
                                <th key={i}
                                    className={cx(`${styles.tableHeadBg}`,
                                    `${styles.tableDataPadding}`)}> {heading} </th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.tdata.map((data, i) =>
                            <TableRow key={i} tid={i} tdata={data}> </TableRow>)
                    }
                </tbody>
            </table>
        );
    }
}

class TableRow extends React.Component {

    constructor(props) {
        super(props);
        this.rowRef = null;
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handlemouseOut = this.handlemouseOut.bind(this);
        this.setRowRef = this.setRowRef.bind(this);
    }
    setRowRef(row) {
        this.rowRef = row;
    }

    handleMouseOver() {
        console.log('handleMouseOver');
        this.rowRef.classList.add(`${styles.trhover}`);
    }

    handlemouseOut() {
        console.log('handlemouseOut');
        this.rowRef.classList.remove(`${styles.trhover}`);
    }

    render() {
        var evenChild = cx({ [`${styles.evenchild}`]: this.props.tid % 2 == 0 });

        return (
            <tr ref={this.setRowRef} className={evenChild} onMouseOver={this.handleMouseOver}
                onMouseOut={this.handlemouseOut}>

                <td className={styles.tableDataPadding}>
                    {this.props.tdata.userId} </td>
                <td className={styles.tableDataPadding}>
                    {this.props.tdata.userName} </td>
            </tr>
        );
    }
}

export default DataTable;