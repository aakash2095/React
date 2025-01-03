import React from 'react'


const card = ({ profile }) => {
    return (
     <>
     <div className='card-list'>
        <img src={profile.avatar_url} alt="" />
        <h3>{profile.login}</h3>
        </div>
        </>
     
    );
  };

export default card