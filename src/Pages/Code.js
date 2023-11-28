import React, { useState } from 'react'
import 'codemirror/keymap/sublime';
import 'codemirror/theme/the-matrix.css';
import { PgContainer,Header,Div,Button,P1,H2} from './codeElements';
import {ArrowForward, ArrowRight} from '../components/HeroSection/HeroElements'
import { useHistory } from 'react-router-dom';
import story from '../Audio/Story.mp3'

const Code = () => {

  const history = useHistory();
  const [hover, setHover] = useState(false)
  
  const onHover = () => {
        setHover(!hover)
    }

    const handleClick = () => {
      // Replace '/NWO' with the actual path you want to navigate to
      history.push('/NWO');
    };
  
  
  // const submitCode = () => {
  //   axios
  //     .post("http://localhost:80/python", { code })
  //     .then(({ data }) => {
  //       setTestCases([data.passOrFail]);
  //     });
  // };
  
  return (
    <PgContainer>
      <Header>
        <Div>
        <audio controls id="audioPlayer">
            <source src={story} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <H2>The Character's Story (John 7:53-8:11)</H2>
          <P1>[Then each went to his own house,"while Jesus went to the Mount of Olives.* 
            But early in the morning he arrived again in the temple area, and all the 
            people started coming to him, and he sat down and taught them. "Then the 
            scribes and the Pharisees brought a woman who had been caught in adultery 
            and made her stand in the middle. *They said to him, "Teacher, this woman was 
            caught in the very act of committing adultery. "Now in the law, Moses 
            commanded us to stone such women." So what do you say?" "They said this to 
            test him, so that they could have some charge to bring against him. Jesus 
            bent down and began to write on the ground with his finger." " But when 
            they continued asking him, he straightened up and said to them, "Let the 
            one among you who is without sin be the first to throw a stone at her." 
            "Again he bent down and wrote on the ground. "And in response, they went 
            away one by one, beginning with the elders. So he was left alone with the 
            woman before him. Then Jesus straightened up and said to her, "Woman, where 
            are they? Has no one condemned you?" I'She replied, "No one, sir." Then Jesus 
            said, "Neither do I condemn you. Go. [and) from now on do not sin any more."]

</P1>
          
        </Div>
       <Button onClick={handleClick} primary='true' dark='true' onMouseEnter={onHover} onMouseLeave={onHover}>
        The Response {hover ? <ArrowForward /> : <ArrowRight/>}</Button>
      </Header>
    </PgContainer>
  );
}

export default Code