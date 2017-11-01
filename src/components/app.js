import React, { Component } from 'react';
import Row from './Row';
import Thead from './Thead';
import { Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rows : []
    }
    // Bind these mathods to refrence of App object
    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
 // Add a new Row
   addRow() {
    const newRows = this.state;
    newRows.rows.push(<Row id = {newRows.rows.length + 1} handleClick = {this.deleteRow}/>);
    this.setState(newRows);
  }
// Delete a row
  deleteRow(e) {
    const array = this.state.rows;
    let index = array.indexOf(e.target.value)
    array.splice(index, 1);
    this.setState({rows: array });
  }

  render() {
    return (
      <div className='container'>
          <h1>Custom Table Edit</h1>
          <button type="button" className="btn btn-info" onClick={this.addRow} >Add Employee</button>
          <form method="POST">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                 <Thead />
              </thead>
                  {this.state.rows.map((row, index) => {
                    console.log(row);
                    return <tbody key={index}>{row}</tbody>
                  })}
            </table>
          </div>
            <Link to="/thankYou">
                <button className="btn btn-primary" type="submit" value="Submit">Submit</button>
            </Link>
          </form>
      </div>
    );
  }
}
