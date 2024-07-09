import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 110.6rem;
  margin-inline: auto;
  font-family: "Roboto", sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  gap: 10rem;

  .logo-header {
    margin-bottom: 10rem;
    h1 {
      font-size: 4.2rem;
    }

    img {
      width: 4.9rem;
    }
  }


  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    align-items: normal;    
    max-width: 36.0rem;
    margin-inline: auto;
    margin-top: 15.8rem;
    padding: 0 2rem;
    gap: 0rem;

    .logo-header {
      margin-bottom: 0rem;
      h1 {
        font-size: 3.7rem;
      }

      img {
        width: 4.3rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .logo-header {
      h1 {
        font-size: 3.1rem;
      }

      img {
        width: 3.8rem;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 34.8rem;
  flex: 1;

  h2 {    
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 3.2rem;
    text-align: center;
  }

  Label {
    display: block;
    margin: 3.2rem 0 .8rem 0;
  }

  .button-order {
    height: 4.8rem;
    margin: 3.2rem 0 3.2rem 0;    
  }

  a {
    font-size: 1.4rem;
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 500;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 3.5rem;
    
    h2 {
      display: none;
    }
    
  }
`