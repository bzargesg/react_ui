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
      <div>
        <div>First: {this.props.employee.FirstName}</div>
        <div>Last: {this.props.employee.LastName}</div>
        <div>DOB: {this.props.employee.DateOfBirth}</div>
        <div>DOE: {this.props.employee.DateOfEmployment}</div>
        <div>MI: {this.props.employee.MiddleInitial}</div>
        <div 
        style={{'color': this.props.employee.Status ==='Active' ? 'green' : 'red'}}
        onClick={()=>{
          this.props.deactivate(this.props.employee.id)
        }}>Status: {this.props.employee.Status}</div>
        <button onClick={this.editEmployee}>Edit Employee</button>
      </div>
    ) : this.showEditEmployee();
  }
  showEditEmployee(){
    return(
      <form onSubmit={this.editEmployeeSubmit}>
      <div>First: <input type="text" name="first" onChange={this.changeEmployeeField} placeholder={this.props.employee.FirstName}></input></div>
      <div>Last: <input type="text" name="last" onChange={this.changeEmployeeField} placeholder={this.props.employee.LastName}></input></div>
      <div>DOB: <input type="text" name="DOB" onChange={this.changeEmployeeField} placeholder={this.props.employee.DateOfBirth}></input></div>
      <div>DOE: <input type="text" name="DOE" onChange={this.changeEmployeeField} placeholder={this.props.employee.DateOfEmployment}></input></div>
      <div>MI: <input type="text" name="middle" onChange={this.changeEmployeeField} placeholder={this.props.employee.MiddleInitial}></input></div>
      <div 
      style={{'color': this.props.employee.Status ==='Active' ? 'green' : 'red'}}
      onClick={()=>{
        this.props.deactivate(this.props.employee.id)
      }}>Status: {this.props.employee.Status}</div>
      <button >Done</button>
    </form>
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
  showLess(){
    return(
      <div>
        <div>First: {this.props.employee.FirstName}</div>
        <div>Last: {this.props.employee.LastName}</div>
      </div>
    )
  }
  showHandler(e){
    this.setState({showMore: !this.state.showMore})
  }
  render(){
  return(
    <div>
      {this.state.showMore ? this.showAll() : this.showLess()}
      <button onClick={this.showHandler}>{!this.state.showMore ? 'Show More' : 'Show Less'}</button>
    </div>
  )
}
}
export default Employee;