import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.form`
  padding: 0rem 3.2rem;

  .back {
    font-size: 2.4rem;
    font-weight: 700;
    svg {font-size: 3.2rem;}
    margin: 3.5rem 0rem 2.4rem -2.5rem;
  }

  h1 {
    color: var(--text-color3);
    font-size: 3.2rem;
    font-weight: 500;
    margin-bottom: 3.2rem;
  }

  .label-img { font-weight: 500; }

  .section1 {
    display: flex;
    align-items: center;
    gap: 3.2rem;
    margin-bottom: 3.2rem;
  }

  .section2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;
    margin-bottom: 3.2rem;
  }

  .section3 {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-bottom: 11.6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .back {
      font-size: 1.6rem;
      font-weight: 500;
      svg {font-size: 2.2rem;}
      margin-bottom: 0rem;
    }

    h1 { margin-bottom: 0rem; }

    .section1 {
      flex-direction: column;
      gap: 2.4rem;
      margin-bottom: 0rem;
    }

    .section2 {
      flex-direction: column;
      align-items: start;
      gap: 2.4rem;
      margin-bottom: 0rem;
    }

    .section3 {
      gap: 2.4rem;
      margin-bottom: 5.3rem;
    }
  }
`


export const BoxInputUpload = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const BoxInputText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .box-input {
    background: var(--bg-color-input1);
  }
`


export const BoxSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.6rem;

  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 2.4rem;
    position: absolute;
    top: 46px;
    right: 20px;
    pointer-events: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    svg {
      top: 47px;
      right: 20px;
    }
  }
`


export const Select = styled.select`
  width: 100%;
  color: var(--text-color4);
  background: var(--bg-color-input1);
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  border: none;
  border-radius: 5px;
  appearance: none;
  outline: none;
  padding: 1.6rem;
`


export const BoxIngredients = styled.div`
  .box-ingredient {
    width: 100%;
    height: auto;
    background: var(--bg-color-input1);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.6rem;

    margin-top: 1.6rem;
    padding: 2rem 1rem;
    border-radius: 5px;
  }
`


export const BoxInputNumber = styled.div`
  width: 100%;
  max-width: 25.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  
  .box-input {
    background: var(--bg-color-input1);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 100%;
  }
`


export const BoxTextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  textarea {
    height: 17.2rem;
    color: var(--text-color1);
    background: var(--bg-color-input1);
    padding: 1.4rem;
    border: none;
    border-radius: 8px;
    ::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`


export const Buttons = styled.div`
  align-self: end;

  .button-save, .button-delete {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 5px;
    border: none;
    padding: 1.2rem 0rem;
  }
  
  .button-save {
    width: 17.2rem;
    background: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  .button-delete {
    width: 13.5rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .box-delete-save {    
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }


  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    align-self: normal;    
    .button-save { width: 100%; }    
    .button-delete { width: 100%; }
  }
`

