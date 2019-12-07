import React from 'react';
import styled from 'styled-components';

const Card = (props) => {

    const Card = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;

        div {
            
    }

        img {
            width: 50%;
            
            border-radius: 3px;
            margin-right: 20px;  
        }
    `
    const Chart = styled.img`
    
    width: 20em;
    `
    return (
        <Card className='card'>
              <img src={props.avatar} />
  <div className="card-info">
    <h3 className="name">{props.name}</h3>
    <p className="username">{props.username}</p>
    <p>Location: {props.location === null ? "No location provided." : props.location} </p>
    <p>
      <a href={props.profile}>{props.profile}</a>
    </p>
    <p>Followers: {props.followers} </p>
    <p>Following: {props.following} </p>
    
  </div>

  <Chart src={`http://ghchart.rshah.org/${props.username}`} alt={`${props.username}'s chart`} />
        </Card>
    );
}

export default Card;
