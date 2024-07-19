import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  width: 100%;
  color: var(--text-color3);
  font-size: 2.4rem;
  font-weight: 700;
  padding: 0rem 2rem;
  
  display: flex;
  align-items: center;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    font-size: 3.2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-weight: 500;
  }


`
