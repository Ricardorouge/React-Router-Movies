import React from 'react';
import { Link,useHistory } from 'react-router-dom';

export default function SavedList(props) {
  const history = useHistory();
  
  const returnHome =()=>{
    history.push('/');
  }
  return (
    <div className="saved-list">
      
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={returnHome}>Home</div>
      
    </div>
  );
}
