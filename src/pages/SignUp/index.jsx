import { Container, Form } from './styles';

import { LogoHeader } from '../../components/LogoHeader';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from "react";
import { api } from '../../services/api';

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  function handleSignUp(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("users", { name, email, password })
    .then(() => {
      alert("Cadastro realizado com sucesso!");
      navigate("/")
    }).catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.")
      }
    });
  }

  return (
    <Container>
      <LogoHeader className="logo-header"/>

      <Form>
        <h2>Crie sua conta</h2>

        <Label htmlFor="name" title="Nome" />
        <Input
          placeholder='Exemplo: Maria da Silva'
          type="text" 
          id='name'
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Label htmlFor="email" title="Email" />
        <Input
          placeholder='exemplo@exemplo.com.br'
          type="text" 
          id='email'
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Label htmlFor="password" title="Senha" />
        <Input
          placeholder='No mínimo 6 caracteres'
          type="text" 
          id='password'
          icon={FiLock}
          minLength="6"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          className="button-create" 
          title="Criar conta" 
          onClick={handleSignUp} 
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>

    </Container>
  )
}