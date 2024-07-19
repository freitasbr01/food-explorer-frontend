import { Container } from './styles';
import { useState } from 'react';

import { CoverHome } from '../../components/CoverHome';
import { Header } from '../../components/Header';
import { Plates } from '../../components/Plates';
import { Footer } from '../../components/Footer';


export function Home() {
  const [orderList, setOrderList] = useState({}); 

  const addToOrderList = (product, quantity) => {
    setOrderList((prevOrderList) => {
      const newOrderList = { ...prevOrderList };

      if (newOrderList[product]) {
        newOrderList[product] += quantity;
      } else {
        newOrderList[product] = quantity;
      }
      return newOrderList;
    });
  };

  const uniqueOrderCount = Object.keys(orderList).length;

  return (
    <Container>

      <Header uniqueOrderCount={uniqueOrderCount} />
      <CoverHome />
      <Plates addToOrderList={addToOrderList} />
      <Footer />      
      
    </Container>
  )
}
