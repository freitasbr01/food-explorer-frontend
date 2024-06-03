import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: none;
  border-radius: .5rem;
  

  padding: 12px 32px;
`