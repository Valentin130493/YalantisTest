import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addBirthday} from '../redux/homeReducer'

const User = (props) => {
    const birthdays = useSelector(state => state.homeReducer.birthdays)
    const [selectedOption, setSelectedOption] = useState(birthdays.some(item => item.lastName === props.user.lastName) ? 'active' : "notActive")
    const dispatch = useDispatch()
        const handleChangeRadio = (e) => {
        setSelectedOption(e.target.value);
        if(e.target.value === 'active') {
           const changedArray = [...birthdays, props.user]
           localStorage.setItem('birthdays', JSON.stringify(changedArray))
           dispatch(addBirthday(changedArray))
        } else {
           const changedArray = birthdays.filter(item => item.lastName !== props.user.lastName)
           localStorage.setItem('birthdays', JSON.stringify(changedArray))
           dispatch(addBirthday(changedArray))
        }
      };
    return(
    <div style={{width: "200px"}}>
       <p style={{textShadow: selectedOption === 'active'? '2px 2px 1px pink': 'none'}}>
           {`${props.user.lastName} ${props.user.firstName}`}
       </p>
       <input
        type="radio"
        value="notActive"
        checked={selectedOption === "notActive"}
        onChange={handleChangeRadio}
      />
      not active
      <input
        type="radio"
        value="active"
        checked={selectedOption === "active"}
        onChange={handleChangeRadio}
      />
       active

    </div>

    )
        
   }
   export default User
