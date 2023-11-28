import React, {useState} from 'react'
import Video from '../../Videos/video.mp4'
import {Button} from '../ButtonElements'
import DateTime from '../DateTime/index.js';
import{
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1></HeroH1>
            <HeroP>
                <DateTime></DateTime>
            </HeroP>
            <HeroBtnWrapper>
                <Button to='/code' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'>
                    入る{hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection