import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--bg-color-input2);
  border-radius: .8rem;

  svg {
    background-color: var(--bg-color-input2);
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    margin-left: 1rem;    
    margin-top: .5rem;
  }

  input {
    flex: 1;
    background-color: var(--bg-color-input2);
    color: var(--text-color1);
    border: none;
    border-radius: .8rem;
    padding: 1.2rem 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }


`