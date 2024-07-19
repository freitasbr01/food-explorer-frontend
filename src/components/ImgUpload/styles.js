import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  width: 100%;

  color: var(--text-color1);
  background: var(--bg-color-input1);
  font-size: 1.4rem;
  font-weight: 500;

  padding: 1.2rem 3.2rem;

  border-radius: 8px;
  input { display: none; }

  label {
    display: flex;
    align-items: center;
    gap: .8rem;

    svg { font-size: 2.4rem; }
  }

`

