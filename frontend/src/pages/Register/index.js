import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import './style.css'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      city,
      uf,
    };
    
    try {
      const response = await api.post('ongs', data)
      alert(`Seu id de acesso: ${response.data.id}`);
      history.push('/');
    } catch(err) {
      alert('Erro no cadastro.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Nome da ONG" 
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="E-mail" 
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Contato telefônico" 
            value={phone}
            onChange={e=>setPhone(e.target.value)}
          />

          <div className="input-group">
            <input 
              type="text" 
              placeholder="Cidade" 
              value={city}
              onChange={e=>setCity(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="UF" 
              value={uf}
              onChange={e=>setUf(e.target.value)}
              style={{ width: 80 }} 
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;