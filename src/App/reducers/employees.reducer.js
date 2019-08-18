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
   },
   '1': {
     id: 0,
     FirstName: '1',
     MiddleInitial: 'T',
     LastName: '1',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '2': {
     id: 0,
     FirstName: '2',
     MiddleInitial: 'T',
     LastName: '2',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '3': {
     id: 0,
     FirstName: '3',
     MiddleInitial: 'T',
     LastName: '3',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '4': {
     id: 0,
     FirstName: '4',
     MiddleInitial: 'T',
     LastName: '4',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '5': {
     id: 0,
     FirstName: '5',
     MiddleInitial: 'T',
     LastName: '5',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '6': {
     id: 0,
     FirstName: '6',
     MiddleInitial: 'T',
     LastName: '6',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '7': {
     id: 0,
     FirstName: '7',
     MiddleInitial: 'T',
     LastName: '7',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '8': {
     id: 0,
     FirstName: '8',
     MiddleInitial: 'T',
     LastName: '8',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '9': {
     id: 0,
     FirstName: '9',
     MiddleInitial: 'T',
     LastName: '9',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
   '10': {
     id: 0,
     FirstName: '10',
     MiddleInitial: 'T',
     LastName: '10',
     DateOfBirth: '05/11/1990',
     DateOfEmployment: '05/15/2019',
     Status: 'Active'
   },
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