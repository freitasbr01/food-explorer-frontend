import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  width: 100%;
  max-width: 112.8rem;
  margin-inline: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .back {
    margin: 5.2rem 0rem 4.2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    .back {
      margin: 6rem 0rem 1.6rem;
    }
  }
`

export const Content = styled.div`
  max-width: 112.4rem;
  margin-inline: auto;
  padding: 0rem 1rem;
  
  display: flex;
  align-items: start;
  gap: 4.8rem;
  flex: 1;
  
  img {
    width: 100%;
    max-width: 39rem;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    img { max-width: 30rem; margin-inline: auto; }
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 31.6rem;
    margin-inline: auto;
    margin-bottom: 3.4rem;
    text-align: center;

    flex-direction: column;
    gap: 0rem;

    img { 
      max-width: 26.4rem;
      margin-top: 1.6rem 
    }

  }
`

export const Description = styled.div`
  max-width: 68.7rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  
  h1 {
    font-size: 4rem;
    font-weight: 500;
  }
  
  p {
    font-size: 2.4rem;
  }
  
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 1.6rem;
    
    h1 {
      font-size: 2.7rem;
      font-weight: 500;
    }

    p {
      font-size: 1.6rem;
    }
  }
`

export const BoxIngredients = styled.div`
  max-width: 48.8rem;
  margin-bottom: 3.0rem;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.2rem;  
  flex-wrap: wrap;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
    gap: 2.4rem;
  }
`

export const BoxCountButton = styled.div`
    display: flex;
    align-items: center;
    gap: 3.3rem;

    .button-order {
      max-width: 16.2rem;
      height: 4.8rem;
      font-size: 1.4rem;
      font-weight: 500;
      svg { display: none }
    }

    .Count {
      svg { font-size: 2.4rem; }
    }
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
    gap: 1.6rem;

    .button-order {
      max-width: 18.8rem;
      height: 3.8rem;
      font-size: .94rem;
      svg { font-size: 2.2rem;}
    }

    .Count {
      svg { font-size: 2.7rem; }
    }
  }
`
