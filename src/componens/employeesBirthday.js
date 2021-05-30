import {useSelector} from 'react-redux'
import moment from 'moment'


const month = [
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novermber",
    "December",
    "January",
    "February",
    "March",
    "April",
  ];

const EmployeesBirthday = ( ) => {
    const birthdays = useSelector(state => state.homeReducer.birthdays)
    const neededMonth = month.filter((item) =>
    birthdays.some((user) => moment(user.dob).format("MMMM") === item)
  );
    return(
    <div>
        <h4>Employees Birthday</h4>
        {neededMonth.length
        ? neededMonth.map((month) => {
            const certainMonthUsers = birthdays.filter(
              (item) => moment(item.dob).format("MMMM") === month
            ).sort((a, b) => (a?.lastName[0] > b?.lastName[0]) ? 1 : -1);
                        return (
              <div key={month}>
                <h3 style={{paddingLeft:20}}>{month}</h3>
                <ul>
                  {certainMonthUsers.map((user) => {
                    return (
                      <li key={user.lastName}>{`${user.lastName} ${user.firstName} - ${moment(
                        user.dob
                      ).format("MMMM D, YYYY")}`}</li>
                    );
                  })}
                </ul>
              </div>
            );
          })
        : <h3 style={{textAlign: 'center', fontWeight: 400}}>Birthdays list is empty</h3>}
    </div>
    )
        
   }
   export default EmployeesBirthday