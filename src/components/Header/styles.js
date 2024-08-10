import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  padding: 2.4rem 2rem;

  .input-search {
    max-width: 58rem;
    height: 4.8rem;
    svg { margin-left: 6.0rem; }
  }

  .button-order {
    width: 100%;
    max-width: 21.6rem;
    height: 5.6rem;
    svg { font-size: 3.2rem; }
  }

  .signout {
    color: var(--text-color1);
    background: none;
    border: none;
    font-size: 3.2rem;
    cursor: pointer;
  }

  .display-icon { display: none; }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 5.6rem;
    padding: 0 2rem;
    .logo-header { margin-inline: ${({ $isCustomer }) => $isCustomer ? '0px' : 'auto'}; }    
    .display-icon { display: block; cursor: pointer;}
    .signout { display: none; }
    .button-order { display: none; }
    .input-search { display: none; }
    
    svg {
      color: var(--text-color1);
      font-size: 2.4rem;
    }

  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0rem .8rem;
  }
`