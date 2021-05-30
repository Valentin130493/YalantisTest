import {useSelector} from 'react-redux'
import User from './user'


const UserBlock = (props) => {
    const users = useSelector(state => state.homeReducer.users)
    const filterUsers = users.filter(item => item.lastName[0] === props.letter)
    return(
    <div style={{width: "200px"}}>
        <p>{props.letter}</p> 
        <div>
           {filterUsers.map(item =>  {
               return <User user={item} key={item.dob}/>
           })}
        </div>
    </div>
    )
        
   }
   export default UserBlock