import React from 'react'
import Card from './card';


const Cardlist = ({ profiles }) => {
  return (
    <div>
      {profiles.map((profile) => (
        <Card profile={profile} />
      ))}
    </div>
  );
};


export default Cardlist


