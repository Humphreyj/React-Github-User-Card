import React from 'react';
import styled from 'styled-components';

const Card = (props) => {

    const Card = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;

        img {
            width: 150px;
            height: 150px;
            border-radius: 3px;
            margin-right: 20px;  
        }
    `
    return (
        <Card className='card'>
              <img src={props.avatar} />
  <div className="card-info">
    <h3 className="name">{props.name}</h3>
    <p className="username">{props.username}</p>
    <p>Location: {props.location} </p>
    <p>
      <a href={props.profile}>{props.profile}</a>
    </p>
    <p>Followers: {props.followers} </p>
    <p>Following: {props.following} </p>
    <p>Bio: {props.bio} </p>
  </div>
        </Card>
    );
}

export default Card;
