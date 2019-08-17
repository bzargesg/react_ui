import AddEmployee from '../AddEmployee';
import { connect } from 'react-redux'
import { employeeActions } from '../../actions/employee.actions.js'
const mapStateToProps = state =>({
})
const mapDispatchToProps = dispatch => ({
  add: (employee)=>dispatch(employeeActions.add(employee))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee)