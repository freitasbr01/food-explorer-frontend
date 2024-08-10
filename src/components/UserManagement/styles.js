import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 112.2rem;
  height: 100vh;
  margin-inline: auto;
  font-family: "robotto", sans-serif;

  .back { margin: 5.2rem 0rem 4.2rem; }
  .content { padding: 0 3rem; }

  .title {
    font-size: 2.9rem;
    margin-bottom: 6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
  .back { margin: 6rem 0rem 1.6rem; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM2}) {
    .title {
      font-size: 2.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    .title {
      font-size: 1.9rem;
    }
  }
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const SelectRole = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;