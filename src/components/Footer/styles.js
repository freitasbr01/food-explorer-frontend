import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  width: 100%;
  padding: 2.4rem 2rem;
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .logo-header {
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    font-family: "Roboto", sans-serif;      
    
    display: flex;
    align-items: center;
    gap: 1rem;

    img { width: 3rem; }
    h1 { font-size: 2.4rem; }
  }

  .box-toggle {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  p {
    color: var(--text-color2);
    font-family: "DM Sans", sans-serif;
    font-size: 1.4rem;
  }


  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2.8rem 2rem;
    justify-content: space-between;

    .logo-header {
      gap: .6rem;
      img {width: 2.1rem;}
      h1 {font-size: 1.4rem;}
    }

    p { font-size: 1.1rem; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const ButtonToggleMode = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  cursor: pointer;
  
  background: none;  
  border: none;

  svg {  
    color: var(--icon-color1);
    font-size: 2.2rem;
    margin-top: .5rem;
  }
`