import { Container } from './styles';
// import { useNavigate } from 'react-router-dom';

import { PiReceipt } from "react-icons/pi";

export function ReceiptIcon({ uniqueOrderCount, onReceiptClick, ...rest }) {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate('/');
  // }

  return (
    <Container {...rest} onClick={onReceiptClick}>
      <PiReceipt />
        <span>
          {uniqueOrderCount}
        </span>
    </Container>
  )
};