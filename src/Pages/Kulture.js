import React, {useState} from 'react'
import {PgContainer,Header,Img2} from './pageElements'
import {Button} from './codeElements';
import {ArrowForward, ArrowRight} from '../components/HeroSection/HeroElements'
import { useHistory } from 'react-router-dom';
import story from '../Audio/Values.mp3'
import pic1 from '../images/connect.jpg'



const Kulture = () => {

  const [hover, setHover] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  const onHover = () => {
    setHover(!hover)
}

  const handleClick = () => {
  // Replace '/NWO' with the actual path you want to navigate to
    history.push('/signUp');
};
  return (
    <PgContainer>
      <Header color="gold">
      <audio controls id="audioPlayer">
            <source src={story} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
      Personal Connection and Appeal
      </Header>
      <Header color="#9370db">
      < Img2 src={pic1} />
        <ul>
        <li>Forgiveness and Growth</li>
        <li>Universal Vulnerability</li>
        <li>Second Chances Appeal</li>
      </ul>
      <Button onClick={handleClick} primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}>
        Next Page {hover ? <ArrowForward /> : <ArrowRight/>}</Button>
        </Header>
    </PgContainer>
  )
}

export default Kulture