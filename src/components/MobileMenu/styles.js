import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Link } from "react-router-dom";


export const Container = styled.div`
  display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    height: 100vh;
    padding: 5.6rem 2.8rem 0rem;

    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    z-index: 2;
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;    
    background-color: var(--bg-color1);
        
    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
    
    &[data-menu-is-open="false"] {
      transform: translateX(-100%);
    }
    
    .box-input {
      height: 4.8rem;
      margin-bottom: 3.6rem;

      svg {
        color: var(--text-color4);
      }
    }
  }
`

export const Close = styled.div`

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    color: var(--text-color1);
    font-size: 2.1rem;
    font-family: "Roboto", sans-serif;
    margin-bottom: 6rem;
  
    display: flex;
    align-items: center;
    gap: 1rem;
  
    svg {
      color: var(--text-color1);
      font-size: 2.4rem;
      cursor: pointer;
    }
  }
`

export const Button = styled(Link)`

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    color: var(--text-color3);
    background: none;
  
    font-size: 2.4rem;
    font-weight: 300;
    text-align: start;
    
    border: none;
    padding: 1rem;
    cursor: pointer;    
  }

`
