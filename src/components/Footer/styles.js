import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  width: 100%;
  max-width: 112rem;
  margin-inline: auto;
  padding: 2.4rem 1rem;

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

    img {width: 3rem;}
    h1 {font-size: 2.4rem;}
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: "DM Sans", sans-serif;
    font-size: 1.4rem;
  }



  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2.9rem 2.7rem;
    /* justify-content: space-around; */

    .logo-header {
      gap: .6rem;
      img {width: 2.2rem;}
      h1 {font-size: 1.5rem;}
    }

    p { font-size: 1.2rem; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM2}) {
    flex-direction: column;
    gap: 1rem;
  }
`
