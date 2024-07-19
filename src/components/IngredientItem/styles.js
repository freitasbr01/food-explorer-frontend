import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  display: flex;
  align-items: center;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  background: ${({ isNew }) => isNew ? "transparent" : "var(--bg-color-ingredients)"};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 8px;
  padding-right: 1.6rem;
  
  input {
    width: 100%;
    padding: .8rem 1.4rem;
    
    color: var(--text-color1);
    background: transparent;
    
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
  
  > button {
    border: none;
    background: none;
    margin-top: 5px;
  }
  
  .button-delete {
    color: var(--text-color1);
  }
  
  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
