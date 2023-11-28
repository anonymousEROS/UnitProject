import React from 'react'
import{PgContainer,Header,Img} from '../Pages/pageElements'
import Footer from '../components/Footer'
import blkkap from '../images/blkkap.jpg'

const About = () => {
  return (
    <>
    <PgContainer>
      <Header color="red">
        Dear Whom it may concern,
      </Header>
      <center>
      <Img src={blkkap} />
      </center>
        <Header color="green">
        11010110010010110101101
        </Header>
        <Header color="blue" font="60px">
          Loading........
        </Header>
        <Header color="red" font="40px">
        sincerely, 
          <br />
          匿名のエロス
        </Header>
        <Footer /> 
    </PgContainer>
    
        
    </>
    

  )
}

export default About