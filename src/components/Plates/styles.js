import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  padding: 0 1rem;

  .content {
    max-width: 112.2rem;
    height: 53rem;
    margin-inline: auto;
    margin-bottom: 4.8rem;
    position: relative;       
  }

  h2 {
      color: var(--text-color3);
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 2.4rem;     
      line-height: 140%;
    }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-left: 2.4rem;

    .content { 
      max-width: 64.8rem;
      height: 34.1rem; 
    }

    h2 { font-size: 1.8rem; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .content { 
      overflow: hidden;
      margin-bottom: 2.4rem;
    }

    .arrow-left { display: none; }
    .arrow-right { display: none; }
  }
`


export const Gradient = styled.div`
  .gradient {
    position: absolute;
    z-index: 1;
    top: 69px;
    height: 47rem; 
    border-radius: 5px;
  }

  .left {
    width: 27.8rem;
    background: var(--bg-gradient-right);
    left: -1px;
  }

  .right {
    width: 22.4rem;
    background: var(--bg-gradient-left);
    right: -1px;    
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    .gradient {
      width: 15rem;
      height: 32rem;      
      top: 48px;
    }

    .right {
      right: 0;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .gradient { display: none; }
  }
`


export const ButtonArrow = styled.div`

  .arrow {
    color: var(--arrow-color);
    background: none;
    border: none;
    font-size: 4rem;
    position: absolute;
    z-index: 1;
    top: 280px;
  }

  .right { right: -50px; }
  .left { left: -75px; }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {    
    .arrow { top: 150px; }
    .right { right: -40px; }
    .left { left: -45px; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .arrow { display: none; }
  }
`