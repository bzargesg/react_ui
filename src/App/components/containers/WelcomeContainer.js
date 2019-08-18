import Welcome from '../Welcome';
import { connect } from 'react-redux'
import { employeeActions } from '../../actions/employee.actions.js'
const mapStateToProps = state =>({
  ...state
})
const mapDispatchToProps = dispatch => ({
  add: (employee)=>dispatch(employeeActions.add(employee)),
  deactivate: (id)=>dispatch(employeeActions.deactivate(id)),
  update: (employee)=>dispatch(employeeActions.update(employee))
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)