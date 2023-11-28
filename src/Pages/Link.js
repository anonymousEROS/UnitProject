import React,{useState} from 'react'
import {PgContainer,Header,Img2} from './pageElements'
import {Button} from './codeElements';
import {ArrowForward, ArrowRight} from '../components/HeroSection/HeroElements'
import { useHistory } from 'react-router-dom';
import story from '../images/qr.png'


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
    history.push('/code');
};


  return (
    <PgContainer>
    <Header color="#9370db">
    Show Support By Following ;)
    </Header>
    <Header color="#9370db">
    <center>
      <Img2 src={story} />
      </center>
      <Button onClick={handleClick} primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}>
        The Story {hover ? <ArrowForward /> : <ArrowRight/>}</Button>
        </Header>
    </PgContainer>
  )
}

export default signUp