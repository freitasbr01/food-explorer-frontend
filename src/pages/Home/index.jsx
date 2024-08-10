import { Container } from './styles';
import { useState, useEffect } from 'react';

import { CoverHome } from '../../components/CoverHome';
import { Header } from '../../components/Header';
import { Plates } from '../../components/Plates';
import { Footer } from '../../components/Footer';

import { api } from '../../services/api';


export function Home() {
  const [search, setSearch] = useState("");
  const [plates, setPlates] = useState([]);
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

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates?title=${search}`);
      setPlates(response.data);
    }

    fetchPlates();
  }, [search]);

  return (
    <Container>
      <Header
        uniqueOrderCount={uniqueOrderCount}
        setSearch={setSearch}
      />
      
      <CoverHome />

      <Plates
        addToOrderList={addToOrderList}
        plates={plates}
      />

      <Footer />      
    </Container>
  )
}