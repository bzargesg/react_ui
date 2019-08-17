import Login from '../Login';
import { connect } from 'react-redux';
import { loginActions } from '../../actions/login.actions';

const mapStateToProps = state =>({
  ...state.login
})
const mapDispatchToProps = dispatch =>({
  login: (body)=>dispatch(loginActions.login(body))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)