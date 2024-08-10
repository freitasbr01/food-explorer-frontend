import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  max-width: 32.0rem;

  color: var(--text-color1);
  background: var(--bg-color-input1);
  font-size: 1.4rem;
  font-weight: 500;

  padding: 1.2rem 3.2rem 1.2rem 1.5rem;

  border-radius: 8px;
  input { display: none; }

  label {
    display: flex;
    align-items: center;
    gap: .8rem;

    svg {
      font-size: 24px;
      flex-shrink: 0;
    }

    .description_upload{
      white-space: nowrap;
    }

    .truncated-text {
      white-space: nowrap;
      overflow: hidden; 
      text-overflow: ellipsis;
      color: ${({ theme }) => theme.COLORS.LIGHT_600};
    }
  }
`

