import React from 'react';
import UserCard from './components/UserCard';
import data from "./components/UserCard/data"




function App() {

  const generateUserCards = data.map (user => {
   return <UserCard key ={user.id} user ={user}   />
  })
  return (
   <>
     {generateUserCards}
   </>
  );
}

export default App;
