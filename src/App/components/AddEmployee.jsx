  import React from "react";
  class AddEmployee extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        Employee:{
      FirstName: '',
      LastName: '',
      MiddleInitial: '',
      DateOfBirth: '',
      DateOfEmployment: '',
      Status: 'Active'}
      }
      this.changeHandler=this.changeHandler.bind(this);
      this.activeHandler = this.activeHandler.bind(this);
      this.submitHandler=this.submitHandler.bind(this);
    }
    submitHandler(e){
      e.preventDefault();
      this.props.add(this.state.Employee)
    }
    /**
   * Bound to onChange of input
   * @param {Event} e
   */
  changeHandler(e){
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
    }
  }
  activeHandler(){
    let status = this.state.Employee.Status === 'Active' ? "Inactive" : "Active";
      this.setState({Employee: {...this.state.Employee,Status: status}})
  }
  
  render (){
    return(
      <form className="addEmployeeForm" onSubmit={this.submitHandler}>
        Add Employee:
        <input type="text" name="first" placeholder="first name" onChange={this.changeHandler}></input>
        <input type="text" name="last" placeholder="last name" onChange={this.changeHandler}></input>
        <input type="text" name="middle" placeholder="MI" onChange={this.changeHandler}></input>
        <input type="text" name="DOB" placeholder="DOB" onChange={this.changeHandler}></input>
        <input type="text" name="DOE" placeholder="DOE" onChange={this.changeHandler}></input>
        <div name="Active" onClick={this.activeHandler}
         style={this.state.Employee.Status==='Active' ? {"color": "green"} : {}}>Active</div>
        <div name="Active" onClick={this.activeHandler}
         style={this.state.Employee.Status==='Inactive' ? {"color": "red"} : {}}>Inactive</div>
        <input type="submit"></input>
      </form>
    )
  }
}
export default AddEmployee;