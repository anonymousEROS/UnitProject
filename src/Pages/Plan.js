import {Button} from '../components/ButtonElements'
import React, {useState} from 'react'
import {ArrowForward, ArrowRight} from '../components/HeroSection/HeroElements'
import { Header, PgContainer,Body } from './planElements'

const Plan= () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <PgContainer>
      <Header color="green">The Plan
        <Body color="red" font="40px">
            Our main goal is to bring all communities from the tech community
            to our daily world issue follwers and all the way to the our anime fans
            introducing all very own trading cards with in house custom designed characters.
          <Header>
          <Button to='/about' onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true' dark='true'>
                Home{hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
          </Header>
        </Body>
        </Header>
    </PgContainer>
  )
}

export default Plan