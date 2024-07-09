import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


// SECTION CONTAINER
export const Container = styled.div`
  position: relative;
  margin-bottom: 6.2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) { 
    max-width: 76.8rem;
    margin-inline: auto;
    padding: 0 1rem;
  }
`

  // SECTION BACKGROUND-COVER
export const BackgroundCover = styled.div`
  max-width: 112.0rem;
  margin-inline: auto;
  height: 26rem;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  position: relative;

  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) { height: 12rem; }  

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) { height: 9rem; }
`


// SECTION PICTURE
export const Picture = styled.picture`
  img {
    width: 100%;
    height: auto;
    max-width: 65.6rem;
    height: 41.2rem;

    position: absolute;
    z-index: 1;
    top: -140px;
    left: -70px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    img {      
      max-width: 53rem;
      height: auto;
      top: -64px;
      left: -60px;
    }   
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    img {      
      max-width: 19.1rem;
      height: 14.9rem;
      top: -30px;
      left: 60px;
    }    
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    img { left: 28px; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM2}) {
    img { left: -4px; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    img {
      max-width: 13rem;
      top: -38px;
      left: -2px;
    }
  }
`


// SECTION TITLE-COVER
export const TitleCover = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  max-width: 42.2rem;
  margin: 1rem 6rem 0rem 0rem;

  h1 {font-size: 4rem; font-weight: 500;}
  p {font-family: "Roboto", sans-serif; font-size: 1.6rem; }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 1rem 8rem 0rem 0rem;
    h1 {font-size: 2rem;}
    p {font-size: 1.4rem;}
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 28rem;
    margin: 1rem 1rem 0rem 0rem;
    h1 {font-size: 1.8rem;}
    p {font-family: "Poppins", sans-serif; font-size: 1.2rem;}
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM2}) {
    max-width: 21rem;
    margin-right: 0rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    max-width: 18rem;
    margin-right: 1rem;
    h1 {font-size: 1.6rem;}
    p {font-size: 1.1rem;}
  }
`