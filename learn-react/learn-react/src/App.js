import React, {useState} from 'react';
import Tweet from './Tweet'



function App(){



const [users, setUsers]=useState([{
  name:'Ben',
  message:31,
},{
  name:'Jack',
  message:'yep',
},{
  name:'Mair',
  message:'yep1',
},{
  name:'Mum',
  message:'yep2',
}])

// const increment = () => {
//   setCount(count + 1)
//   setRed(!isRed)
// }
  return(
    <div className="app">
    {users.map(user=>(
      <Tweet name={user.name} message={user.message}/>
    ))}
    </div>
  )
}

export default App;