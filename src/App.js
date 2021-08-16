import './App.css';
import Context_provider from './components/Context_provider';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Customizedroute from './components/Customizedroute';
import Forgotpassword from './components/Forgotpassword';
function App() {
  return (
    <>
      {/* signup component will behave as the children which can access the context methods and values */}
      <Context_provider>
        <Router>
          <Switch>
            <Route exact path='/signup' component={SignUp}/>
            <Route exact path='/signin' component={Login}/>
            <Route exact path='/forgot-password' component={Forgotpassword}/>
            <Customizedroute exact path='/' component={Home}/>
          </Switch>
        </Router>
      </Context_provider>
    </>
  );
}
///55393@error
export default App;
