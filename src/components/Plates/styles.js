import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
  padding: 0 1rem;
  
  .content {
    max-width: 112.2rem;
    height: 53rem;
    margin-inline: auto;
    margin-bottom: 4.8rem;
    position: relative;       
  }

  h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 3.2rem;
      font-weight: 500;
      margin-bottom: 2.4rem;     
      line-height: 140%;
    }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-left: 2.4rem;

    .content { 
      max-width: 76.8rem; 
      height: 34.1rem; 
    }

    h2 { font-size: 1.8rem; }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .content { 
      overflow: hidden;
      margin-bottom: 2.4rem;
    }

    .arrow-left { display: none; }
    .arrow-right { display: none; }
  }
`


export const Gradient = styled.div`
  .gradient {
    position: absolute;
    z-index: 1;
    top: 69px;
    height: 46rem;      
  }

  .left {
    width: 27.8rem;
    background: linear-gradient(to right, rgba(0, 10, 15, 1) 27%, rgba(0, 10, 15, 0) 100%);
  }

  .right {
    width: 22.4rem;
    background: linear-gradient(to left, rgba(0, 10, 15, 1) 27%, rgba(0, 10, 15, 0) 100%);
    right: 0;
  }



  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {

    .gradient {
      width: 15rem;
      height: 29rem;      
      top: 50px;
    }
    
    .left {
      background: linear-gradient(to right, rgba(0, 10, 15, 1) 27%, rgba(0, 10, 15, 0) 100%);
    }

    .right {
      background: linear-gradient(to left, rgba(0, 10, 15, 1) 27%, rgba(0, 10, 15, 0) 100%);
      right: 0;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .gradient { display: none; }
  }
`


export const ButtonArrow = styled.div`

  .arrow {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: none;
    border: none;
    font-size: 4rem;
    position: absolute;
    z-index: 1;
    top: 260px;
  }

  .right {
    right: 0px;    
  }    



  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    
    .arrow {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: none;
      border: none;
      font-size: 4rem;
      position: absolute;
      z-index: 1;
      top: 150px;
    }

    .right {
      right: 0px;    
    }    

  }


  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .arrow { display: none; }
  }
`