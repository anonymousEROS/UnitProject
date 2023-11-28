
import React, { useState } from 'react'
import {PgContainer,Header} from './pageElements'
import {Button} from './codeElements';
import {ArrowForward, ArrowRight} from '../components/HeroSection/HeroElements'
import { useHistory } from 'react-router-dom';
import story from '../Audio/Response.mp3'

const newWorldOrder = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hover, setHover] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  const onHover = () => {
    setHover(!hover)
}

const handleClick = () => {
  // Replace '/NWO' with the actual path you want to navigate to
  history.push('/TommyGun');
};


  return (
    <PgContainer>
      
    <Header color="red">
    <audio controls id="audioPlayer">
            <source src={story} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
    Appropriate Response
    </Header>
        <Header color="#9370db">
           
        </Header>
        <Header color="#9370db">
        <ul>
        <li>Acknowledgment</li>
        <li>Compassion</li>
        <li>Transformation</li>
      </ul>
      <Button onClick={handleClick} primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}>
        The Connection {hover ? <ArrowForward /> : <ArrowRight/>}</Button>
        </Header>
    </PgContainer>
  )
}

export default newWorldOrder