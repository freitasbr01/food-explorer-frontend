import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: inline-block;
    height: 3.2rem;
    color: var(--text-color1);
    background: var(--bg-color-ingredients);
    
    padding: 4px 8px;
    border-radius: 5px;
    text-align: center;  
  
    span {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }

`

