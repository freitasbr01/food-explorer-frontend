import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 0 1rem;

  font-size: 1.4rem;
  font-weight: 400;

  border: none;
  border-radius: .5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }


`