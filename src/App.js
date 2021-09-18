import React from 'react';
import UserCard from './components/UserCard';
import data from "./components/UserCard/data"




function App() {
  return (
   <React.Fragment>
     <UserCard 
     user = {data}
/>
   </React.Fragment>
  );
}

export default App;
