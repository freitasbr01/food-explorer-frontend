import { Container, UserRow, SelectRole } from './styles';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonBack } from '../../components/ButtonBack';

export function UserManagement({ ...rest }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get('/users');
      setUsers(response.data);
    }

    fetchUsers();
  }, []);

  async function handleRoleChange (userId, newRole) {
    await api.put(`/users/${userId}/role`, { role: newRole });

    setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
  };


  return (
    <Container>
      <Header />

    <ButtonBack
        className="back"
        title="voltar"
        icon={IoIosArrowBack }
        onClick={handleBack} 
      />

      <div className="content">
        <h1 className='title' >Gerenciamento de Usuários</h1>

        {users.map(user => (
          <UserRow key={user.id}>
            <span>{user.name}</span>
            <SelectRole 
              value={user.role} 
              onChange={(e) => handleRoleChange(user.id, e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </SelectRole>
          </UserRow>
        ))}
      </div>

    <Footer />
    </Container>
  );
}