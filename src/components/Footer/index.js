import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
// import {animateScroll as scroll} from 'react-scroll';


import{
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {

    // const toggleHome = () => {
    //     scroll.scrollToTop()
    //   }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
                <FooterLinkWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About BLKKAP</FooterLinkTitle>
                            {/* <FooterLink to='/thePlan'>THE PLAN</FooterLink> */}
                    </FooterLinkItems>
                </FooterLinkWrapper>
            </FooterLinkContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo >
                        BLKKAP
                    </SocialLogo>
                    <WebsiteRights>BLKKAP © {new Date().getFullYear()}
                    </WebsiteRights>
                    <SocialIcons>
                        {/* <SocialIconLink href="https://www.instagram.com/fxck_uh_username/" target="_blank"
                        aria-label="Instragram">
                            <FaInstagram />
                        </SocialIconLink> */}
                        <SocialIconLink href="https://www.linkedin.com/in/jaidan-dovala-4299a3117/" target="_blank"
                        aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer