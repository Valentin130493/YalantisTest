import './App.css';
import Employees from './componens/employees'
import EmployeesBirthday from './componens/employeesBirthday'
import {useEffect} from 'react'
import {addUser, addBirthday} from './redux/homeReducer'
import {useDispatch} from 'react-redux'
import axios from 'axios'


function App() {
 const dispatch = useDispatch();
  useEffect (() => { 
    axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then(res => { 
      dispatch(addUser(res.data))
    })
    if (localStorage.getItem("birthdays")) {
      dispatch(addBirthday(JSON.parse(localStorage.getItem("birthdays"))));
    }
  },[dispatch])
  return (
    <div style={ {display: 'flex', width: '100%'} }>
     <div style={{width: '60%'}}> <Employees /> </div>
     <div style={{width: '40%'}}> <EmployeesBirthday /> </div>
    </div>
    
  );
}

export default App;
