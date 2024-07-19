import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  color: var(--text-color3);
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;  

  .button-count {
    color: var(--text-color1);
    background: none;
    border: none;

    svg {
      font-size: 2.4rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.6rem;
    font-weight: 400;
  }
`


