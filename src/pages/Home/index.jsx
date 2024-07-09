import { Container } from './styles';
import { useState } from 'react';

import { CoverHome } from '../../components/CoverHome';
import { Header } from '../../components/Header';
import { Plates } from '../../components/Plates';
import { Footer } from '../../components/Footer';


export function Home() {
  const [orderList, setOrderList] = useState({}); 
  const [showReceipt, setShowReceipt] = useState(false); 

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

  const uniqueOrderCount = Object.keys(orderList).length

  return (
    <Container>

      <Header uniqueOrderCount={uniqueOrderCount} onReceiptClick={() => setShowReceipt(true)} />
      <CoverHome />
      <Plates addToOrderList={addToOrderList}  />
      <Footer />      
      
    </Container>
  )
}



  // No componente HEADER DEIXEI O onReceiptClick PARA QUANDO O ICONE DO RECIBO FOR CLICADO, POR ENQUANTO NÃO FUNCIONA. NECESSÁRIO CRIAR O COMPONENTE DE LISTA AINDA. O QUE ESCREVI AQUI ESTÁ LINKADO COM O DE BAIXO.
  // <Header uniqueOrderCount={uniqueOrderCount} onReceiptClick={() => setShowReceipt(true)} />


  // CRIAR NOVO COMPONENTE PARA mostrar LISTA DE PEDIDOS.
  // {showReceipt && <Orders orderList={orderList} onClose={() => setShowReceipt(false)} />}