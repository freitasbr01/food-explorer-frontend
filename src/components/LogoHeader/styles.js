import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  .logo-title {
    display: flex;
    align-items: center;
    gap: 1.9rem;
  }
  
  p {
      font-family: "Roboto", sans-serif;
      font-size: 1.2rem;
      color: var(--text-color-cake2);
      align-self: flex-end;
      margin-top: -.2rem;
    }
    
    
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    align-items: center;
    gap: .8rem;
    
    .logo-title {
      gap: 1rem;      
    }
    
    p {
      line-height: 2.4rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    img {
      width: 2.5rem;
    }

    h1 {
      font-size: 2.4rem;
    }
  }
`

