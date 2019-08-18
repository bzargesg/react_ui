import  {employeeConstants}  from '../constants/employee.constants.js';

//Employee Reducer
export default function employee(state = {
  '0': {
     id: 0,
     FirstName: 'testfirst',
     MiddleInitial: 'T',
     LastName: 'testLast',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   }
 }, action) {
  let newState = Object.assign({}, state);
  switch(action.type){
    case employeeConstants.LIST://List just returns the list
      return newState;
    case employeeConstants.ADD://Add new Employee object, indexed by id number

      let newId=Object.keys(state).length;
      newState[newId] = {...action.employee, id: newId};
      return newState;
    case employeeConstants.UPDATE://Check to see if exists, then modify
      if(newState[action.employee.id]){
        newState[action.employee.id] = action.employee;
      }
      return newState;
    case employeeConstants.DEACTIVATE://Changes active to inactive or vice versa
        newState[action.id].Status = newState[action.id].Status === 'Inactive' ? 'Active' : 'Inactive';
      return newState
    default: 
    return newState;
  }
}