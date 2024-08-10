import { Container, Form } from './styles';

import { LogoHeader } from '../../components/LogoHeader';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(event) {
    event.preventDefault();

    signIn({ email, password });
  }

  return (
    <Container>
      <LogoHeader className="logo-header"/>

      <Form>
        <h2>Faça login</h2>
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
          className="button-login"
          title="Entrar" 
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>

    </Container>
  )
}

