import React,{useState} from 'react'
import {PgContainer,Header,Img} from './pageElements'
import {Button} from './codeElements';
import {ArrowForward, ArrowRight} from '../components/HeroSection/HeroElements'
import { useHistory } from 'react-router-dom';
import story from '../images/jes.jpg'
import call from '../Audio/Call.mp3'


const signUp = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hover, setHover] = useState(false)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();
  const onHover = () => {
    setHover(!hover)
}

  const handleClick = () => {
  // Replace '/NWO' with the actual path you want to navigate to
    history.push('/link');
};


  return (
    <PgContainer>
    <Header color="#9370db">
    <audio controls id="audioPlayer">
            <source src={call} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
    Casting Call
    </Header>
    <Header color="#9370db">
    <center>
      <Img src={story} />
      </center>
      <Button onClick={handleClick} primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}>
      Next Page(Scan Me) {hover ? <ArrowForward /> : <ArrowRight/>}</Button>
      
        </Header>
        

    </PgContainer>
  )
}

export default signUp