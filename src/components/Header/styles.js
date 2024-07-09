import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  margin-bottom: 16.8rem;
  padding: 2.4rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.2rem;
  

  .input-search {
    max-width: 58rem;
    height: 4.8rem;
    svg { margin-left: 6.0rem; }
  }

  .button-order {
    max-width: 21.6rem;
    height: 5.6rem;
    svg { font-size: 3.2rem; }
  }

  .signout {font-size: 3.2rem; cursor: pointer; }
  .display-icon { display: none; }
  


  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 5.6rem;
    margin-bottom: 6.8rem;
    padding: 0 2rem;
    
    .display-icon { display: block; }
    .signout { display: none; }
    .button-order {display: none; }

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
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