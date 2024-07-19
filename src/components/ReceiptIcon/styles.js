import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
  display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
    position: relative;
    background: none;
    border: none;

    svg {
      font-size: 2.6rem;
      color: var(--text-color1);
    }

    span {
      font-size: 1.4rem;
      width: 20px;
      height: 20px;

      position: absolute;
      top: -6px;
      right: -7px;

      background: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      border-radius: 50%;
    }
  }
`