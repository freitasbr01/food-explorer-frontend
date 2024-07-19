import { Container } from './styles';
import { FiPlus, FiMinus } from "react-icons/fi";


export function BoxCount({ itemCount, setItemCount, ...rest }) {

  function CountPlus() {
    setItemCount(itemCount + 1)
  }

  function CountMinus() {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  }

  function formatWithLeadingZero(itemCount) {
    return itemCount < 10 ? `0${itemCount}` : itemCount;
  }

  return (
    <Container {...rest} >
        <button className='button-count' onClick={CountMinus}><FiMinus /></button>
          {formatWithLeadingZero(itemCount)}
        <button className='button-count' onClick={CountPlus}><FiPlus /></button>        
    </Container>
  )
}