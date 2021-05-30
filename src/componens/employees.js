import UserBlock from './userBlock'

const alphabeth = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','O','P'
];

const Employees = ( ) => {
 return(
 <div style={{borderRight: '1px solid grey'}}>
     <p>
     Employees
     </p>
     <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}> 
         {alphabeth.map(item => {
         return <UserBlock letter={item} key={item}/>
     })}
     </div>
 </div>
 )
     
}
export default Employees