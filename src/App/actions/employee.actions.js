import { employeeConstants } from '../constants/employee.constants'
export const employeeActions = {
  list,
  add,
  update,
  deactivate
}
function list() {
  return {type: employeeConstants.LIST}
}
function add(employee) {
  return {
    type: employeeConstants.ADD,
    employee
  }
}
function update(employee) {
  return {
    type: employeeConstants.UPDATE,
    employee
  }
}
function deactivate(id) {
  return {
    type: employeeConstants.DEACTIVATE,
    id
  }
}