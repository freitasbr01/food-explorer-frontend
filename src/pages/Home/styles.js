import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  max-width: 136.8rem;
  margin-inline: auto;
  padding: 0rem 12.2rem;


  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0;
  }

`
