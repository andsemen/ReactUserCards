import React from 'react';
import UserCard from './components/UserCard';
import data from "./components/UserCard/data"




function App() {

  const generate = data.map (user => {
   return <UserCard key ={user.id} user ={user}   />
  })
  return (
   <div>
     {generate}
   </div>
  );
}

export default App;
