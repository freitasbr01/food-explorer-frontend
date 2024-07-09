import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


// SECTION Container Card
export const Container = styled.div`
  max-width: 30.4rem;
  height: 46.2rem;
  padding: 1.6rem 2.3rem 2.4rem 2.3rem;
  margin-right: 1.6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 21rem;
    height: 29.2rem;
    padding: 1.6rem 2.3rem 2.4rem 2.3rem;
    margin-right: 1.6rem;
  }
`


// SECTION ImgCard
export const ImgCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    max-width: 17.6rem;
    margin-top: -2rem;
  }

  .icon {
    align-self: flex-end;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    svg {width: 2.4rem; height: 2.2rem;}
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-bottom: 1.2rem;

    img {
      max-width: 8.8rem;
      margin-top: -2.5rem;
    }
  }
`


// SECTION DescriptionCard
export const DescriptionCard = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h3 {
    width: 25.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 3.2rem;
    margin-bottom: 1.5rem;
  }



  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-bottom: 1.2rem;

    h3 {
      width: 16.3rem;
      font-size: 1.4rem;
      font-weight: 500;
      margin-bottom: 1.2rem;
    }

    p {
      display: none;
    }

    span {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 1.6rem;
    }
  }
`


// SECTION BoxCountInclude
export const BoxCountInclude = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.6rem;

  .button-count {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
    border: none;
    svg {font-size: 2.4rem;}
  }

  .button-order {
    max-width: 9.2rem;
    height: 4.8rem;
  }




  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;

    .button-order {
      max-width: 16.2rem;
      height: 3.2rem;
    }
  }
`


// SECTION BoxCount
export const BoxCount = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 1.6rem;
  }
`
