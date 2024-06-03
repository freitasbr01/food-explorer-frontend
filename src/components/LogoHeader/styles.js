import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';


export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
  font-family: "Roboto", sans-serif;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 1rem;
  }
`

