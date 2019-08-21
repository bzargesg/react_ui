import React from 'react';
import Employee from './Employee'
import AddEmployeeContainer from './containers/AddEmployeeContainer'
import employeesIcon from '../../assets/images/employees.svg'
import employeeIcon from '../../assets/images/employee.svg'
class Welcome extends React.Component{
  constructor (props){
    super(props);
    this.state={
      addEmployee: false,
      employeePagination: 0
    }
    this.addEmployeeToggle = this.addEmployeeToggle.bind(this);
    this.pageChange = this.pageChange.bind(this)
  }
  addEmployeeToggle(e){
    this.setState({addEmployee: !this.state.addEmployee})
  }
  pageChange(e){
    let value = e.target.value;
    if(value === 'next'){
      if(this.state.employeePagination + 10 <= Object.keys(this.props.employee).length){
        this.setState({employeePagination: this.state.employeePagination + 10})
      }
    }else if(value === 'prev'){
      let newPagValue = this.state.employeePagination - 10
       if(newPagValue < 0){
        newPagValue = 0;
      }
      this.setState({employeePagination: newPagValue})
    }
  }
  render(){
  return(
  <div>
    <section id="intro" className="main special">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>Welcome to Simplifi Employee Managment Software</h2>
          </header>
          <p>From here you can add, list, and edit employees.</p>
        </div>
      </div>
    </section>

    <section id="list" className="main special">
      <header className="major">
        <span><img className='iconEmployees' src={employeesIcon} alt="Employees Icon" /></span>
        <h2>Employees</h2>
      </header>
      <div>Click on status to set to inactive or active</div>
      <footer className="major">
        <table>
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>DOB</th>
              <th>DOE</th>
              <th>MI</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
        
          {Object.keys(this.props.employee).map((employeeId, index)=>{
            if(index >= this.state.employeePagination && index < this.state.employeePagination + 10){
              return(
                <Employee employee={this.props.employee[employeeId]} deactivate={this.props.deactivate}
                  update={this.props.update} />
              )
            }
          })}
          </tbody>
          <tfoot>
            {this.state.addEmployee ?
            <AddEmployeeContainer addEmployee={this.addEmployeeToggle}/> : ''}
          </tfoot>
        </table>
        <div><button value="prev" onClick={this.pageChange}>prev</button><button value="next" onClick={this.pageChange}>next</button></div>
        <button onClick={this.addEmployeeToggle}>{this.state.addEmployee ? 'Minimize' : 'Add Employee'}</button>
      </footer>
    </section>
  </div>)
  }
}
/* Employees
<section id="add" className="main special">
      <header className="major">
        <span><img className='iconEmployees' src={employeeIcon} alt="Employee Icon" /></span><h2>Add New Employee</h2>
      </header>
      <footer className="major">
        <ul className="employee-list">
          <li class>
            {this.state.addEmployee ?
            <AddEmployeeContainer /> : ''}
          </li>
          <br></br>
          <button onClick={this.addEmployeeToggle}>{this.state.addEmployee ? 'Minimize' : 'Add Employee'}</button>
        </ul>
      </footer>
      <br></br>
    </section>
*/
export default Welcome;