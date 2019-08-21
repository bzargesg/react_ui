import React from 'react';
class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showMore: false,
      editEmployee: false,
      Employee:{
        id: this.props.employee.id,
        FirstName: this.props.employee.FirstName,
        LastName: this.props.employee.LastName,
        MiddleInitial: this.props.employee.MiddleInitial,
        DateOfBirth: this.props.employee.DateOfBirth,
        DateOfEmployment: this.props.employee.DateOfEmployment,
        Status: this.props.employee.Status}
    }
    this.showHandler = this.showHandler.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.changeEmployeeField = this.changeEmployeeField.bind(this);
    this.editEmployeeSubmit = this.editEmployeeSubmit.bind(this);
  }
  editEmployee(){
    this.setState({editEmployee: !this.state.editEmployee})
  }
  showAll(){
    return !this.state.editEmployee ? (
      <tr>
        <td>{this.props.employee.FirstName}</td>
        <td>{this.props.employee.LastName}</td>
        <td>{this.props.employee.DateOfBirth}</td>
        <td>{this.props.employee.DateOfEmployment}</td>
        <td>{this.props.employee.MiddleInitial}</td>
        <td 
        style={{'color': this.props.employee.Status ==='Active' ? 'green' : 'red'}}
        onClick={()=>{
          this.props.deactivate(this.props.employee.id)
        }}>Status: {this.props.employee.Status}</td>
        <td>
        <button onClick={this.editEmployee}>Edit Employee</button></td>
        </tr>
    ) : this.showEditEmployee();
  }
  showEditEmployee(){
    return(
      <tr>
      <td><input type="text" name="first" onChange={this.changeEmployeeField} placeholder={this.props.employee.FirstName}></input></td>
      <td><input type="text" name="last" onChange={this.changeEmployeeField} placeholder={this.props.employee.LastName}></input></td>
      <td><input type="text" name="DOB" onChange={this.changeEmployeeField} placeholder={this.props.employee.DateOfBirth}></input></td>
      <td><input type="text" name="DOE" onChange={this.changeEmployeeField} placeholder={this.props.employee.DateOfEmployment}></input></td>
      <td><input type="text" name="middle" onChange={this.changeEmployeeField} placeholder={this.props.employee.MiddleInitial}></input></td>
      <td 
      style={{'color': this.props.employee.Status ==='Active' ? 'green' : 'red'}}
      onClick={()=>{
        this.props.deactivate(this.props.employee.id)
      }}>Status: {this.props.employee.Status}</td>
      <td><button onClick={this.editEmployeeSubmit}>Done</button></td>
    </tr>
    )
  }
  /**
   * Bound to onChange of input
   * @param {Event} e
   */
  changeEmployeeField(e){
    if(e.target.name ==='first'){
      this.setState({Employee: {...this.state.Employee, FirstName: e.target.value}})
    }else if(e.target.name === 'last'){
      this.setState({Employee: {...this.state.Employee, LastName: e.target.value}})
    }else if(e.target.name === 'middle'){
      this.setState({Employee: {...this.state.Employee,MiddleInitial: e.target.value}})
    }else if(e.target.name === 'DOB'){
      this.setState({Employee: {...this.state.Employee,DateOfBirth: e.target.value}})
    }else if(e.target.name === 'DOE'){
      this.setState({Employee: {...this.state.Employee,DateOfEmployment: e.target.value}})
    }else if(e.target.name === 'Active'){
      this.setState({Employee: {...this.state.Employee,Status: 'Active'}})
    }else if(e.target.name === 'Inactive'){
      this.setState({Employee: {...this.state.Employee,Status: 'Inactive'}})
    }
  }
  editEmployeeSubmit(e){
    e.preventDefault();
    this.props.update(this.state.Employee)
    this.setState({editEmployee: !this.state.editEmployee})
  }

  showHandler(e){
    this.setState({showMore: !this.state.showMore})
  }
  render(){
  return this.showAll()
}
}
export default Employee;